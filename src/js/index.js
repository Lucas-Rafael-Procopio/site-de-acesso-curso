document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nomeInput').value;
        const senha = document.getElementById('senhaInput').value;

        if (nome && senha === "cursolura") {
            window.location.href = "https://docs.google.com/spreadsheets/d/1GDoSFI28Gjq9DqEI7gzFWXXp_aGaFLNGynn4IWKnJIk/edit?usp=sharing";
        } else {
            alert("Palavra-chave incorreta.");
        }
    });

    // Slider de planos de fundo
    const slides = document.querySelectorAll('#backgroundSlider img');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 3000); // Muda o slide a cada 5 segundos

    // Exibir e ocultar tooltip de informações ao clicar no ícone
    document.getElementById('info-icon').addEventListener('click', function () {
        var tooltip = document.getElementById('tooltip-text');
        tooltip.classList.toggle('show-tooltip');
    });

    document.getElementById('close-btn').addEventListener('click', function () {
        var tooltip = document.getElementById('tooltip-text');
        tooltip.classList.remove('show-tooltip');
    });
});


const images = document.querySelectorAll('#backgroundSlider img');
let currentImageIndex = 0;

function changeBackground() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}

// Muda a imagem de fundo a cada 3 segundos
setInterval(changeBackground, 3000);
