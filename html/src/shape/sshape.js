import Shape from './shape.js'

export default class SShape extends Shape {
    constructor() {
        super([
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0],
        ], '#0000FF');
    }
}