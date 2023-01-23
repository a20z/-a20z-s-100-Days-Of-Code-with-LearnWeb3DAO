// Codecademy's team stats project

// creates object
const team = {
    _players: [
      {firstName: 'Angelina',
        lastName: 'Johnson',
        age: 17},
      {firstName: 'Harry', 
        lastName: 'Potter',
        age: 16},
      {firstName: 'Katie',
        lastName: 'Bell',
        age: 17}
    ],
    _games: [
      {opponent: 'Slytherin', teamPoints: 40, opponentPoints: 170},
      {opponent: 'Hufflepuff', teamPoints: 180, opponentPonts: 70},
      {opponent: 'Ravenclaw', teamPoints: 90, teamPoints: 160}
    ],
    //creates getter method
  get players (){
    //this is used to access team at local scope
    return this._players;
  },
  get games (){
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
      };
    this.players.push(player);
    },
  
    addGame (newOpponent, newTeamPoints, newOpponentPoints){
      let game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newTeamPoints}
    this.games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98);
  
  console.log(team.players);
  console.log(team.games);
  
  
  