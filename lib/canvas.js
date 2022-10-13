"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var canvas = [
    {
        fileName: "index.html",
        content: "<!DOCTYPE html>\n  <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\" />\n      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n      <title>Canvas</title>\n      <link rel=\"stylesheet\" href=\"./style.css\" />\n    </head>\n    <body>\n      <script src=\"./main.js\"></script>\n    </body>\n  </html>\n  ",
    },
    {
        fileName: "main.js",
        content: "const canvas = document.createElement(\"canvas\");\n    document.body.appendChild(canvas);\n    \n    const ctx = canvas.getContext(\"2d\");\n    \n    const WIDTH = window.innerWidth;\n    const HEIGHT = window.innerHeight;\n    \n    canvas.height = HEIGHT;\n    canvas.width = WIDTH;\n    \n    function getRandomColor() {\n      var letters = \"0123456789ABCDEF\";\n      var color = \"#\";\n      for (var i = 0; i < 6; i++) {\n        color += letters[Math.floor(Math.random() * 16)];\n      }\n      return color;\n    }\n    \n    class _Screen {\n      constructor() {\n        this.color = getRandomColor();\n        this.fps = 10;\n      }\n    \n      clear = () => {\n        ctx.clearRect(0, 0, WIDTH, HEIGHT);\n        ctx.fillStyle = \"#000\";\n        ctx.fillRect(0, 0, WIDTH, HEIGHT);\n      };\n      loop = () => {\n        setTimeout(() => {\n          requestAnimationFrame(this.loop);\n    \n          this.clear();\n          this.update();\n          this.draw();\n        }, 1000 / this.fps);\n      };\n      update = () => {\n        this.color = getRandomColor();\n      };\n      draw = () => {\n        ctx.font = \"3rem Arial\";\n        ctx.textAlign = \"center\";\n        ctx.fillStyle = this.color;\n        ctx.fillText(\"npx js-master -t canvas\", WIDTH / 2, HEIGHT / 2);\n      };\n    }\n    \n    const _screen = new _Screen();\n    \n    _screen.loop();\n    ",
    },
    {
        fileName: "style.css",
        content: "* {\n      margin: 0px;\n      padding: 0px;\n      box-sizing: border-box;\n    }\n    \n    body {\n      width: 100vw;\n      width: 100vh;\n    }\n    ",
    },
];
exports.default = canvas;
