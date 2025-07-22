export default class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  create() {
    const title = this.add
      .text(400, 250, "NO BENCH", {
        fontSize: "48px",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    const startText = this.add
      .text(400, 350, "Click to Start", {
        fontSize: "24px",
        color: "#aaaaaa",
      })
      .setOrigin(0.5);

    this.input.on("pointerdown", () => {
      this.scene.start("GameScene");
    });
  }
}
