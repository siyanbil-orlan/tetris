import Command from './command.js'

export default class MoveRightCommand extends Command {
    execute() {
        this.tetrisGame.movePieceRight();
    }
}