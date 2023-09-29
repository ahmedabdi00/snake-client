const net = require("net");

const sendName = (conn) => {
  conn.write("Name: AA");
};

const sendMoveUp = (conn) => {
  conn.write("Move: up");
};
const sendMoveLeft = (conn) => {
  conn.write("Move: left");
};
const sendMoveDown = (conn) => {
  conn.write("Move: down");
};
const sendMoveRight = (conn) => {
  conn.write("Move: right");
};

const connect = () => {
  const conn = net.createConnection({
    host: "172.20.44.112",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => console.log("Server says:", data));

  conn.on("connect", () => {
    console.log("Connected to server!");
    sendName(conn);
  });

  return conn;
};

console.log("Connecting ...");
const conn = connect();

module.exports = { connect, sendMoveUp }; // Export the connect function and sendMoveUp for use in other files
