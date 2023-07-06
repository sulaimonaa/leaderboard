const leaderBoardList = document.querySelector('.scores');
const createListItem = (userData) => {
  const scoreListItemEl = document.createElement('ul');
  const userScoreEl = document.createElement('li');
  userScoreEl.innerText = `${userData[0]} : ${userData[1]}`;
  scoreListItemEl.appendChild(userScoreEl);
  leaderBoardList.appendChild(scoreListItemEl);
};

const display = (game) => {
  leaderBoardList.innerHTML = '';
  game.forEach((element) => {
    const userData = Object.values(element).reverse();
    createListItem(userData);
  });
};

export default display;
