document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
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

    setInterval(nextSlide, 5000); // Muda o slide a cada 5 segundos

    // Mensagem "Em breve" ao clicar nos ícones
    const icons = document.querySelectorAll('.icon');
    const message = document.getElementById('soonMessage');

    icons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o comportamento padrão do clique
            message.style.display = 'block';
            setTimeout(() => {
                message.style.display = 'none';
            }, 3000); // A mensagem desaparecerá após 3 segundos
        });
    });
});
