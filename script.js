document.addEventListener('DOMContentLoaded', () => {
    const tabContents = document.querySelectorAll('.tab-content');
    const backToHomeBtn = document.getElementById('backToHome');

    // Función para alternar entre ventanas
    function switchTab(targetId) {
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        const activeContent = document.getElementById(targetId);

        if (activeContent) {
            activeContent.classList.add('active');
        }

        // Mostrar u ocultar el botón flotante de retorno al inicio
        if (targetId === 'inicio') {
            backToHomeBtn.style.display = 'none';
        } else {
            backToHomeBtn.style.display = 'block';
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Función global para desplazar suavemente al grid de sitios
    window.scrollToModules = function() {
        const anchor = document.getElementById('modulesGridAnchor');
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Interactividad extra: Simulación de Metrónomo rítmico
    const metronomeBtn = document.getElementById('playMetronome');
    if (metronomeBtn) {
        let isPlaying = false;
        let intervalId = null;

        metronomeBtn.addEventListener('click', () => {
            if (!isPlaying) {
                isPlaying = true;
                metronomeBtn.textContent = "Detener Pulso (Metrónomo)";
                metronomeBtn.style.backgroundColor = "var(--color-primary)";
                metronomeBtn.style.color = "var(--bg-dark)";
                
                // Simulación visual del pulso cada 1 segundo (120 BPM aprox)
                intervalId = setInterval(() => {
                    document.body.style.borderTop = "4px solid var(--color-primary)";
                    setTimeout(() => {
                        document.body.style.borderTop = "none";
                    }, 200);
                }, 1000);
            } else {
                isPlaying = false;
                clearInterval(intervalId);
                metronomeBtn.textContent = "Simular Pulso (Metrónomo)";
                metronomeBtn.style.backgroundColor = "transparent";
                metronomeBtn.style.color = "var(--color-accent)";
                document.body.style.borderTop = "none";
            }
        });
    }

    // Exponer la función globalmente para los eventos onclick en HTML
    window.switchTab = switchTab;
});