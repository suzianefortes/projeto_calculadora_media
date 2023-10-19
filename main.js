const form = document.getElementById('form-agenda');
let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNome = document.getElementById('Nome');
    const inputTelefone = document.getElementById('Telefone');   

    let linha = '<tr>';
    linha += `<td>${inputNome.value} /<td>`;
    linha += `<td>${inputTelefone.value} /<td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas;
    
    inputNome.value = '';
    inputTelefone.value = '';

});

