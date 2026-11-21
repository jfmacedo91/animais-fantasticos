export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.ativeClass = 'ativo'
  }

  activeTab(index) {
    this.tabContent.forEach((section) => { section.classList.remove(this.ativeClass); });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.ativeClass, direcao);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => { this.activeTab(index); });
    });
  }

  init() {
    if(this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}