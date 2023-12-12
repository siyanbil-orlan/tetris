import Shape from './shape.js'

export default class LShape extends Shape {
    constructor() {
        super([
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1],
        ], '#FFFF00');
    }
}