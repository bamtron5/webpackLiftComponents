const Config = [
  '$locationProvider',
  '$stateProvider',
  '$urlRouterProvider',
  (
    $locationProvider,
    $stateProvider,
    $urlRouterProvider
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
