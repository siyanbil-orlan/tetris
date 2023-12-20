export default class Shape {
    constructor(shape, color) {
        this.shape = shape;
        this.color = color;
        this.x = 0;
        this.y = 0;
    }

    rotate() {
        const rotatedShape = this.shape.map((row, i) =>
            row.map((val, j) => this.shape[this.shape.length - 1 - j][i])
        );
        this.shape = rotatedShape;
    }

    moveDown() {
        this.y++;
    }

    moveUp() {
        this.y--;
    }

    moveLeft() {
        this.x--;
    }

    moveRight() {
        this.x++;
    }
}
