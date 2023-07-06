const refreshBtn = document.querySelector('#getallscores');

const initRefreshBtn = (game) => {
  refreshBtn.addEventListener('click', async () => {
    await game.getScores();
  });
};

export default initRefreshBtn;