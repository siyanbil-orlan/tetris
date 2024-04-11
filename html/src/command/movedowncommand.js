import Command from './command.js'

export default class MoveDownCommand extends Command {
    execute() {
        this.tetrisGame.movePieceDown();
    }
}