const net = require("net");
const { connect } = require("./client"); // Import the connect function from client.js
const { setupInput } = require("./input");

const conn = connect();

conn.on("connect", () => {
  console.log("Connected to server!");
});

console.log("Connecting ...");

// You should also add code here to handle user input, which seems to be missing in your original snippet.
// You can use the setupInput function from input.js for this purpose.
