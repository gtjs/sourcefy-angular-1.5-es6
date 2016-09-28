import template from './player.html';
import controller from './player.controller';
import './player.scss';

let playerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default playerComponent;
