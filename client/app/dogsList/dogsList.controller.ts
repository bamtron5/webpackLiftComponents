namespace app.controllers {
  export class DogsListController {
    dogs;
    loaded:boolean = false;
    // host = 'http://giphy.com'
    constructor(
      private DogsService,
      $timeout:ng.ITimeoutService
    ) {
      $timeout(() => {
        this.getDogs();
      }, 2000)
    }

    getDogs() {
      this.DogsService.getDogs()
        .then((dogs) => {
          this.dogs = dogs.data.data;
        }).catch((e) => {
          console.log(e);
        }).finally(() => {
          this.loaded = true;
        })
    }
  }
  DogsListController.$inject = ['DogsService', '$timeout'];
}


export default app.controllers.DogsListController;
