import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sidebarComponent from './sidebar.component';

let sidebarModule = angular.module('sidebar', [
  uiRouter
])

// .config(($stateProvider) => {
// 	 "ngInject";
// 	 $stateProvider
// 		 .state('sidebar', {
// 			 url: '/sidebar',
// 			 views:{
// 					topnav: {
// 						template: "<topbar></topbar>"
// 					},
// 					sidebar: {
// 						template: "<sidebar></sidebar>"
// 					},
// 					content: {
// 						template: "<sidebar></sidebar>"
// 					},
// 					player: {
// 						template:	"<footer></footer>"
// 					}
// 			},
// 		 });
// })

.component('sidebar', sidebarComponent)

.name;

export default sidebarModule;
