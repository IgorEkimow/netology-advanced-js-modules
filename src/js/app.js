console.log('app worked');

import Game from './game';
import {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './game';

const game = new Game();
game.start();