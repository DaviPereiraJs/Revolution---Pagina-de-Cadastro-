Documento do Projeto - Landing Page do Evento Corporativo
1. Estrutura do HTML
Navbar

Elemento <nav> com classe .navbar.

Contém:

Logo (<img> dentro de <a>).

Barra de pesquisa (<input> com <div> para resultados dinâmicos).

<nav class="navbar">
  <div class="container">
    <a class="navbar-brand" href="#"><img src="/Projeto/img/logo rv.jpg" alt="Logo"></a>
    <div class="search-bar">
      <input type="text" id="searchInput" placeholder="Buscar por nome ou email">
      <div id="searchResult" class="search-result"></div>
    </div>
  </div>
</nav>


Funcionalidade: permite procurar participantes cadastrados.

Estilo: transparente, sem sombra, fixo no topo da página.

Hero Section

Elemento <section class="hero">.

Contém um carrossel (Bootstrap) com imagem de fundo.

Texto principal com:

Título: Revolution (animado com digitação e efeito “levantar” ao passar o mouse).

Data e Local: 29/08/2025 - Boa Viagem/CE.

Botão de cadastro: link para a seção de cadastro.

<div class="carousel-caption">
  <h1 class="typing-text lift-on-hover">Revolution</h1>
  <p class="lift-on-hover">29/08/2025 - Boa Viagem/CE</p>
  <a href="#cadastro" class="btn btn-primary">Cadastre-se</a>
</div>


Animações:

Digitação: .typing-text com @keyframes typing e blink-caret.

Levantar: .lift-on-hover com transform: translateY(-10px) e text-shadow.

Seção de Participantes

<section id="participantes"> com grid de participantes cadastrados.

Título centralizado: Participantes Cadastrados.

Cards com efeito hover (levantar + sombra + fundo translúcido).

<div class="participants-grid">
  <!-- Participantes são renderizados dinamicamente -->
</div>

Seção de Cadastro

<section class="info-section" id="cadastro">.

Estrutura:

Formulário (.cadastro-info):

Inputs: Nome, Email, Instituição.

Botão de envio: Salvar Cadastro.

Efeito de levantar nos inputs ao focar.

Imagem lateral (.cadastro-img).

<div class="cadastro-info lift-on-hover">
  <h2>Cadastro</h2>
  <form id="cadastroForm">
    <input type="text" id="nome" placeholder="Seu nome" required>
    <input type="email" id="email" placeholder="Seu email" required>
    <input type="text" id="instituicao" placeholder="Sua instituição" required>
    <button type="submit">Salvar Cadastro</button>
  </form>
</div>

Footer

Redes sociais (YouTube, Instagram, TikTok, Twitter, Snapchat).

Efeito hover: aumenta o tamanho do ícone e muda a cor.

<div class="social-links">
  <a href="#"><img src="/Projeto/img/youtube.jpg"> YouTube</a>
  <!-- demais links -->
</div>

2. Estrutura do CSS
Navbar

Transparente, sem sombra.

Itens alinhados com flexbox.

Pesquisa com foco estilizado (borda azul + sombra).

Hero Section

Carrossel ocupando 100% da altura da tela.

Texto e botão posicionados via .carousel-caption.

Animações:

.typing-text:

animation: typing 3s steps(40,end), blink-caret 0.75s step-end infinite;


.lift-on-hover: levanta texto com sombra ao passar mouse.

Participantes

Grid responsivo com display: grid.

Cards translúcidos com hover (levantar + sombra).

Cadastro

Inputs com transition e efeito de levantar ao focar:

.cadastro-info input:focus {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(255,255,255,0.4);
}


Botão com hover (scale e mudança de cor).

Footer

Links sociais com efeito hover (scale e mudança de cor).

Responsividade

Ajustes para telas menores (@media max-width: 768px):

Texto menor no hero.

Formulário e imagem em coluna.

3. Estrutura do JavaScript

script.js (opcional para adicionar funcionalidades):

Busca de participantes na barra de pesquisa.

Submissão do formulário (pode ser com armazenamento local ou envio para backend).

Exemplo simples de digitação de dados no console:

document.getElementById('cadastroForm').addEventListener('submit', function(e){
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const instituicao = document.getElementById('instituicao').value;
  console.log(`Nome: ${nome}, Email: ${email}, Instituição: ${instituicao}`);
  alert("Cadastro realizado!");
});


Funcionalidade futura: salvar no banco de dados e renderizar na seção de participantes.

4. Animações detalhadas

Digitação do título

.typing-text {
  overflow: hidden;
  border-right: .15em solid #fff;
  white-space: nowrap;
  animation: typing 3s steps(40,end), blink-caret 0.75s step-end infinite;
}
@keyframes typing { from { width: 0 } to { width: 100% } }
@keyframes blink-caret { 50% { border-color: transparent } }


Levantar ao passar o mouse

.lift-on-hover:hover {
  transform: translateY(-10px);
  text-shadow: 2px 4px 10px rgba(0,0,0,0.5);
}


Inputs do formulário

.cadastro-info input:focus {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(255,255,255,0.4);
}
