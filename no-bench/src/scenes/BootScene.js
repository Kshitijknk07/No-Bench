export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    // Background color
    this.cameras.main.setBackgroundColor("#0e0e0e");

    // Loading Text
    this.loadingText = this.add
      .text(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2 - 50,
        "Loading...",
        { font: "24px Arial", fill: "#ffffff" }
      )
      .setOrigin(0.5);

    // Progress Bar Background
    const barWidth = 300;
    const barHeight = 20;
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    this.progressBox = this.add.graphics();
    this.progressBox.fillStyle(0x222222, 0.8);
    this.progressBox.fillRect(
      centerX - barWidth / 2,
      centerY,
      barWidth,
      barHeight
    );

    // Progress Bar Fill
    this.progressBar = this.add.graphics();

    // Loading events
    this.load.on("progress", (value) => {
      this.progressBar.clear();
      this.progressBar.fillStyle(0xffffff, 1);
      this.progressBar.fillRect(
        centerX - barWidth / 2,
        centerY,
        barWidth * value,
        barHeight
      );
    });

    this.load.on("complete", () => {
      this.time.delayedCall(500, () => {
        this.scene.start("MenuScene");
      });
    });

    // Load assets
    this.load.image("player", "assets/player.png");
    this.load.image("background", "assets/map.png"); // example map
    this.load.image("logo", "assets/logo.png"); // optional logo
  }

  create() {
    // (Nothing needed here since we use events)
  }
}
