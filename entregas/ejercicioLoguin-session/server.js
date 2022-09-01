/*============================[Modulos]============================*/
const dotenv = require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const passport = require("passport");
const { Strategy } = require("passport-local");
const LocalStrategy = Strategy;
const bcrypt = require("bcrypt");

const parse = require("yargs/yargs");
const process = require("process");
const { fork } = require("child_process");

const User = require("./src/models/User.js");

const path = require("path");
const app = express();

const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const optionsMDB = require("./options/mariaDB");
const knexMDB = require("knex")(optionsMDB);
const optionsSQL3 = require("./options/SQLite3");
const knexSQL3 = require("knex")(optionsSQL3);

const mongoStore = require("connect-mongo");
const advancedoptions = { useNewUrlParser: true, useUnifiedTopology: true };

const data = require("./api/dataBase.js");
const mdb = new data(knexMDB, "products");
const sql3 = new data(knexSQL3, "messages");
const mongoose = require("mongoose");

/*============================[Middlewares]============================*/

/*----------- Session -----------*/
app.use(
  session({
    store: mongoStore.create({
      mongoUrl: process.env.MONGO_DB,
      mongoOptions: advancedoptions,
    }),

    secret: process.env.MONGO_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000,
    },
  })
);

/*----------- Motor de plantillas -----------*/
app.set("views", path.join(path.dirname(""), "./src/views"));
app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

/*============================[Base de Datos]============================*/
mongoose
  .connect("mongodb://localhost:27017/passport-local")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));

/*==========================[Passport]===========================*/

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) console.log(err);
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) console.log(err);
        if (isMatch) return done(null, user);
        return done(null, false);
      });
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

/* -------------------------------------------------------------------------- */
/*                                    yargs                                   */
/* -------------------------------------------------------------------------- */

const yargs = parse(process.argv.slice(2));

const { port, _ } = yargs
  .boolean("debug")
  .alias({
    // m: 'modo',
    p: "port",
    // d: 'debug'
  })
  .default({
    // modo: 'prod',
    port: 8080,
    // debug: false
  }).argv;

const server_info = {
  arguments: process.argv.slice(2),
  os: process.env.os,
  node_version: process.versions.node,
  memory_usage: process.memoryUsage().rss,
  exec_path: process.execPath,
  process_id: process.pid,
  current_working_directory: process.cwd(),
};

/*============================[Rutas]============================*/

/* -------------------------------- rutas log ------------------------------- */
function auth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.render("login-error");
  }
}

app.get("/", (req, res) => {
  if (req.user) {
    res.redirect("/datos");
  } else {
    res.redirect("/login");
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/login-error", (req, res) => {
  res.render("login-error");
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "login-error" }),
  (req, res) => {
    res.redirect("/datos");
  }
);

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const { username, password, direccion } = req.body;
  User.findOne({ username }, async (err, user) => {
    if (err) console.log(err);
    if (user) res.render("register-error");
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        password: hashedPassword,
        direccion,
      });
      await newUser.save();
      res.redirect("/login");
    }
  });
});

app.get("/datos", async (req, res) => {
  if (req.user) {
    const datosUsuario = await User.findById(req.user._id).lean();
    res.render("datos", {
      datos: datosUsuario,
    });
  } else {
    res.redirect("/login");
  }
});

app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

/* ------------------------------- rutas info yargs ------------------------------- */

app.get("/info", (req, res) => {
  res.json(server_info);
});

/* --------------------------------- randoms -------------------------------- */

app.get("/random", (req, res) => {
  const cant = req.query.cant || 1000000;
  const child = fork(
    path.resolve(process.cwd(), "./randomNumberController.js")
  );
  child.send(cant);
  child.on("message", (msg) => {
    res.json({ numeros: msg });
  });
});

/* -------------------------------------------------------------------------- */
/*                               conexion socket                              */
/* -------------------------------------------------------------------------- */
io.on("connection", async (socket) => {
  console.log("Usuario conectado !!!!!!!!!");

  // PRODUCTOS
  socket.emit("productos", await mdb.getAll());

  socket.on("actualizar", async (producto) => {
    mdb.save(producto);
    io.sockets.emit("productos", await mdb.getAll());
  });

  // MENSAJES
  socket.emit("mensajes", await sql3.getAll());

  socket.on("mensajeNuevo", async (mensaje) => {
    mensaje.fyh = new Date().toLocaleString();
    sql3.save(mensaje);
    io.sockets.emit("mensajes", await sql3.getAll());
  });
});

/*============================[Servidor]============================*/
const PORT = port || 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
server.on("error", (error) => {
  console.error(`Error en el servidor ${error}`);
});
