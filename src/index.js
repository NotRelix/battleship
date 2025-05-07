import { Player } from "./classes/player";
import { game } from "./modules/game";
import { playerOneShips, playerTwoShips } from "./modules/placeholder";
import { populateBoard } from "./modules/populate";
import { displayBoard } from "./modules/screen";
import "./style.css";

const playerOne = new Player("Reece is cool");
const playerTwo = new Player("Computer");

populateBoard(playerOne, playerOneShips);
populateBoard(playerTwo, playerTwoShips);

displayBoard(playerOne.kebabName, playerOneShips);
displayBoard(playerTwo.kebabName, playerTwoShips);

game(playerOne, playerTwo);
