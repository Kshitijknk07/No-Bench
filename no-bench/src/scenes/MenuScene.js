export default class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  create() {
    // Optional background color or image
    this.cameras.main.setBackgroundColor("#111111");
    // this.add.image(400, 300, "background").setOrigin(0.5).setAlpha(0.3)

    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    // Stylized Title
    const title = this.add
      .text(centerX, centerY - 100, "NO BENCH", {
        fontFamily: "Arial Black",
        fontSize: "64px",
        color: "#FFD700",
        stroke: "#ffffff",
        strokeThickness: 6,
        shadow: {
          offsetX: 2,
          offsetY: 2,
          color: "#000000",
          blur: 4,
          stroke: true,
          fill: true,
        },
      })
      .setOrigin(0.5);

    // "Click to Start" animated
    const startText = this.add
      .text(centerX, centerY + 50, "Click to Start", {
        fontSize: "28px",
        fontFamily: "Verdana",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    // Add pulsing animation
    this.tweens.add({
      targets: startText,
      alpha: { from: 1, to: 0.4 },
      duration: 800,
      yoyo: true,
      repeat: -1,
    });

    // On click: go to GameScene
    this.input.on("pointerdown", () => {
      this.scene.start("GameScene");
    });
  }
}
