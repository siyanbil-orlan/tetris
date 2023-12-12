import IShape from './src/shape/ishape.js'
import JShape from './src/shape/jshape.js'
import LShape from './src/shape/lshape.js'
import OShape from './src/shape/oshape.js'
import SShape from './src/shape/sshape.js'
import TShape from './src/shape/tshape.js'
import ZShape from './src/shape/zshape.js'

class TetrisGame {
    constructor(canvasId, gridSize) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.gridSize = gridSize;
        this.rows = this.canvas.height / gridSize;
        this.columns = this.canvas.width / gridSize;
        this.grid = this.initGrid();
        this.currentPiece = null;
        this.fallInterval = 200; // Интервал падения тетромино (в миллисекундах)
        this.lastFallTime = 0; // Время последнего падения
        this.isGameOver = false;
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
                const gridValue = this.grid[row][col];
                if (gridValue) {
                    // Если есть блок в grid, рисуем его
                    this.drawSquare(col, row, '#333');
                } else if (
                    this.currentPiece &&
                    this.currentPiece.shape[row - this.currentPiece.y] &&
                    this.currentPiece.shape[row - this.currentPiece.y][col - this.currentPiece.x]
                ) {
                    // Если есть тетромино, рисуем его блоки, учитывая текущую позицию
                    this.drawSquare(col, row, this.currentPiece.color);
                } else {
                    // Иначе рисуем пустую ячейку
                    this.drawSquare(col, row, '#fff');
                }
            }
        }
    }

    spawnPiece() {
        const tetrominoTypes = [LShape, JShape, IShape, OShape, SShape, TShape, ZShape];
        const randomIndex = Math.floor(Math.random() * tetrominoTypes.length);
        this.currentPiece = new tetrominoTypes[randomIndex]();

        // Позиционируем тетромино вверху поля
        this.currentPiece.x = Math.floor(this.columns / 2) - Math.floor(this.currentPiece.shape[0].length / 2);
        this.currentPiece.y = 0;
    }

    movePieceLeft() {
        this.currentPiece.moveLeft();
        if (this.isCollision()) {
            // Если столкновение, отменяем движение
            this.currentPiece.moveRight();
        }
    }

    movePieceRight() {
        this.currentPiece.moveRight();
        if (this.isCollision()) {
            // Если столкновение, отменяем движение
            this.currentPiece.moveLeft();
        }
    }

    movePieceDown() {
        this.currentPiece.moveDown();
        if (this.isCollision()) {
            // Если столкновение, отменяем движение и фиксируем тетромино
            this.currentPiece.moveUp();
            this.fixPiece();
            this.currentPiece = null;
        }
    }

    rotatePiece() {
        this.currentPiece.rotate();
        if (this.isCollision()) {
            // Если столкновение, отменяем вращение
            this.currentPiece.rotate();
            this.currentPiece.rotate();
            this.currentPiece.rotate();
        }
    }

    dropPiece() {
        while (!this.isCollision()) {
            this.currentPiece.moveDown();
        }
        // После завершения падения фиксируем тетромино на поле
        this.currentPiece.moveUp();
        this.fixPiece();
        this.currentPiece = null;
    }

    isCollision() {
        for (let row = 0; row < this.currentPiece.shape.length; row++) {
            for (let col = 0; col < this.currentPiece.shape[row].length; col++) {
                if (
                    this.currentPiece.shape[row][col] &&
                    (
                        this.grid[row + this.currentPiece.y] === undefined ||
                        this.grid[row + this.currentPiece.y][col + this.currentPiece.x] !== 0
                    )
                ) {
                    return true; // Столкновение
                }
            }
        }
        return false;
    }

    fixPiece() {
        for (let row = 0; row < this.currentPiece.shape.length; row++) {
            for (let col = 0; col < this.currentPiece.shape[row].length; col++) {
                if (this.currentPiece.shape[row][col]) {
                    this.grid[row + this.currentPiece.y][col + this.currentPiece.x] = 1;
                }
            }
        }
    }

    update() {
        const currentTime = Date.now();

        // Если прошло достаточно времени с момента последнего падения, двигаем тетромино вниз
        if (this.currentPiece !== null && currentTime - this.lastFallTime > this.fallInterval) {
            this.movePieceDown();
            this.lastFallTime = currentTime;
        }
        // Логика для обновления состояния игры
    }

    checkGameOver() {
        if (this.grid[0].includes(1)) {
            this.stopGame();
        }
    }

    gameLoop() {
        this.checkGameOver();

        if (this.isGameOver) {
            console.log('Game Over!');
            return;
        }

        // Если текущего тетромино нет, создаем новый
        if (this.currentPiece === null) {
            this.spawnPiece();
        }

        this.update();
        this.drawGrid();

        // Добавь здесь логику для движения тетромино и обработки пользовательского ввода
        requestAnimationFrame(() => this.gameLoop());
    }

    startGame() {
        this.gameLoop();
    }

    stopGame() {
        this.isGameOver = true;
    }
}

// Использование класса
const tetrisGame = new TetrisGame('tetrisCanvas', 30);
tetrisGame.startGame();
