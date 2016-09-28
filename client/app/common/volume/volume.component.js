import template from './volume.html';
import controller from './volume.controller';
import './volume.scss';

let volumeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default volumeComponent;
