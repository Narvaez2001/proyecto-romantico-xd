'use strict';

const documentReady = () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    const getPartner = () => {
        alert('💞 Ahora eres mia 💞');
        alert('♥ Alistate para mas tarde ♥');
        alert('😱 Mañana tenemos una cita tu, yo y un futuro juntos 😱');
        location.href = 'https://www.youtube.com/watch?v=QZKrLIoMyxY';
    };
    const brokenHeart = () => {
        noButton.style.top = Math.random() * innerHeight + 'px';
        noButton.style.left = Math.random() * innerWidth + 'px';
    };

    yesButton.addEventListener('click', getPartner);
    noButton.addEventListener('mouseover', brokenHeart);
};

document.addEventListener('DOMContentLoaded', documentReady);