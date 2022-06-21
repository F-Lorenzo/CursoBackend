const socket = io();

socket.on("mensaje", (data) => {
  alert(data);
});
socket.emit("respuesta", "esta es la respuesta del front");
