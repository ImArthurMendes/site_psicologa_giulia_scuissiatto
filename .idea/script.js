//Menu mobile
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    mobileMenuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    //Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(){
          nav.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
        });
    });
});

//Scroll suave para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
    });
});

//Efeito de aparecer elementos ao fazer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const oberser = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

//Observar elementos para animação
document.querySelectorAll('.area-card, .contato-item') .forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

//Header transparente ao fazer scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

//Função para copiar e-mail
function copyEmail() {
    const email = 'contato@giupsico.com.br';
    navigator.clipboard.writeText(email).then(function () {
        alert('E-mail copiado: ' + email);
    });
}

//Adicionar event listener ao e-mail se necessário
document.addEventListener('DOMContentLoaded', function () {
    const emailElement = document.querySelector('.contato-item p');
    if (emailElement && emailElement.textContent.includes('@')) {
        emailElement.style.cursor = 'pointer';
        emailElement.title = 'Clique para copiar';
        emailElement.addEventListener('click', copyEmail);
    }
});