import Command from './command.js'

export default class MoveLeftCommand extends Command {
    execute() {
        this.tetrisGame.movePieceLeft();
    }
}