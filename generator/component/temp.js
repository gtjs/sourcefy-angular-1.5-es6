import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('<%= name %>', [
  uiRouter
])

// .config(($stateProvider) => {
// 	 "ngInject";
// 	 $stateProvider
// 		 .state('<%= name %>', {
// 			 url: '/<%= name %>',
// 			 views:{
// 					topnav: {
// 						template: "<topbar></topbar>"
// 					},
// 					sidebar: {
// 						template: "<sidebar></sidebar>"
// 					},
// 					content: {
// 						template: "<<%= name %>></<%= name %>>"
// 					},
// 					player: {
// 						template:	"<footer></footer>"
// 					}
// 			},
// 		 });
// })

.component('<%= name %>', <%= name %>Component)

.name;

export default <%= name %>Module;
