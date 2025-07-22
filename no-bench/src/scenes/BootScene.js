export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    // Set background color
    this.cameras.main.setBackgroundColor("#0e0e0e");

    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    // Loading text
    this.loadingText = this.add
      .text(centerX, centerY - 50, "Loading...", {
        fontFamily: "Arial",
        fontSize: "24px",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    // Progress bar box
    const barWidth = 300;
    const barHeight = 20;

    this.progressBox = this.add.graphics();
    this.progressBox.fillStyle(0x222222, 0.8);
    this.progressBox.fillRect(
      centerX - barWidth / 2,
      centerY,
      barWidth,
      barHeight
    );

    // Progress bar fill
    this.progressBar = this.add.graphics();

    // Progress updating
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

    // Once loading completes
    this.load.on("complete", () => {
      console.log("✅ BootScene: Assets loaded. Moving to MenuScene...");
      this.time.delayedCall(300, () => {
        this.scene.start("MenuScene");
      });
    });

    // Fallback if error loading asset
    this.load.on("loaderror", (file) => {
      console.error("❌ Error loading:", file.key);
    });

    // 🔽 Load essential assets here
    this.load.image("player", "assets/player.png");

    // You can uncomment below if you have these assets
    // this.load.image("background", "assets/map.png");
    // this.load.image("logo", "assets/logo.png");
  }

  create() {
    console.log("✅ BootScene started");
  }
}
