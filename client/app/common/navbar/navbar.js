import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pubSub from 'angular-PubSub';
import navbarComponent from './navbar.component';

let navbarModule = angular.module('navbar', [
  uiRouter,
  'PubSub'
])

.component('navbar', navbarComponent)

.name;

export default navbarModule;
