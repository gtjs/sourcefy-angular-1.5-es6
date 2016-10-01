import SearchFormModule from './searchForm'
import SearchFormController from './searchForm.controller';
import SearchFormComponent from './searchForm.component';
import SearchFormTemplate from './searchForm.html';

describe('SearchForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SearchFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SearchFormController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(SearchFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SearchFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SearchFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SearchFormController);
      });
  });
});
