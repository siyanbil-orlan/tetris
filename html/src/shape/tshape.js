import Shape from './shape.js'

export default class TShape extends Shape {
    constructor() {
        super([
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0],
        ], '#000080');
    }
}