const canvas = [
  {
    fileName: "index.html",
    content: `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Canvas</title>
      <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
      <script src="./main.js"></script>
    </body>
  </html>
  `,
  },
  {
    fileName: "main.js",
    content: `const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext("2d");
    
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    
    canvas.height = HEIGHT;
    canvas.width = WIDTH;
    
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    
    class _Screen {
      constructor() {
        this.color = getRandomColor();
        this.fps = 10;
      }
    
      clear = () => {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
      };
      loop = () => {
        setTimeout(() => {
          requestAnimationFrame(this.loop);
    
          this.clear();
          this.update();
          this.draw();
        }, 1000 / this.fps);
      };
      update = () => {
        this.color = getRandomColor();
      };
      draw = () => {
        ctx.font = "3rem Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = this.color;
        ctx.fillText("npx js-master -t canvas", WIDTH / 2, HEIGHT / 2);
      };
    }
    
    const _screen = new _Screen();
    
    _screen.loop();
    `,
  },
  {
    fileName: "style.css",
    content: `* {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
    }
    
    body {
      width: 100vw;
      width: 100vh;
    }
    `,
  },
];

export default canvas;
