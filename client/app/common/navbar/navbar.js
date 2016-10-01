import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchForm from './searchForm/searchForm';
import navbarComponent from './navbar.component';

let navbarModule = angular.module('navbar', [
  uiRouter,
  searchForm
])

.component('navbar', navbarComponent)

.name;

export default navbarModule;
