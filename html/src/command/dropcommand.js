import Command from './command.js'

export default class DropCommand extends Command {
    constructor(tetrisGame) {
        super();
        this.tetrisGame = tetrisGame;
    }

    execute() {
        this.tetrisGame.dropPiece();
    }
}