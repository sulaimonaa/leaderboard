const scores = [
    {
      player: 'Name',
      playerScore: 100,
    },
    {
      player: 'Name',
      playerScore: 20,
    },
    {
      player: 'Name',
      playerScore: 50,
    },
    {
      player: 'Name',
      playerScore: 78,
    },
    {
      player: 'Name',
      playerScore: 125,
    },
    {
      player: 'Name',
      playerScore: 77,
    },
    {
      player: 'Name',
      playerScore: 42,
    },
  ];
  
  const scoreboard = document.querySelector('.scores');
  
  const display = () => {
    scoreboard.innerHTML = '';
    scores.forEach((score, index) => {
      const scoreList = document.createElement('ul');
      scoreList.innerHTML = `
                  <li>${score.player}: ${score.playerScore}</li>
              `;
  
      scoreboard.appendChild(scoreList);
    });
  };
  
  export default display;
  