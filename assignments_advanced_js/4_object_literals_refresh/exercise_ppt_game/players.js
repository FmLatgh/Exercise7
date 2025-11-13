// -------------------------
// The players of the 'main'
// -------------------------

// so no objects..?
//pclass
class Player {
  constructor(name, lives, medikit) {
    this.name = name;
    this.lives = lives;
    this.medikit = medikit;
  }
}

const player1 = new Player('Jean', 3, false);
const player2 = new Player('Pierre', 2, true);