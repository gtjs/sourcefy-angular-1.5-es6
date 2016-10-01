class HomeController {

  constructor(PubSub, filterFilter) {
    "ngInject";

    const list = [
      {
        id:1,
        img: "https://source.unsplash.com/category/people/600x300",
        title: "Chromeo",
        description: "lorem ipsum sit amet",
      },
      {
        id:2,
        img: "https://source.unsplash.com/category/nature/600x300",
        title: "Tupac",
        description: "lorem ipsum sit amet",
      },
      {
        id:3,
        img: "https://source.unsplash.com/category/technology/600x300",
        title: "House Music",
        description: "lorem ipsum sit amet",
      },
      {
        id:3,
        img: "https://source.unsplash.com/category/objects/600x300",
        title: "Music Land",
        description: "lorem ipsum sit amet",
      }
    ];

    this.name = 'home';
    this.exploreList = angular.copy(list);

    PubSub.subscribe('search', ({text}) => {
      if(text) {
        this.exploreList = filterFilter(this.exploreList, text);
      } else {
        this.exploreList = angular.copy(list);;
      }
    });

  }
}

export default HomeController;
