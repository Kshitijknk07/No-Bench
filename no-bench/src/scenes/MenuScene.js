export default class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  create() {
    console.log("✅ MenuScene started");

    // Fallback background color
    this.cameras.main.setBackgroundColor("#111");

    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    // Safe web font and larger stroke
    const title = this.add
      .text(centerX, centerY - 100, "NO BENCH", {
        fontFamily: "sans-serif",
        fontSize: "60px",
        color: "#FFD700",
        stroke: "#ffffff",
        strokeThickness: 8,
      })
      .setOrigin(0.5);

    // "Click to Start"
    const startText = this.add
      .text(centerX, centerY + 50, "Click to Start", {
        fontSize: "26px",
        fontFamily: "sans-serif",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    // Pulse animation
    this.tweens.add({
      targets: startText,
      alpha: { from: 1, to: 0.3 },
      duration: 800,
      yoyo: true,
      repeat: -1,
    });

    // Start game on click
    this.input.once("pointerdown", () => {
      this.scene.start("GameScene");
    });
  }
}
