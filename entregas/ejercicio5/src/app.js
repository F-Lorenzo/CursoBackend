const express = require("express");
const router = require("./routes.js");
const ejs = require("ejs");
const path = require("path");

const app = express();
const PORT = 8080;

/* ----------------------------------- use ---------------------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/", router);
/* ----------------------------------- set ---------------------------------- */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

const server = app.listen(PORT, () => {
  console.log(`server funcionando en port http://localhost:${PORT}`);
});
server.on("error", (err) => console.error(err));
