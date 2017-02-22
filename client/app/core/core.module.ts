import * as angular from 'angular';
import CoreConstants from './core.constants';
import 'angular-resource';

export default angular.module('app.core', [
  CoreConstants,
  'ngResource'
])
.name;
