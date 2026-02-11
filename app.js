document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('downloadBtn');

    btn.addEventListener('click', () => {
        // Aciona a função de impressão do navegador
        // Dica: No diálogo de impressão, selecione "Salvar como PDF"
        window.print();
    });
});