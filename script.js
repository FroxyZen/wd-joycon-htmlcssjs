document.addEventListener('DOMContentLoaded', function () {
    particlesJS("particles-js", {
    "particles": {
        "number": {
        "value": 80
        },
        "color": {
        "value": "#00ffff"
        },
        "shape": {
        "type": "circle"
        },
        "opacity": {
        "value": 0.5
        },
        "size": {
        "value": 3
        },
        "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#00ffff",
        "opacity": 0.4,
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 2
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
        "onhover": {
            "enable": true,
            "mode": "grab"
        },
        "onclick": {
            "enable": false,
            "mode": "push"
        },
        "resize": true
        },
        "modes": {
        "grab": {
            "distance": 140,
            "line_linked": {
            "opacity": 1
            }
        }
        }
    },
    "retina_detect": true
    });
});

function show(text) {
    document.getElementById("hasil").textContent = text;
}