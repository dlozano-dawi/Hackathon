let events = false;

function show() {
    const element = document.getElementsByClassName('events')[0];
    if (events) {
        element.classList.remove('show'); // Oculta
    } else {
        element.classList.add('show'); // Muestra
    }
    events = !events;
}