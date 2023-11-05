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

document.addEventListener('DOMContentLoaded', function () {
    // Handle page transitions
    const pages = document.querySelectorAll('.page');
    const links = document.querySelectorAll('a');
  
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetPageId = link.getAttribute('href').replace('#', '');
        const targetPage = document.getElementById(targetPageId);
  
        // Deactivate the current page and activate the target page
        const currentPage = document.querySelector('.page.active');
        currentPage.classList.remove('active');
        currentPage.classList.add('incoming');
        targetPage.classList.add('active');
  
        // Add the transition classes for zoom effect
        currentPage.classList.add('zoom-out');
        targetPage.classList.add('zoom-in');
  
        // Remove the incoming and transition classes after the transition is complete
        setTimeout(() => {
          currentPage.classList.remove('incoming', 'zoom-out');
          targetPage.classList.remove('zoom-in');
        }, 500); // 500 milliseconds (0.5 seconds) should match your transition duration
      });
    });
  
    // Handle the red button click event
    const redButtonUp = document.getElementById('redButtonUp');
    const redButtonDown = document.getElementById('redButtonDown');
  
    redButtonUp.addEventListener('click', () => {
        // Trigger the transition when the red button is clicked
        transitionToPage('landingpage.html');
        redButtonUp.style.display = 'none'; // Hide RedButtonUp when clicked
        redButtonDown.style.display = 'block'; // Show RedButtonDown when clicked
    });
  
    redButtonDown.addEventListener('click', () => {
        // Handle the click event when RedButtonDown is visible
        // If needed, you can implement another behavior here
        transitionToPage('index.html'); // Transition back to the index page
        redButtonUp.style.display = 'block'; // Show RedButtonUp
        redButtonDown.style.display = 'none'; // Hide RedButtonDown when clicked
    });
  
    // Function to handle page transition
    function transitionToPage(targetPageId) {
        // Deactivate the current page and activate the target page
        const currentPage = document.querySelector('.page.active');
        currentPage.classList.remove('active');
        currentPage.classList.add('incoming');
  
        const targetPage = document.getElementById(targetPageId);
        targetPage.classList.add('active');
  
        // Add the transition classes for zoom effect
        currentPage.classList.add('zoom-out');
        targetPage.classList.add('zoom-in');
  
        // Remove the incoming and transition classes after the transition is complete
        setTimeout(() => {
            currentPage.classList.remove('incoming', 'zoom-out');
            targetPage.classList.remove('zoom-in');
        }, 500); // Adjust the duration as needed (in milliseconds)
    }
  });
