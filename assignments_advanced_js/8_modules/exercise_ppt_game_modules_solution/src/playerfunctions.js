// -----------------------------------
// Functions to change player statuses
// -----------------------------------

/**
 * Show status of all players
 * @param players (een array van player-objecten)
 */
function show(players) {
    for(const player of players){
        console.log(player);
    }
}

/**
 * Decreases the lifes of a player object by 1
 * @param player (a player object is passed as a parameter)
 */
// Here your function expression
const removeLive = (player) => player.lives--;

/**
 * Toggle the medikit property in the player object
 * @param player (a player object is passed as a parameter)
 */
const toggleMedikit = (player) => player.medikit = !player.medikit;

/**
 * Returns true if the player has a medikit, otherwise false
 * @param player (a player object is passed as a parameter)
 * @returns {boolean}
 */
const hasMedikit = (player) => player.medikit;

// ////////////////////////////////////////////////////////////////
// TODO: EXPORT THE FUNCTIONS THAT MIGHT BE NEEDED IN OTHER MODULES
// ////////////////////////////////////////////////////////////////

// Your code here
