class SearchFormController {
  constructor(PubSub) {
    "ngInject";
    this.name = 'searchForm';

    this.PubSub = PubSub
  }

  perform() {
    const { PubSub } = this;

    PubSub.publish('search', { text: this.text });
  }
}

export default SearchFormController;
