function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
   button.classList.toggle(darkModelClass);
   h1.classList.toggle(darkModelClass);
   body.classList.toggle(darkModelClass);
   footer.classList.toggle(darkModelClass);
}

function changeText() {
    const ligthMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModelClass)){
        button.innerHTML = ligthMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = ligthMode + ' ON';

}

const darkModelClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body') [0];
const footer = document.getElementsByTagName('footer') [0];


button.addEventListener('click',changeMode)