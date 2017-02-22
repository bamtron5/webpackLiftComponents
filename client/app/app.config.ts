import * as angular from 'angular';
const Config = [
  '$locationProvider',
  '$stateProvider',
  '$urlRouterProvider',
  (
    $locationProvider:ng.ILocationProvider,
    $stateProvider:ng.ui.IStateProvider,
    $urlRouterProvider:ng.ui.IUrlRouterProvider
  ) => {
  $stateProvider
    .state('main', {
      url: '',
      abstract: true,
      template: '<layout></layout>'
    })

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}];

export default Config;
