const canvas = document.querySelector("#snakeCanvas");
const c = canvas.getContext("2d");
const gravity = 1;
const maxGrav = 15;
const slimes = new Array();
for (let i = 1; i <= 6; i++) {
  const img = new Image(84, 66);
  img.src = "./sprites/i" + i + ".png";
  slimes.push(img);
}

const cowboys = new Array();
for (let i = 0; i < 9; i++) {
  const img = new Image(64, 128);
  img.src = "./sprites/c" + i + ".png";
  cowboys.push(img);
}

class Sprite {
  constructor({
    pos,
    vel,
    size = { w: 50, h: 50 },
    color = "red",
    sprites = slimes,
  }) {
    this.pos = pos;
    this.size = size;
    this.vel = vel;
    this.color = color;
    this.RW = false; // * H veggjatékk
    this.LW = false; // * V veggjatékk
    this.counter = 1;
    this.state = 0;
    this.moving = false;
    this.sprites = sprites;
  }

  draw() {
    this.counter++;
    if (this.counter % 8 === 0 && this.moving) {
      this.state++;
      c.drawImage(
        this.sprites[this.state % this.sprites.length],
        this.pos.x,
        this.pos.y
      );
    } else if (this.moving) {
      c.drawImage(
        this.sprites[this.state % this.sprites.length],
        this.pos.x,
        this.pos.y
      );
    } else {
      c.drawImage(this.sprites[0], this.pos.x, this.pos.y);
    }
    // console.log("this.state --> ", this.state % 6);
  }

  update() {
    // ! teiknar sprite með uppfærðum stöðum
    this.draw();

    // * sér um movement fyrir x ás
    this.pos.x += this.vel.x;
    if (this.vel.y == 0) {
      if (this.vel.x > 0) this.vel.x -= 1; // sér um að hægja á fyrir ->
      if (this.vel.x < 0) this.vel.x += 1; // sér um að hægja á fyrir <-
    }

    if (this.pos.x + this.size.w + this.vel.x >= canvas.width) {
      this.vel.x = 0;
      this.RW = true;
      this.pos.x = canvas.width - this.size.w;
    } else this.RW = false;

    if (this.pos.x + this.vel.x <= 0) {
      this.vel.x = 0;
      this.LW = true;
      this.pos.x = 0;
    } else this.LW = false;

    // * sér um movement fyrir y ás
    // ! mjög mikið WIP
    this.pos.y += this.vel.y;
    if (this.pos.y + this.size.h >= canvas.height) {
      this.vel.y = 0;
      this.grounded = true;
      this.pos.y = canvas.height - this.size.h;
    } else if (this.vel.y < maxGrav) {
      this.vel.y += gravity;
      this.grounded = false;
    } else {
      this.vel.y = maxGrav;
      this.grounded = false;
    }
  }
}

const keys = {
  right: false,
  left: false,
  up: false,
};

const player = new Sprite({
  pos: {
    x: 10,
    y: 10,
  },
  size: {
    w: 64,
    h: 128,
  },
  vel: {
    x: 0,
    y: 0,
  },
  sprites: cowboys,
});

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "#45f";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  if (keys.right && player.vel.x < 10 && !player.RW && player.grounded)
    player.vel.x = 5;
  if (keys.left && player.vel.x > -10 && !player.LW && player.grounded)
    player.vel.x = -5;
  if (keys.up && player.grounded) player.vel.y = -20;
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
      keys.right = true;
      player.moving = true;
      break;
    case "ArrowLeft":
      keys.left = true;
      player.moving = true;
      break;
    case "ArrowUp":
      keys.up = true;
      break;
    default:
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowRight":
      keys.right = false;
      player.moving = false;
      break;
    case "ArrowLeft":
      keys.left = false;
      player.moving = false;
    case "ArrowUp":
      keys.up = false;
    default:
      break;
  }
});

animate();
