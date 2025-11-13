// -----------------------------------
// Functions to change player statuses
// -----------------------------------

/**
 * Function declaration show
 * Show status of all players
 * @param players (een array van player-objecten)
 */
function show(players) {
    for(const player of players){
        console.log(player);
    }
}

// -----------------------------------------------------
// TODO: Complete the other functions below as described
// -----------------------------------------------------

/**
 * Function removeLife
 * Decreases the lifes of a player object by 1
 * @param player (a player object is passed as a parameter)
 */
// Here your function declaration
function removeLive(player) {
    player.lives -= 1;
    console.log(player.name + " lost a life!");
}


/**
 * Function toggleMedikit
 * Toggle the medikit property in the player object
 * @param player (a player object is passed as a parameter)
 */
// Here your function declaration
function toggleMedikit(player) {
  player.medikit = false;
}

/**
 * Function hasMedikit
 * Returns true terug if the player has a medikit, otherwise false
 * @param player (a player object is passed as a parameter)
 * @returns {boolean}
 */
// Here your function expression
const hasMedikit = function(player) {
  return player.medikit;
};