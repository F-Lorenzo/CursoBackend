import fs from "fs";

export function auth(req, res, next) {
  let user = req.query.user;
  async function userData() {
    await JSON.parse(fs.promises.readFile("../db/dbUsuarios.js", "utf-8"));
  }
  const usuario = userData().find((usuario) => usuario.name === user);
  if (usuario.authorized == true) {
    next();
  } else {
    res.redirect("/api");
  }
}
