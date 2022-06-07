import express, { json, urlencoded } from "express";
app.use(json());
app.use(urlencoded({ extended: true }));

const PORT = 8080;
const app = express();

const server = app.listen(PORT, () => {
  console.log(`server funcionando en port http://localhost:${PORT}`);
});
server.on("error", (err) => console.error(err));
