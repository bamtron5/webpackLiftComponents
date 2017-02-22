import * as angular from 'angular';
import CoreConstants from './core.constants';
import CoreFilters from './core.filters';
import 'angular-resource';
import 'angular-messages';

export default angular.module('app.core', [
  CoreConstants,
  'ngResource',
  CoreFilters,
  'ngMessages'
])
.name;
