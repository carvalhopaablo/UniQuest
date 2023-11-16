		const image = document.getElementById('char');
        let positionX = 0;
        let positionY = 0;
        
		let isFlipped = false;
		
		const zoomLevel = window.devicePixelRatio;
		
		const speed = zoomLevel*40;

console.log("Nível de Zoom: " + zoomLevel);

        document.addEventListener('keydown', (event) => {
        
		if (event.key === 'ArrowLeft') {
            isFlipped = true;
            image.style.transform = 'scaleX(-1)';
        } else if (event.key === 'ArrowRight') {
            isFlipped = false;
            image.style.transform = 'scaleX(1)';
        }
		
		switch (event.key) {
                case 'ArrowUp':
                    positionY -= speed;
                    break;
					
                case 'ArrowDown':
                    positionY += speed;
                    break;
					
                case 'ArrowLeft':
                    positionX -= speed;
                    break;
					
                case 'ArrowRight':
                    positionX += speed;
                    break;
            }

            image.style.left = positionX + 'px';
            image.style.top = positionY + 'px';
        });