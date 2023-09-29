const net = require("net");

// Function to send the name to the server
const sendName = (conn) => {
  conn.write("Name: AA"); 
};  

const sendMoveUp = (conn) => {
  conn.write("Move: up");
};

// Establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "172.20.44.112",
    port: 50541,
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Event handler for incoming data
  conn.on("data", (data) => console.log("Server says:", data));

  // Event handler for the "connect" event
  conn.on("connect", () => {
    console.log("Connected to server!");
    sendName(conn); // Send the name upon connection
    // sendMoveUp(conn); //Send the command to move up
  });

  return conn;
};

console.log("Connecting ...");
const conn = connect();
