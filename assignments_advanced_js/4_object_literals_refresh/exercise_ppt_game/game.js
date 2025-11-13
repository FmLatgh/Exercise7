// ----------------------------------------
// The main object to store the main status
// ----------------------------------------

// -----------------------------------------------------------------------------------------------------------------------
// TODO: Complete the main-object below with a property 'players' and assign it a value with all player-objects (an array)
// -----------------------------------------------------------------------------------------------------------------------

class Game {
  constructor(players) {
    this.players = players
  }
}

let main = new Game([player1,player2]);

// Main
console.log("All players:");
show(main.players);

console.log("Player 2 has lost a life:")
removeLive(main.players[1]);
show(main.players);

console.log("Player1 collects a medikit:")
toggleMedikit(main.players[0]);
show(main.players);

console.log("Player 1 a medikit?", hasMedikit(main.players[0])? "Yes" : "No");
console.log("Player 2 a medikit?", hasMedikit(main.players[1])? "Yes" : "No");
