window.onload = function() {
  var game = new Phaser.Game(540, 960, Phaser.AUTO, 'gameContainer');
  game.state.add('Boot', bunnyDefender.Boot);
  game.state.add('Preloader', bunnyDefender.Preloader);
  game.state.start('Boot');
}
