export default class InputHandler {
    constructor() {
        this.commands = {};
    }

    setCommand(key, command) {
        this.commands[key] = command;
    }

    handleInput(key) {
        const command = this.commands[key];
        if (command) {
            command.execute();
        }
    }
}