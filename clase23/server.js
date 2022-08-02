import express from "express";
// import cookieParser from "cookie-parser";

const PORT = 8080;
const app = express();

// app.use(express.json());
// app.use(cookieParser());

// app.post("/cookies", (req, res) => {
//   const cookieName = req.body.name;
//   const cookieValue = req.body.value;
//   const expiration = req.body.expires;

//   res
//     .send(cookieName, cookieValue, { maxAge: expiration })
//     .send({ process: "ok" });
// });

const server = app.listen(PORT, () => {
  console.log(`server funcionando en port http://localhost:${PORT}`);
});
server.on("error", (err) => console.error(err));
