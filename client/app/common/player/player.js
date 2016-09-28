import angular from 'angular';
import uiRouter from 'angular-ui-router';
import playerComponent from './player.component';

let playerModule = angular.module('player', [
  uiRouter
])

// .config(($stateProvider) => {
// 	 "ngInject";
// 	 $stateProvider
// 		 .state('player', {
// 			 url: '/player',
// 			 views:{
// 					topnav: {
// 						template: "<topbar></topbar>"
// 					},
// 					sidebar: {
// 						template: "<sidebar></sidebar>"
// 					},
// 					content: {
// 						template: "<player></player>"
// 					},
// 					player: {
// 						template:	"<footer></footer>"
// 					}
// 			},
// 		 });
// })

.component('player', playerComponent)

.name;

export default playerModule;
