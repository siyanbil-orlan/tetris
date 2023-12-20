import Command from './command.js'

export default class RotateCommand extends Command {
    constructor(tetrisGame) {
        super();
        this.tetrisGame = tetrisGame;
    }

    execute() {
        this.tetrisGame.rotatePiece();
    }
}