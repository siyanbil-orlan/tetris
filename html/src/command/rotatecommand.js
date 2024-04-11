import Command from './command.js'

export default class RotateCommand extends Command {
    execute() {
        this.tetrisGame.rotatePiece();
    }
}