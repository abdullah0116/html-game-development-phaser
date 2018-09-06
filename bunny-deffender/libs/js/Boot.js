var bunnyDefender = {};

bunnyDefender.Boot = function(game) {};

bunnyDefender.Boot.prototype = {
  preload: function() {
    this.load.image('preloaderBar', 'libs/images/loader_bar.png');
    this.load.image('titleimage', 'libs/images/TitleImage.png')
  },

  create function() {
    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = false;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 270;
    this.scale.minHeight = 480;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.stage.forcePortrait = true;
    this.scale.setScreenSize(true);

    this.input.addPointer();
    this.stage.backgroundColor = '#171642';

    this.state.start('PreLoader');
  }
}
