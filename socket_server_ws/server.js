const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", (ws) => {
  ws.send("Hello! I am a server");
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
  });
});
