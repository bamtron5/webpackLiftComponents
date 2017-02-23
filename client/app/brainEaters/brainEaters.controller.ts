import * as angular from 'angular';
import Player from './Player';
import Wall from './Wall';
import gameFactory from '../services/game.factory';

class BrainEaters {
  game;
  currentLevel:number;
  walls;
  constructor(
    private LEVELS,
    private IMAGES
  ) {
    this.currentLevel = 0;
    this.walls = this.LEVELS[this.currentLevel].walls;
    this.game = gameFactory();
    this.startGame();
  }

  startGame() {
    this.game.initialize();
    new Player(this.IMAGES.player, 0, 0);
    this.setLevel();
  }

  setLevel(){
    this.walls.forEach((arg) => {
      new Wall(...arg);
    });
  }
}

BrainEaters.$inject = ['LEVELS','IMAGES'];

export default BrainEaters;
