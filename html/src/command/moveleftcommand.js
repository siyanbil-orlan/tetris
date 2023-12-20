import Command from './command.js'

export default class MoveLeftCommand extends Command {
    constructor(tetrisGame) {
        super();
        this.tetrisGame = tetrisGame;
    }

    execute() {
        this.tetrisGame.movePieceLeft();
    }
}