export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    console.log("✅ GameScene: create() called");

    // Set background color
    this.cameras.main.setBackgroundColor("#1d1f21");

    // World bounds
    this.physics.world.setBounds(0, 0, 1600, 1200);

    // Add player sprite
    this.player = this.physics.add.sprite(400, 300, "player");

    if (!this.player) {
      console.error("❌ Player sprite failed to load. Check assets/player.png");
    }

    this.player.setCollideWorldBounds(true);

    // Camera follow player
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setZoom(1.2);

    // Set input keys
    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasd = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
  }

  update() {
    if (!this.player) return;

    const speed = 200;
    const velocity = new Phaser.Math.Vector2();

    // Move left/right
    if (this.cursors.left.isDown || this.wasd.left.isDown) {
      velocity.x = -1;
    } else if (this.cursors.right.isDown || this.wasd.right.isDown) {
      velocity.x = 1;
    }

    // Move up/down
    if (this.cursors.up.isDown || this.wasd.up.isDown) {
      velocity.y = -1;
    } else if (this.cursors.down.isDown || this.wasd.down.isDown) {
      velocity.y = 1;
    }

    // Normalize diagonal and apply speed
    velocity.normalize();
    this.player.setVelocity(velocity.x * speed, velocity.y * speed);
  }
}
