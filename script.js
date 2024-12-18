setTimeout(function() {
    document.querySelector('.content').style.opacity = '0'; // Fade out do conteúdo
    setTimeout(function() {  // Corrigido para função anônima correta
        document.querySelector('.error-screen').style.display = 'block'; // Exibe a tela de erro
    }, 1000);  // A tela de erro aparece após 1 segundo
}, 3000);  // O conteúdo desaparece após 3 segundos
