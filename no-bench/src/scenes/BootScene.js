export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    // load assets here (example)
    this.load.image("player", "assets/player.png");
  }

  create() {
    this.scene.start("MenuScene");
  }
}
