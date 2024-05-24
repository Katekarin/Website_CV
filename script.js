document.addEventListener('DOMContentLoaded', () => {
    const map = document.getElementById('map');
    let mapX = 0;
    let mapY = 0;

    const moveMap = (dx, dy) => {
        mapX += dx;
        mapY += dy;
        map.style.transform = `translate(${mapX}px, ${mapY}px)`;
    };

    window.addEventListener('keydown', (event) => {
        const step = 10;
        switch (event.key) {
            case 'ArrowUp':
            case 'w':
                moveMap(0, step);
                break;
            case 'ArrowDown':
            case 's':
                moveMap(0, -step);
                break;
            case 'ArrowLeft':
            case 'a':
                moveMap(step, 0);
                break;
            case 'ArrowRight':
            case 'd':
                moveMap(-step, 0);
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

    // Ensure the DOM is fully loaded
    window.onload = () => {
        // Set positions for table, chairs, and papers
        setElementPosition('table', 200, 0);

        setElementPosition('chair1', 200, 100);


        setElementPosition('paper1', 250, 25);
        setElementPosition('paper2', 235, 45);
    };
});
