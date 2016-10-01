import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pubSub from 'angular-PubSub';
import searchFormComponent from './searchForm.component';

let searchFormModule = angular.module('searchForm', [
  uiRouter,
  'PubSub'
])

// .config(($stateProvider) => {
// 	 "ngInject";
// 	 $stateProvider
// 		 .state('searchForm', {
// 			 url: '/searchForm',
// 			 views:{
// 					topnav: {
// 						template: "<topbar></topbar>"
// 					},
// 					sidebar: {
// 						template: "<sidebar></sidebar>"
// 					},
// 					content: {
// 						template: "<searchForm></searchForm>"
// 					},
// 					player: {
// 						template:	"<footer></footer>"
// 					}
// 			},
// 		 });
// })

.component('searchForm', searchFormComponent)

.name;

export default searchFormModule;
