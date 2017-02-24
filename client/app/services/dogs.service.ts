import * as angular from 'angular';

namespace app.services {
  export class DogsService {
    constructor(
      private $http
    ) {

    }

    getDogs() {
      return this.$http.get('http://api.giphy.com/v1/gifs/search?q=dogs&api_key=dc6zaTOxFJmzC&limit=10')
    }
  }


  DogsService.$inject = ['$http'];
}

export default angular.module('app.services.dogs', [])
  .service('DogsService', app.services.DogsService)
  .name;
