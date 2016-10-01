import template from './searchForm.html';
import controller from './searchForm.controller';
import './searchForm.scss';

let searchFormComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default searchFormComponent;
