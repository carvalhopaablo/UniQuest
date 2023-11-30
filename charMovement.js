const image = document.getElementById('char');
let positionX = 0;
let positionY = 0;
let isFlipped = false;

const zoomLevel = window.devicePixelRatio;
const speed = 32;

window.addEventListener('load', () => {
    // Redefine a posição da barra de rolagem para o topo e à esquerda
    window.scrollTo(0, 0);
});

// Adiciona ouvintes de eventos para os botões clicáveis
document.getElementById('btnLeft').addEventListener('click', () => {
    if(positionX > 0){
		window.scrollBy(-speed, 0);
		isFlipped = true;
		image.style.transform = 'scaleX(-1)';
		positionX -= speed;
		updateImagePosition();
	}

});

document.getElementById('btnRight').addEventListener('click', () => {
	if(positionX < 1248){
		isFlipped = false;
		image.style.transform = 'scaleX(1)';
		positionX += speed;
		updateImagePosition();
		window.scrollBy(speed, 0);
		console.log(positionX);
	}
});

document.getElementById('btnUp').addEventListener('click', () => {
    if(positionY > 0){
		positionY -= speed;
		updateImagePosition();
		window.scrollBy(0, -speed);
	}
});

document.getElementById('btnDown').addEventListener('click', () => {
	if(positionY < 1216){
		positionY += speed;
		updateImagePosition();
		window.scrollBy(0, speed);
		console.log(positionY);
	}
});

// Função para atualizar a posição da imagem
function updateImagePosition() {
    image.style.transform = `translate(${positionX}px, ${positionY}px)`;
}
