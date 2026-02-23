// Elementos do DOM
const tabela = document.getElementById('tabela-contatos');
const totalSpan = document.getElementById('total');
const filtroInput = document.getElementById('filtro');

// Carregar contatos do LocalStorage ou iniciar com o Felipe Luis
let contatos = JSON.parse(localStorage.getItem('contatos')) || [
    {
        nome: "Felipe Luis",
        email: "felipe.medeiros.souto@escola.pr.gov.br",
        telefone: "+55 43 984761819"
    }
];

// Função para renderizar a tabela
function renderizarTabela(dados = contatos) {
    tabela.innerHTML = '';
    dados.forEach((contato, index) => {
        const row = tabela.insertRow();
        row.innerHTML = `
            <td>${contato.nome}</td>
            <td>${contato.email}</td>
            <td>${contato.telefone}</td>
            <td>
                <button class="btn-alterar" onclick="editarContato(${index})">Alterar</button>
                <button class="btn-excluir" onclick="excluirContato(${index})">Excluir</button>
            </td>
        `;
    });
    totalSpan.innerText = dados.length;
    localStorage.setItem('contatos', JSON.stringify(contatos));
}

// Função para Salvar/Cadastrar
function salvarContato() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && email && telefone) {
        contatos.push({ nome, email, telefone });
        renderizarTabela();
        limparCampos();
    } else {
        alert("Preencha todos os campos!");
    }
}

// Função para Excluir
function excluirContato(index) {
    contatos.splice(index, 1);
    renderizarTabela();
}

// Função para Editar (Simples)
function editarContato(index) {
    const c = contatos[index];
    document.getElementById('nome').value = c.nome;
    document.getElementById('email').value = c.email;
    document.getElementById('telefone').value = c.telefone;
    
    excluirContato(index); // Remove o antigo para o novo entrar no lugar ao salvar
}

// Lógica de Filtro
filtroInput.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    const filtrados = contatos.filter(c => 
        c.nome.toLowerCase().includes(termo)
    );
    renderizarTabela(filtrados);
});

function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
}

// Inicialização
renderizarTabela();