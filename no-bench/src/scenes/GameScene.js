export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    this.player = this.add.sprite(400, 300, "player");
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.x -= 2;
    } else if (this.cursors.right.isDown) {
      this.player.x += 2;
    }

    if (this.cursors.up.isDown) {
      this.player.y -= 2;
    } else if (this.cursors.down.isDown) {
      this.player.y += 2;
    }
  }
}
