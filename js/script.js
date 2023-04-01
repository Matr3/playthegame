// Variables del juego
let canvas;
let canvasContext;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 10;
let ballSpeedY = 4;
let player1Score = 0;
let player2Score = 0;
const WINNING_SCORE = 7;
let showingWinScreen = false;
let paddle1Y = 250;
let paddle2Y = 250;
const PADDLE_THICKNESS = 10;
const PADDLE_HEIGHT = 100;

// Función para dibujar la pelota
function drawBall() {
  canvasContext.fillStyle = 'white';
  canvasContext.beginPath();
  canvasContext.arc(ballX, ballY, 10, 0, Math.PI * 2, true);
  canvasContext.fill();
}

// Función para dibujar los marcadores
function drawScores() {
  canvasContext.fillStyle = 'white';
  canvasContext.fillText(`Player 1: ${player1Score}`, 100, 100);
  canvasContext.fillText(`Player 2: ${player2Score}`, canvas.width - 200, 100);
}

// Función para actualizar la posición de las paletas
function updatePaddles() {
  // Mueve la paleta del jugador 1
  if (wKeyPressed) {
    paddle1Y -= 10;
  } else if (sKeyPressed) {
    paddle1Y += 10;
  }

  // Mueve la paleta del jugador 2
  if (upArrowPressed) {
    paddle2Y -= 10;
  } else if (downArrowPressed) {
    paddle2Y += 10;
  }

  // Asegura que las paletas no se salgan del canvas
  if (paddle1Y < 0) {
    paddle1Y = 0;
  } else if (paddle1Y > canvas.height - PADDLE_HEIGHT) {
    paddle1Y = canvas.height - PADDLE_HEIGHT;
  }

  if (paddle2Y < 0) {
    paddle2Y = 0;
  } else if (paddle2Y > canvas.height - PADDLE_HEIGHT) {
    paddle2Y = canvas.height - PADDLE_HEIGHT;
  }
}

// Función para dibujar la red
function drawNet() {
  for (let i = 0; i < canvas.height; i += 40) {
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(canvas.width / 2 - 1, i, 2, 20);
  }
}

// Función para resetear la pelota
function resetBall() {
    if (player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
      showingWinScreen = true;
    }
  
    ballSpeedX = -ballSpeedX;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
  
    // Coloca la paleta del jugador 1 y 2 en el centro
    paddle1Y = canvas.height / 2 - PADDLE_HEIGHT / 2;
    paddle2Y = canvas.height / 2 - PADDLE_HEIGHT / 2;
  }
  // Función principal del juego
function game() {
    // Lógica del juego
    moveEverything();
    drawEverything();
  
    // Bucle del juego
    setInterval(game, 1000 / framesPerSecond);
  }
  
  // Iniciar el juego
  game();
  