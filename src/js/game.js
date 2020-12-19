import Character from './domain';

class Game {
    start() {
        console.log('game started');
        this.character = new Character();
    }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}

export default Game;
