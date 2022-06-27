const express = require("express");
const router = require("./routes.js");
const ejs = require("ejs");
const { dirname } = require("path");
const { fileURLToPath } = require("url");

const app = express();
const PORT = 8080;

const __dirname = dirname(fileURLToPath(import.meta.url));
/* ----------------------------------- use ---------------------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/", router);
/* ----------------------------------- set ---------------------------------- */
app.set("views", join(__dirname, "./views"));
app.set("view engine", "ejs");

const server = app.listen(PORT, () => {
  console.log(`server funcionando en port http://localhost:${PORT}`);
});
server.on("error", (err) => console.error(err));
