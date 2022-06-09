const express = require("express");
const router = require("./routes.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(__dirname + "/public")); //asi se buscan los archivos estaticos

const PORT = 8080;
const app = express();

app.use("/api", router); //middleware

const server = app.listen(PORT, () => {
  console.log(`server funcionando en port http://localhost:${PORT}`);
});
server.on("error", (err) => console.error(err));
