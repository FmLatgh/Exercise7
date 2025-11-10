// ------------------------------------------------------
// Unit tests (DO NOT CHANGE! These are used to check your code and show the results in the console in your browser)
// Chai-library is used
// ------------------------------------------------------

// Unit tests main.js
const should = chai.should();
let expected;
let actual;

// Check if functions exist
main.should.be.a('object');

// Game object should have a property players containing an array
chai.expect(expected).to.equal(actual);
chai.expect(main).to.have.property('players').that.is.a('array');

// Property players should contain two players
chai.expect(main.players).to.have.lengthOf(2);


// Unit tests playerfunctions.js
// Check if functions exist
removeLive.should.be.a('function');
toggleMedikit.should.be.a('function');
hasMedikit.should.be.a('function');

// Function removeLive should decrease the lives of player1 by one
expected = player1.lives - 1;
removeLive(player1);
actual = player1.lives;
chai.expect(expected).to.equal(actual);

// Function toggleMedikit should toggle the medikit of player2
expected = !player2.medikit;
toggleMedikit(player2);
actual = player2.medikit;
chai.expect(expected).to.equal(actual);

// Function hasMedikit should show the medikit status of player2
expected = player2.medikit;
actual = hasMedikit(player2);
chai.expect(expected).to.equal(actual);

