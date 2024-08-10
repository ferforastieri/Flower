function getColorOfTheDay() {
  const hoje = new Date();
  const diaDaSemana = hoje.getDay();
  const cores = [
    { petalas: '#ff9999', centro: '#ffcc00' }, // Domingo
    { petalas: '#99ff99', centro: '#ff6600' }, // Segunda
    { petalas: '#9999ff', centro: '#cc00ff' }, // Terça
    { petalas: '#ffff99', centro: '#0099cc' }, // Quarta
    { petalas: '#ff99ff', centro: '#66cc00' }, // Quinta
    { petalas: '#99ffff', centro: '#ff3300' }, // Sexta
    { petalas: '#ffcc99', centro: '#3366cc' }  // Sábado
  ];
  return cores[diaDaSemana];
}

function setFlowerOfTheDay() {
  const hoje = new Date();
  const diaDaSemana = hoje.getDay();
  const classes = [
    'flower-domingo',
    'flower-segunda',
    'flower-terca',
    'flower-quarta',
    'flower-quinta',
    'flower-sexta',
    'flower-sabado'
  ];
  document.body.classList.add(classes[diaDaSemana]);
}

function criarFloresAdicionais(quantidade) {
  const containerFlores = document.querySelector('.flowers');
  const cores = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff', '#99ffff', '#ffcc99'];

  for (let i = 0; i < quantidade; i++) {
    const flor = document.createElement('div');
    flor.className = 'flower flower-adicional';
    
    const corPetalas = cores[Math.floor(Math.random() * cores.length)];
    const corCentro = cores[Math.floor(Math.random() * cores.length)];
    
    flor.style.setProperty('--cor-petalas', corPetalas);
    flor.style.setProperty('--cor-centro', corCentro);
    
    flor.style.left = `${Math.random() * 90}%`;
    flor.style.top = `${Math.random() * 70 + 20}%`;
    flor.style.transform = `scale(${0.5 + Math.random() * 0.5})`;

    flor.innerHTML = `
      <div class="flower__leafs">
        <div class="flower__leaf flower__leaf--1"></div>
        <div class="flower__leaf flower__leaf--2"></div>
        <div class="flower__leaf flower__leaf--3"></div>
        <div class="flower__leaf flower__leaf--4"></div>
        <div class="flower__white-circle"></div>
      </div>
      <div class="flower__line"></div>
    `;

    containerFlores.appendChild(flor);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const corDoDia = getColorOfTheDay();
  document.documentElement.style.setProperty('--cor-petalas', corDoDia.petalas);
  document.documentElement.style.setProperty('--cor-centro', corDoDia.centro);
  setFlowerOfTheDay();
  criarFloresAdicionais(10); // Cria 10 flores adicionais
});

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};