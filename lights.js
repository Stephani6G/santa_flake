function addLight() {
    const colors = ['red', 'green', 'blue', 'pink', 'purple'];
    const container = document.getElementById('container');
    const light = document.createElement('div');
    light.classList.add('light');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    light.classList.add(randomColor);
    container.appendChild(light);
}

function toggleLights() {
    const lights = document.querySelectorAll('.light');
    lights.forEach(light => {
        const currentOpacity = parseFloat(getComputedStyle(light).opacity);
        light.style.opacity = currentOpacity === 0.3 ? 1 : 0.3;
    });
}

setInterval(toggleLights, 100); // Increase blink/second
