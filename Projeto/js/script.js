// --- Digitação do texto do evento ---
const eventText = "O Evento Corporativo 2025 é uma oportunidade única de reunir profissionais, parceiros e colaboradores em um ambiente dinâmico e inspirador. Durante o encontro, serão realizadas palestras, workshops e atividades de networking, com foco em inovação, desenvolvimento e integração das equipes. O evento acontece em São Paulo/SP, oferecendo experiências que estimulam aprendizado, troca de ideias e fortalecimento de relações profissionais.";

let i = 0;
const eventoDesc = document.getElementById('evento-desc');

function typeWriter() {
  if(i < eventText.length) {
    eventoDesc.innerHTML += eventText.charAt(i);
    i++;
    setTimeout(typeWriter, 18); // velocidade da digitação
  }
}

window.onload = typeWriter;

// --- Código dos participantes (já existente) ---
const cadastroForm = document.getElementById('cadastroForm');
const participantsGrid = document.querySelector('.participants-grid');
const searchInput = document.getElementById('searchInput');
const searchResult = document.getElementById('searchResult');
const btnCadastro = document.getElementById('btn-cadastro');

let participants = [
  { nome: "João Silva", email: "joao@email.com", instituicao: "Universidade XYZ" },
  { nome: "Maria Souza", email: "maria@email.com", instituicao: "Faculdade ABC" },
  { nome: "Pedro Lima", email: "pedro@email.com", instituicao: "Universidade DEF" },
  { nome: "Ana Costa", email: "ana@email.com", instituicao: "Faculdade GHI" },
  { nome: "Lucas Martins", email: "lucas@email.com", instituicao: "Universidade JKL" },
  { nome: "Beatriz Rocha", email: "beatriz@email.com", instituicao: "Faculdade MNO" }
];

function renderParticipants() {
  participantsGrid.innerHTML = '';
  participants.forEach(p => {
    const card = document.createElement('div');
    card.classList.add('participant-card');
    card.setAttribute('data-nome', p.nome);
    card.innerHTML = `
      <h5>Nome: ${p.nome}</h5>
      <p>Email: ${p.email}</p>
      <p>Instituição: ${p.instituicao}</p>
    `;
    participantsGrid.appendChild(card);
  });
}

renderParticipants();

cadastroForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const instituicao = document.getElementById('instituicao').value;

  participants.push({ nome, email, instituicao });
  renderParticipants();
  cadastroForm.reset();
  document.getElementById('participantes').scrollIntoView({ behavior: 'smooth' });
});

btnCadastro.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('cadastro').scrollIntoView({ behavior: 'smooth' });
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  searchResult.innerHTML = '';
  if(query.length === 0) { searchResult.style.display = 'none'; return; }

  const filtered = participants.filter(p => p.nome.toLowerCase().includes(query) || p.email.toLowerCase().includes(query));
  
  if(filtered.length > 0) {
    filtered.forEach(p => {
      const pElem = document.createElement('p');
      pElem.textContent = `${p.nome} - ${p.email}`;
      pElem.style.cursor = "pointer";

      pElem.addEventListener('click', () => {
        document.getElementById('participantes').scrollIntoView({ behavior: 'smooth' });
        const card = document.querySelector(`.participant-card[data-nome="${p.nome}"]`);
        if(card) {
          card.style.backgroundColor = "yellow";
          setTimeout(() => { card.style.backgroundColor = ""; }, 2000);
        }
      });
      searchResult.appendChild(pElem);
    });
  } else {
    const pElem = document.createElement('p');
    pElem.textContent = "Participante não encontrado. Clique para se cadastrar.";
    pElem.style.cursor = "pointer";
    pElem.addEventListener('click', () => { document.getElementById('cadastro').scrollIntoView({ behavior: 'smooth' }); });
    searchResult.appendChild(pElem);
  }
  searchResult.style.display = 'block';
});
