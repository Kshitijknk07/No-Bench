export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    // Set background color
    this.cameras.main.setBackgroundColor("#1d1f21");

    // Create player sprite
    this.player = this.physics.add.sprite(400, 300, "player");
    this.player.setCollideWorldBounds(true);

    // Set camera to follow player
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setZoom(1.2);

    // World bounds
    this.physics.world.setBounds(0, 0, 1600, 1200);

    // Arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // WASD keys
    this.wasd = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
  }

  update() {
    const speed = 200;
    const velocity = new Phaser.Math.Vector2(0, 0);

    // Horizontal movement (left/right)
    if (this.cursors.left.isDown || this.wasd.left.isDown) {
      velocity.x = -1;
    } else if (this.cursors.right.isDown || this.wasd.right.isDown) {
      velocity.x = 1;
    }

    // Vertical movement (up/down)
    if (this.cursors.up.isDown || this.wasd.up.isDown) {
      velocity.y = -1;
    } else if (this.cursors.down.isDown || this.wasd.down.isDown) {
      velocity.y = 1;
    }

    // Normalize for diagonal movement & apply speed
    velocity.normalize();
    this.player.setVelocity(velocity.x * speed, velocity.y * speed);
  }
}
