const image = document.getElementById('char');
let positionX = 0;
let positionY = 0;
const speed = 32;
let currentDirection = ''; // Adiciona uma variável para rastrear a direção atual

// Adiciona ouvintes de eventos para os botões clicáveis
document.getElementById('btnLeft').addEventListener('click', () => moveLeft());
document.getElementById('btnRight').addEventListener('click', () => moveRight());
document.getElementById('btnUp').addEventListener('click', () => moveUp());
document.getElementById('btnDown').addEventListener('click', () => moveDown());

// Adiciona um ouvinte de eventos para as setas do teclado
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            event.preventDefault(); // Prevenir o comportamento padrão apenas para a seta para a esquerda
            moveLeft();
            break;
        case 'ArrowRight':
            event.preventDefault(); // Prevenir o comportamento padrão apenas para a seta para a direita
            moveRight();
            break;
        case 'ArrowUp':
            event.preventDefault(); // Prevenir o comportamento padrão apenas para a seta para cima
            moveUp();
            break;
        case 'ArrowDown':
            event.preventDefault(); // Prevenir o comportamento padrão apenas para a seta para baixo
            moveDown();
            break;
    }
});

// Função para mover para a esquerda
function moveLeft() {
    if (positionX > 0) {
        window.scrollBy(-speed, 0);
        positionX -= speed;
        updateImagePosition('walk_left.gif', 'left');
    }
}

// Função para mover para a direita
function moveRight() {
    if (positionX < 1440) {
        positionX += speed;
        updateImagePosition('walk_right.gif', 'right');
        window.scrollBy(speed, 0);
    }
}

// Função para mover para cima
function moveUp() {
    if (positionY > 0) {
        positionY -= speed;
        updateImagePosition('walk_up.gif', 'up');
        window.scrollBy(0, -speed);
    }
}

// Função para mover para baixo
function moveDown() {
    if (positionY < 1536) {
        positionY += speed;
        updateImagePosition('walk_down.gif', 'down');
        window.scrollBy(0, speed);
    }
}

// Função para atualizar a posição da imagem
function updateImagePosition(imageSrc, direction) {
    // Altera dinamicamente a imagem do personagem apenas se a direção estiver mudando
    if (direction !== currentDirection) {
        image.src = imageSrc;
        currentDirection = direction;
    }

    // Atualiza a posição da imagem
    image.style.transform = `translate(${positionX}px, ${positionY}px)`;
}







const imageDog = document.getElementById('dog');
let positionXdog = 0;
let positionYdog = 0;
const speedDog = 32;
let moveRightDog = true; // Inicia movendo para a direita

function moveDog() {
  if (moveRightDog) {
    // Move para a direita
    positionXdog += speedDog;
  } else {
    // Move de volta para a esquerda
    positionXdog -= speedDog;
  }

  // Atualiza a posição e a escala da imagem
  imageDog.style.transform = `translate(${positionXdog}px, ${positionYdog}px) scaleX(${moveRightDog ? 1 : -1})`;

  // Alterna a direção após mover 32 pixels
  if (positionXdog % (speedDog * 30) === 0) {
    moveRightDog = !moveRightDog;
  }

  // Agende a próxima chamada da função com base na taxa de atualização do seu GIF
  setTimeout(moveDog, 100); // 100 milissegundos
}

// Inicia o movimento chamando a função pela primeira vez
moveDog();
