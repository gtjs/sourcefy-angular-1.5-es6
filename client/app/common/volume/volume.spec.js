import VolumeModule from './volume'
import VolumeController from './volume.controller';
import VolumeComponent from './volume.component';
import VolumeTemplate from './volume.html';

describe('Volume', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VolumeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VolumeController();
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
      expect(VolumeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = VolumeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(VolumeTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(VolumeController);
      });
  });
});
