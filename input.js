let connection;
const { connect, sendMoveUp } = require("./client"); // Import connect and sendMoveUp from client.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const setupInput = function () {
  rl.question("Enter 'w','a','s', or 'd' to move up: ", (answer) => {
    if (answer === "w") {
      sendMoveUp(connect()); // Call the sendMoveUp function to send the "Move: up" command
    } else if (answer === "a") {
      sendMoveLeft(connect());
    } else if (answer === "s") {
      sendMoveDown(connect());
    } else if (answer === "d") {
      sendMoveRight(connect());
    } 
    rl.close();
  });
};

module.exports = { setupInput };
