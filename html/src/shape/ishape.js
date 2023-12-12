import Shape from './shape.js'

export default class IShape extends Shape {
    constructor() {
        super([
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ], '#FF0000');
    }
}