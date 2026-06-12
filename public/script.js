const tabela = document.getElementById('tabelaAgendamentos');
const form = document.getElementById('formAgendamento');

const idInput = document.getElementById('idAgendamento');
const nomeInput = document.getElementById('nome');
const telefoneInput = document.getElementById('telefone');
const dataHoraInput = document.getElementById('dataHora');
const profissionalInput = document.getElementById('profissional');

async function carregarAgendamentos() {

    const resposta = await fetch('/agendamentos');

    const agendamentos = await resposta.json();

    tabela.innerHTML = '';

    agendamentos.forEach(agendamento => {

        tabela.innerHTML += `
            <tr>
                <td>${agendamento.idAgendamento}</td>
                <td>${agendamento.NomeSolicitante}</td>
                <td>${agendamento.TelefoneSolicitante}</td>
                <td>${agendamento.DataHoraAgendamento}</td>
                <td>${agendamento.NomeProfissional}</td>
                <td>
                    <button class="btn-editar"
                        onclick="editarAgendamento(${agendamento.idAgendamento})">
                        Editar
                    </button>

                    <button class="btn-excluir"
                        onclick="excluirAgendamento(${agendamento.idAgendamento})">
                        Excluir
                    </button>
                </td>
            </tr>
        `;

    });

}

async function editarAgendamento(id) {

    const resposta = await fetch(`/agendamentos/${id}`);

    const agendamento = await resposta.json();

    idInput.value = agendamento.idAgendamento;
    nomeInput.value = agendamento.NomeSolicitante;
    telefoneInput.value = agendamento.TelefoneSolicitante;

    dataHoraInput.value =
        agendamento.DataHoraAgendamento
            .slice(0, 16);

    profissionalInput.value =
        agendamento.NomeProfissional;

}

async function excluirAgendamento(id) {

    const confirmar = confirm(
        'Deseja realmente excluir?'
    );

    if (!confirmar) return;

    await fetch(`/agendamentos/${id}`, {
        method: 'DELETE'
    });

    carregarAgendamentos();

}

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const dados = {
        NomeSolicitante: nomeInput.value,
        TelefoneSolicitante: telefoneInput.value,
        DataHoraAgendamento: dataHoraInput.value,
        NomeProfissional: profissionalInput.value
    };

    const id = idInput.value;

    if (id) {

        await fetch(`/agendamentos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

    } else {

        await fetch('/agendamentos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

    }

    form.reset();

    idInput.value = '';

    carregarAgendamentos();

});

carregarAgendamentos();