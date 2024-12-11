
function animateButton() {
    const button = document.getElementById('logo-button');


    button.classList.add('hover');

    setTimeout(function() {
        button.classList.remove('hover');
    }, 1000); 
}
