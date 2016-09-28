import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cardComponent from './card.component';

let cardModule = angular.module('card', [
  uiRouter
])

// .config(($stateProvider) => {
// 	 "ngInject";
// 	 $stateProvider
// 		 .state('card', {
// 			 url: '/card',
// 			 views:{
// 					topnav: {
// 						template: "<topbar></topbar>"
// 					},
// 					sidebar: {
// 						template: "<sidebar></sidebar>"
// 					},
// 					content: {
// 						template: "<card></card>"
// 					},
// 					player: {
// 						template:	"<footer></footer>"
// 					}
// 			},
// 		 });
// })

.component('card', cardComponent)

.name;

export default cardModule;
