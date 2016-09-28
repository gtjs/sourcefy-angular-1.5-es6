import angular from 'angular';
import uiRouter from 'angular-ui-router';
import volumeComponent from './volume.component';

let volumeModule = angular.module('volume', [
  uiRouter
])

// .config(($stateProvider) => {
// 	 "ngInject";
// 	 $stateProvider
// 		 .state('volume', {
// 			 url: '/volume',
// 			 views:{
// 					topnav: {
// 						template: "<topbar></topbar>"
// 					},
// 					sidebar: {
// 						template: "<sidebar></sidebar>"
// 					},
// 					content: {
// 						template: "<volume></volume>"
// 					},
// 					player: {
// 						template:	"<footer></footer>"
// 					}
// 			},
// 		 });
// })

.component('volume', volumeComponent)

.name;

export default volumeModule;
