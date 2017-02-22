import * as angular from 'angular';
import route from './deckBuilder.route';

const name = 'deckBuilder';
const template = '/client/app/deckBuilder/deckBuilder.html'

namespace app.deckBuilder {
  export class DeckBuilderController {
    title:string;
    formData:FormData;
    phonePattern:string = '\\d+';
    constructor(
      DECK_BUILDER_CONFIG
    ) {
      this.title = DECK_BUILDER_CONFIG.title;
    }

    submit() {
      console.log(this.formData);
      console.log('submitted');
    }

    isPhone() {
      console.log('isPhone');
      return false;
    }
  }

  DeckBuilderController.$inject = ['DECK_BUILDER_CONFIG'];
}

export default angular.module('app.deckBuilder', [])
  .component(name, {
    templateUrl: template,
    controller: app.deckBuilder.DeckBuilderController,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
