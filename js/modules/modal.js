export default class Modal {
  constructor(abrir, fechar, container) {
    this.botaoAbrir = document.querySelector(abrir);
    this.botaoFechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(container);
    this.toggleEvent = this.toggleEvent.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }
  
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }
  
  toggleEvent(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if(event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.toggleEvent);
    this.botaoFechar.addEventListener('click', this.toggleEvent);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if(this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}

