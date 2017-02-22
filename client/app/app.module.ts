import * as angular from 'angular';
import Config from './app.config'
import Run from './app.run';
import Core from './core/core.module';
import 'angular-ui-router';

import LayoutComponent from './layout/layout.module';
import HomeComponent from './home/home.module';
import DeckBuilderComponent from './deckBuilder/deckBuilder.module';

const name = 'app';
const modules = [
  name,
  HomeComponent,
  LayoutComponent,
  DeckBuilderComponent
];

angular.module(name, [
    'ui.router',
    Core //YOUR CORE DEPENDENCIES
  ])
  .config(Config)
  .run(Run);

  angular.bootstrap(document.body, modules, { strictDi: true });
