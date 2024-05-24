document.addEventListener('DOMContentLoaded', () => {
    const map = document.getElementById('map');
    let mapX = 0;
    let mapY = 0;

    const moveMap = (dx, dy) => {
        mapX += dx;
        mapY += dy;
        map.style.transform = `translate(${mapX}px, ${mapY}px)`;
    };

    let room1_Coordinates = [250, 250, -250, -250];
    let playerPosition = [0, 0];
    
    window.addEventListener('keydown', (event) => {
        const step = 10;
        switch (event.key) {
            case 'ArrowUp':
            case 'w':
                if (playerPosition[1] - step >= room1_Coordinates[3]) {
                    moveMap(0, step);
                    playerPosition[1] -= step; // Zmniejszamy pozycję gracza o wartość kroku (w górę)
                }
                break;
            case 'ArrowDown':
            case 's':
                if (playerPosition[1] + step <= room1_Coordinates[1]) {
                    moveMap(0, -step);
                    playerPosition[1] += step; // Zwiększamy pozycję gracza o wartość kroku (w dół)
                }
                break;
            case 'ArrowLeft':
            case 'a':
                if (playerPosition[0] + step <= room1_Coordinates[0]) {
                    moveMap(step, 0);
                    playerPosition[0] += step; // Zwiększamy pozycję gracza o wartość kroku (w lewo)
                }
                break;
            case 'ArrowRight':
            case 'd':
                if (playerPosition[0] - step >= room1_Coordinates[2]) {
                    moveMap(-step, 0);
                    playerPosition[0] -= step; // Zmniejszamy pozycję gracza o wartość kroku (w prawo)
                }
                break;
        }
    });
    

    // Define positions of objects
    const setElementPosition = (id, x, y) => {
        const element = document.getElementById(id);
        if (element) {
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
        } else {
            console.error(`Element with id '${id}' not found.`);
        }
    };

    // Create and set positions for objects when DOM is fully loaded
    window.onload = () => {
        // Create table element
        map.innerHTML += "<div id='table' class='table'></div>";
        // Set position for table
        setElementPosition('table', 200, 0);

        // Create chair elements and set positions
        for (let i = 1; i <= 1; i++) {
            map.innerHTML += `<div id='chair${i}' class='chair'></div>`;
            setElementPosition(`chair${i}`, 200, 100);
        }

        // Create paper elements and set positions
        for (let i = 1; i <= 2; i++) {
            map.innerHTML += `<div id='paper${i}' class='paper'></div>`;
            setElementPosition(`paper${i}`, 225 + 15 * i, 25 + 20 * i);
        }
    };
});
