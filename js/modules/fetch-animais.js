import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  fetchAnimais('./animais-api.json');

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
  
      animaisJSON.forEach(animal => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch(erro) {
      console.error(erro);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = /*html*/`
      <h3>${animal.specie}</h3>
      <span data-numero>${animal.total}</span>
    `;
    return div;
  }
}