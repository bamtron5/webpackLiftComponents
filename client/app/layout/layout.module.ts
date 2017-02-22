import * as angular from 'angular';

const name = 'layout';
const template = '/client/app/layout/layout.html'

namespace app.layout {
  export class LayoutController {}

  LayoutController.$inject = [];
}

export default angular.module('app.layout', [])
  .component(name, {
    templateUrl: template,
    controller: app.layout.LayoutController,
    controllerAs: 'vm'
  })
  .name;
