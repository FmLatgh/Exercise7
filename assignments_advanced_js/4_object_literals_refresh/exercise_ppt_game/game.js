// ----------------------------------------
// The main object to store the main status
// ----------------------------------------

// -----------------------------------------------------------------------------------------------------------------------
// TODO: Complete the main-object below with a property 'players' and assign it a value with all player-objects (an array)
// -----------------------------------------------------------------------------------------------------------------------

const game = {
    // Start here

};


// Main
console.log("All players:");
show(game.players);

console.log("Player 2 has lost a life:")
removeLive(game.players[1]);
show(game.players);

console.log("Player1 collects a medikit:")
toggleMedikit(game.players[0]);
show(game.players);

console.log("Player 1 a medikit?", hasMedikit(game.players[0])? "Yes" : "No");
console.log("Player 2 a medikit?", hasMedikit(game.players[1])? "Yes" : "No");
