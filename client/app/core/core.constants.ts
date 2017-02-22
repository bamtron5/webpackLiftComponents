import * as angular from 'angular';
export default angular.module('app.core.constants', [])
  .constant('HOME_CONFIG', {
    title: 'Home Page'
  })
  .constant('DECK_BUILDER_CONFIG', {
    title: 'Deck Builder'
  })
  .name;
