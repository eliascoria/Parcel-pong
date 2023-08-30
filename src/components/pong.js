// import Phaser from "phaser";
// import Racket from "../components/racket.js";
// import Ball from "../components/ball.js";
// // import events from "../scenes/EventCenter";

// export default class Pong extends Phaser.Scene {
//   constructor() {
//     super("pong");
//     this.level;
//     this.score;
//     this.obstacles = [];
//     this.racket;
//     this.ball;
//     this.velocityRacket;
//     this.velocityBall;
//   }
//   init(data) {
//     this.level = data.level || 1;
//     this.score = data.score || 0;
//     this.velocityRacket = data.velocityRacket || 300;
//     this.velocityBall = data.velocityBall || 200;
//   }

//   create() {
//     this.scene.launch("ui", {
//       level: this.level,
//       score: this.score,
//     });
//     this.racket = new Racket(
//       this,
//       400,
//       300,
//       100,
//       20,
//       0xffffff,
//       this.velocityRacket
//     );

//     this.ball = new Ball(this, 400, 300, 10, 0xffffff, this.velocityBall);

//     // add collider
//     // this.physics.addCollider(this.racket, this.ball, this.hit, null, this);

//     //collider obstacles

//     this.obstacles.forEach((obstacle) => {
//       const o = this.add.rectangle(
//         obstacle.y,
//         obstacle.y,
//         obstacle.w,
//         obstacle.h,
//         0xffffffff
//       );
//       this.physics.add.existing(o);
//       //   o.body.setImmovable(true);
//       this.physics.add.collider(this.ball, o);
//     });
//   }
// }
