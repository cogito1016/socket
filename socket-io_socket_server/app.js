const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server); //HTTP서버를 Socket서버로 업그레이드

server.listen(3000, () => {
  console.log("Socket IO Server listening on port 3000 ");
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

//연결이되면 소켓이 연결됨
//그럼 인자로 소켓이 들어온다
io.on("connection", (socket) => {
  io.emit(`새로운 참가자 두두둥장`);
  socket.on("message", (data) => {
    console.log(`Message from Client : ${data}`);
  });
});
