const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.20.44.112", // Corrected IP address here
    port: 50541, // Corrected PORT number here
  });

  const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };

  const handleUserInput = function () {
    if (key === "\u0003") {
      process.exit();
    }
  };

  // interpret incoming data as text
  conn.setEncoding("utf8");

  stdin.on("data", handleUserInput);

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
