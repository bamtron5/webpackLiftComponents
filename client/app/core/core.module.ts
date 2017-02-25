import * as angular from 'angular';
import coreConstants from './core.constants';
import coreFilters from './core.filters';
import authInterceptor from './interceptor.factory';
import 'angular-resource';
import 'angular-messages';
import {DogsServiceModule} from '../services/dogs.service';
import '../../../node_modules/nvd3/build/nv.d3';
import 'angular-nvd3';
import '../../../node_modules/nvd3/build/nv.d3.css';

export default angular.module('app.core', [
  'ngResource',
  'ngMessages',
  coreConstants,
  coreFilters,
  authInterceptor,
  DogsServiceModule
])
.name;
