import Command from './command.js'

export default class DropCommand extends Command {
    execute() {
        this.tetrisGame.dropPiece();
    }
}