import users from "../db/dbUsuarios.js";

export default function (req, res, next) {
  let user = req.query.user;
  const userData = JSON.parse(fs.readFileSync(users, "utf-8"));
  const usuario = userData.find((usuario) => usuario.name === user);
  if (usuario.authorized == true) {
    next();
  } else {
    res.redirect("/api");
  }
}
