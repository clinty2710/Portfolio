/*
    
Clint Steadman
    
script.js

*/

// Press Start image rotation
document.addEventListener('DOMContentLoaded', function() {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    
    var images = [image1, image2];
    var currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }

    setInterval(showNextImage, 500); // 500 milliseconds (0.5 seconds)
});

// Red Start Button transition
document.addEventListener('DOMContentLoaded', function() {
    var redButtonUp = document.getElementById('redButtonUp');
    var redButtonDown = document.getElementById('redButtonDown');

    function handleRedButtonUpClick() {
        redButtonUp.style.display = 'none'; // Hide RedButtonUp when clicked
        redButtonDown.style.display = 'block'; // Show RedButtonDown when clicked

        // Replace the following line to match the path to your landing page
        performPageTransition('landingpage.html');
    }

    redButtonUp.addEventListener('click', handleRedButtonUpClick);
});

// Function to perform the page transition
function performPageTransition(toPage) {
    const transitionContainer = document.querySelector('.transition-container');

    // Add a class to the container to trigger the animation
    transitionContainer.classList.add('zoomed');

    // After the animation finishes, load the new page
    setTimeout(() => {
        window.location.href = toPage;
    }, 500); // Adjust the delay (in milliseconds) to match your animation duration
}

console.log("It's working");

let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('default');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        console.log('Option clicked:', mode);
        setTheme(mode);
    });
}

function setTheme(mode) {
    if (mode == 'default') {
        document.getElementById('theme-style').href = 'default.css';
    }

    if (mode == 'black') {
        document.getElementById('theme-style').href = 'black.css';
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css';
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css';
    }

    localStorage.setItem('theme', mode);
}

function enableScroll() {
    document.querySelector('.body').style.overflow = 'auto';
}

function disableScroll() {
    document.querySelector('.body').style.overflow = 'hidden';
}

const joystick = document.querySelector('.joystick');
const tiltedJoystick = document.getElementById('tilted-joystick');

function checkJoystickVisibility() {
    if (window.innerWidth < 925) {
        joystick.style.display = 'none';
    } else {
        joystick.style.display = 'block';
    }
}

window.addEventListener('resize', checkJoystickVisibility);
checkJoystickVisibility();

joystick.addEventListener('mouseenter', () => {
    joystick.style.display = 'none';
    tiltedJoystick.style.display = 'block';
});

tiltedJoystick.addEventListener('mouseleave', () => {
    tiltedJoystick.style.display = 'none';
    joystick.style.display = 'block';
});


