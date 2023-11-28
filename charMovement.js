const image = document.getElementById('char');
let positionX = 0;
let positionY = 0;
let isFlipped = false;

const zoomLevel = window.devicePixelRatio;
const speed = zoomLevel * 80;

console.log("Nível de Zoom: " + zoomLevel);

// Adiciona ouvintes de eventos para os botões clicáveis
document.getElementById('btnLeft').addEventListener('click', () => {
    isFlipped = true;
    image.style.transform = 'scaleX(-1)';
    positionX -= speed;
    updateImagePosition();
	window.scrollBy(-speed, 0);
});

document.getElementById('btnRight').addEventListener('click', () => {
    isFlipped = false;
    image.style.transform = 'scaleX(1)';
    positionX += speed;
    updateImagePosition();
	window.scrollBy(speed, 0);
});

document.getElementById('btnUp').addEventListener('click', () => {
    positionY -= speed;
    updateImagePosition();
	window.scrollBy(0, -speed);
});

document.getElementById('btnDown').addEventListener('click', () => {
    positionY += speed;
    updateImagePosition();
	window.scrollBy(0, speed);
});

// Função para atualizar a posição da imagem
function updateImagePosition() {
    image.style.left = positionX + 'px';
    image.style.top = positionY + 'px';
}
