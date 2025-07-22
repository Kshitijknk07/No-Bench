import Phaser from "phaser";
import BootScene from "./scenes/BootScene";
import MenuScene from "./scenes/MenuScene";
import GameScene from "./scenes/GameScene";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#1d1d1d",
  scene: [BootScene, MenuScene, GameScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

new Phaser.Game(config);
