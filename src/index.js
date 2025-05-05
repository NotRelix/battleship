import { Player } from "./classes/player";
import { playerOneShips, playerTwoShips } from "./modules/placeholder";
import { populateBoard } from "./modules/populate";
import { displayBoard } from "./modules/screen";
import "./style.css";

const playerOne = new Player("Reece");
const playerTwo = new Player("Computer");

console.log(playerOne.gameboard);
console.log(playerTwo.gameboard);

populateBoard(playerOne, playerOneShips);
populateBoard(playerTwo, playerTwoShips);

displayBoard("player-one", playerOneShips);
displayBoard("player-two", playerTwoShips);
