export default class Command {
    constructor(tetrisGame) {
        this.tetrisGame = tetrisGame;
    }

    execute() {
        throw new Error("The execute method must be redefined");
    }
}