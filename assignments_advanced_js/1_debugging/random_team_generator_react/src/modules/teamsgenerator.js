/**
 * Puts 'size' members in a team (array)
 * @param members	array of possible persons
 * @param size		size of the team
 * @returns {Array}	a new team randomly selected
 */
const getRandomTeam = (members, size) => {
    const currentTeam = [];

    //Form a team
    for (let i = 0; i < size; i++) {
        const randomPerson = members[Math.floor(Math.random() * members.length)];

        // The last team may have fewer members
        if (randomPerson === undefined) break;
        currentTeam.push(randomPerson);

        // Remove person who is already placed in a group (this works because arrays are passed by reference!)
        members.splice(members.indexOf(randomPerson), 1);
    }
    return currentTeam;
};

/**
 * Generates an array with teams with each randomly chosen persons from entries
 * @param entries	array with size of teams and array with persons
 * @returns {Array}
 */
const generateTeamsFromEntries = function(entries) {
    const size = entries[0].value;
    const members = entries[1].value;
    return generateTeams(members, size);
};

const generateTeams = function(members, size) {
    //loop through a copy of members
    const teams = members.slice().map(() => getRandomTeam(members, size + 1));
    //remove empty array values
    const teamsNoEmpty = teams.filter((member)=>member.length > 0);
    //Remove line breaks
    const teamsNoLineBreaks = teamsNoEmpty.map((members) => members.map((member) => member.replace(/(\r\n\t|\n|\r\t)/gm, "")))
    return addHoldToTeam(teamsNoLineBreaks);
};

/**
 * Adds element to show if a team should be on hold or not
 * @param teams array with teammembers
 * @returns array (multidimensional)
 */
const addHoldToTeam = function(teams){
    return teams.map((team) => [team, false]);
};

export {generateTeams, generateTeamsFromEntries};
