import Phaser from "phaser"; // Only if you're using modules (like Vite/Parcel/Webpack)
import BootScene from "./scenes/BootScene";
import MenuScene from "./scenes/MenuScene";
import GameScene from "./scenes/GameScene";

// Game configuration
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#000000",
  parent: "game-container", // Connects to <div id="game-container"> in index.html
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }, // No gravity for top-down RPG-style movement
      debug: false, // Set true if you want to see physics bodies
    },
  },
  scene: [BootScene, MenuScene, GameScene], // Order matters: Boot -> Menu -> Game
};

// Create and start the game
const game = new Phaser.Game(config);
