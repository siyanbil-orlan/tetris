import Command from './command.js'

export default class MoveDownCommand extends Command {
    constructor(tetrisGame) {
        super();
        this.tetrisGame = tetrisGame;
    }

    execute() {
        this.tetrisGame.movePieceDown();
    }
}