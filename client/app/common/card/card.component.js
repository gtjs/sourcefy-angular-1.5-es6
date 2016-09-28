import template from './card.html';
import controller from './card.controller';
import './card.scss';

let cardComponent = {
  restrict: 'E',
  bindings: {
    data: '='
  },
  template,
  controller,
  controllerAs: 'vm',
};

export default cardComponent;
