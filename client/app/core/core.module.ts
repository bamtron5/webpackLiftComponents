import * as angular from 'angular';
import coreConstants from './core.constants';
import coreFilters from './core.filters';
import authInterceptor from './interceptor.factory';
import 'angular-resource';
import 'angular-messages';

export default angular.module('app.core', [
  coreConstants,
  'ngResource',
  coreFilters,
  'ngMessages',
  authInterceptor
])
.name;
