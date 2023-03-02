const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const gridSize = 10;
const gridWidth = canvas.width / gridSize;
const gridHeight = canvas.height / gridSize;

let snake = [
	{ x: 5, y: 5 },
	{ x: 4, y: 5 },
	{ x: 3, y: 5 }
];
let direction = "right";
let food = null;
let gameLoopId = null;
let isGameOver = false;

function drawSnake() {
	ctx.fillStyle = "green";
	snake.forEach(segment => {
		ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
	});
}

function moveSnake() {
	const head = snake[0];
	let x = head.x;
	let y = head.y;

	if (direction === "right") {
		x++;
	} else if (direction === "left") {
		x--;
	} else if (direction === "down") {
		y++;
	} else if (direction === "up") {
		y--;
	}

	// Check for collision with wall
	if (x < 0 || x >= gridWidth || y < 0 || y >= gridHeight) {
		gameOver();
		return;
	}

	// Check for collision with self
	if (snake.some((segment, index) => index !== 0 && segment.x === x && segment.y === y)) {
		gameOver();
		return;
	}

	// Check for collision with food
	if (food && food.x === x && food.y === y) {
		snake.unshift(food);
		food = null;
		createFood();
	} else {
		snake.pop();
	}

	snake.unshift({ x, y });
}

function createFood() {
	let x = Math.floor(Math.random() * gridWidth);
	let y = Math.floor(Math.random() * gridHeight);

	// Make sure the food doesn't spawn on the snake
	while (snake.some(segment => segment.x === x && segment.y === y)) {
		x = Math.floor(Math.random() * gridWidth);
		y = Math.floor(Math.random() * gridHeight);
	}

	food = { x, y };
}

function drawFood() {
	if (food) {
		ctx.fillStyle = "red";
		ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
	}
}

function update() {
	moveSnake();

	if (!isGameOver) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		drawFood();
		drawSnake();
	}
}
