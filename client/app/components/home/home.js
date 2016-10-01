import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pubSub from 'angular-PubSub';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter,
  'PubSub'
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      views:{
        topnav: {
          template: "<navbar></navbar>"
        },
        sidebar: {
          template: "<sidebar></sidebar>"
        },
        content: {
          template: "<home></home>"
        },
        player: {
          template:  "<player></player>"
        }
      },
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
