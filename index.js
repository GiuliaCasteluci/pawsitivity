import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const PORT = 4000;

//Creating server for http
const httpServer = http.createServer(app);
//

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  //   res.json({ data: "Hello from socket" });
  res.sendFile(__dirname + "/index.html");
});


io.on("connection", (socket) => {
  socket.on("send-message", (data) => {
    socket.broadcast.emit('message-from-server', data)
    console.log("message recieved",data);
  });

  socket.on("typing-started", () => {
    socket.broadcast.emit('typing-started-from-server')

  });



  socket.on("typing-stoped", () => {
    socket.broadcast.emit('typing-stoped-from-server')

  });


socket.on("disconnect", (socket) => {
  console.log("User left");

});

});


httpServer.listen(PORT, () => {
  console.log("sERVER IS RUNNING AT http://localhost:4000");
});
