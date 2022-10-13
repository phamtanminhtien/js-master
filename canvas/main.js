const canvas = document.createElement("canvas");
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
    