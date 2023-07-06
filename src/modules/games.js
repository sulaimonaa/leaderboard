import display from './display.js';

class Game {
  #GAME_ID;

  #URL_ENDPOINT;

  constructor() {
    this.#GAME_ID = 'Bp15Fbno9bBRmgRIWByX';
    this.#URL_ENDPOINT = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${
      this.#GAME_ID
    }/scores`;
  }

  async getScores() {
    try {
      const response = await fetch(this.#URL_ENDPOINT);
      if (response.status === 200) {
        const data = await response.json();
        display(data.result);
        return;
      }
      throw new Error('unable to fetch data');
    } catch (error) {
      throw new Error('unknown error');
    }
  }

  async setScore(...data) {
    const response = await fetch(this.#URL_ENDPOINT, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      method: 'POST',
      body: JSON.stringify({
        user: data[0],
        score: data[1],
      }),
    });
    return response;
  }
}

export default Game;