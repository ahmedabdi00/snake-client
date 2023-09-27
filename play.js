const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.20.44.112", // Corrected IP address here
    port: 50541, // Corrected PORT number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Event handler for incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

console.log("Connecting ...");
const conn = connect();

// You can also add an event handler for the "connect" event
conn.on("connect", () => {
  console.log("Connected to server!");
});
