const socket = io();

socket.on("mensaje", (data) => {
  alert(data);
  socket.emit("notification", "mensaje recibido");
});
