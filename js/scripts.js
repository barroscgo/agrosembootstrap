// Função para alternar a barra lateral
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Fechar a barra lateral ao clicar fora dela
document.addEventListener('click', (event) => {
    const sidebar = document.getElementById('sidebar');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    // Verifica se o clique foi fora da barra lateral e do ícone do menu
    if (!sidebar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// Função para salvar o formulário
function salvarFormulario() {
    const form = document.getElementById('outros-recursos-form');
    if (form.checkValidity()) {
        alert('Formulário salvo com sucesso!');
        form.reset(); 
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}

// Função para limpar o formulário
function limparFormulario() {
    const form = document.getElementById('outros-recursos-form');
    form.reset();
    alert('Formulário limpo!');
}