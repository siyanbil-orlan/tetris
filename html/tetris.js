import LShape from './src/shape/lshape.js'

class TetrisGame {
    constructor(canvasId, gridSize) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.gridSize = gridSize;
        this.rows = this.canvas.height / gridSize;
        this.columns = this.canvas.width / gridSize;
        this.grid = this.initGrid();
        this.currentPiece = null;
    }

    initGrid() {
        const grid = [];
        for (let row = 0; row < this.rows; row++) {
            grid[row] = [];
            for (let col = 0; col < this.columns; col++) {
                grid[row][col] = 0;
            }
        }
        return grid;
    }

    drawSquare(x, y, color) {
        this.context.fillStyle = color;
        this.context.fillRect(x * this.gridSize, y * this.gridSize, this.gridSize, this.gridSize);
        this.context.strokeStyle = '#000';
        this.context.strokeRect(x * this.gridSize, y * this.gridSize, this.gridSize, this.gridSize);
    }

    drawGrid() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                this.drawSquare(col, row, this.grid[row][col] ? '#333' : '#fff');
            }
        }
    }

    spawnPiece() {
        const tetrominoTypes = [LShape, /* Добавь другие типы тетромино */];
        const randomIndex = Math.floor(Math.random() * tetrominoTypes.length);
        this.currentPiece = new tetrominoTypes[randomIndex]();

        // Позиционируем тетромино вверху поля
        this.currentPiece.x = Math.floor(this.columns / 2) - Math.floor(this.currentPiece.shape[0].length / 2);
        this.currentPiece.y = 0;
    }

    movePiece() {
        //
    }

    rotatePiece() {
        //
    }

    dropPiece() {
        //
    }

    update() {
        //
    }

    gameLoop() {
        this.update();
        this.drawGrid();
        // Добавь здесь логику для движения тетромино и обработки пользовательского ввода
        requestAnimationFrame(() => this.gameLoop());
    }

    startGame() {
        this.gameLoop();
    }
}

// Использование класса
const tetrisGame = new TetrisGame('tetrisCanvas', 30);
tetrisGame.startGame();
