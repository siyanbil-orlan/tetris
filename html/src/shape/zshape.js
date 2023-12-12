import Shape from './shape.js'

export default class ZShape extends Shape {
    constructor() {
        super([
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0],
        ], '#FFA500');
    }
}