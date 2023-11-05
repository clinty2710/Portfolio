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


