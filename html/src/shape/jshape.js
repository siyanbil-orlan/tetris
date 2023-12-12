import Shape from './shape.js'

export default class JShape extends Shape {
    constructor() {
        super([
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0],
        ], '#FFA500');
    }
}