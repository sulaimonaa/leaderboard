import { showMessageData } from './messages.js';

const listEl = document.querySelector('.sub-btn');
const userNameField = document.querySelector('#name');
const scoreField = document.querySelector('#score');

const initScoreSubmit = (game) => {
  listEl.addEventListener('click', async (e) => {
    e.preventDefault();
    const userName = userNameField.value;
    const score = scoreField.value;
    try {
      if (userName.length === 0 && score.length === 0) {
        throw new Error('please provide a valid userName and password');
      }
      if (userName.length === 0 || score.length === 0) {
        if (userName.length === 0) {
          throw new Error('Name is required field');
        } else {
          throw new Error('score is required field');
        }
      }

      await game.setScore(userName, score);
    } catch (error) {
      showMessageData(error.message, 'error');
      return;
    }
    userNameField.value = '';
    scoreField.value = '';
  });
};

export default initScoreSubmit;