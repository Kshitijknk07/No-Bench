const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: "#1d1f21",
  parent: "game-container", // optional if you're attaching to a div
  scene: [BootScene, MenuScene, GameScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scale: {
    mode: Phaser.Scale.RESIZE, // This makes it resize dynamically
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};
