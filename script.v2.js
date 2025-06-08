const btn = document.getElementById('btnChange');
const message = document.getElementById('message');

btn.addEventListener('click', () => {
    if(message.textContent === "Bienvenue sur mon site interactif !") {
        message.textContent = "Le message a changé, merci d'être passé !";
    } else {
        message.textContent = "Bienvenue sur mon site interactif !";
    }
});
