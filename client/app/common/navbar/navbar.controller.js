class NavbarController {
  constructor(PubSub) {
    "ngInject";
    this.name = 'navbar';

    this.PubSub = PubSub
  }

  search() {
    const { PubSub } = this;
    
    PubSub.publish('search', { text: this.searchText });
  }
}

export default NavbarController;
