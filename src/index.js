import './css/style.css';
import Game from './modules/games.js';
import initRefreshBtn from './modules/refresh.js';
import initScoreSubmit from './modules/addScore.js';

const game = new Game();

game.getScores();
initScoreSubmit(game);
initRefreshBtn(game);
