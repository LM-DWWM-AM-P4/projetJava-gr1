// CANVAS

// (function() {
  
//     'use strict';
    
//     var c = document.getElementById('c');
//     var ctx = c.getContext('2d');
//     var w = c.width = window.innerWidth;
//     var h = c.height = window.innerHeight;
//     var itr = 100;
//     var s = 30;
//     var off = 0;
    
//     requestAnimationFrame(function loop() {
//       requestAnimationFrame(loop);
        
//       ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
//       ctx.fillRect(0, 0, w, h);
      
//       off += 0.5;
      
//       for(var i = 0; i < itr; i++) {
        
//         var x = Math.random() * w;
//         var y = Math.random() * h;
//         var gx = Math.floor(x / s) * s;
//         var gy = Math.floor(y / s) * s;
//         var scl = Math.random();
//         var c = (gx + gy) / (w + h);
  
//         ctx.save();
//         ctx.translate(gx, gy);
//         ctx.rotate(Math.random() * Math.PI * 2);
//         ctx.scale(scl, scl);
  
//         ctx.beginPath();
//         ctx.fillStyle = 'hsl(' + (c * 200 + off) + ', 100%, 50%)';
//         ctx.arc(0, 0, s / 2, 0.25 * Math.PI, 1.25 * Math.PI);
//         ctx.fill();    
  
//         ctx.beginPath();
//         ctx.arc(0, 0, s / 2, 0.75 * Math.PI, 1.75 * Math.PI);
//         ctx.fill();    
  
//         ctx.restore();
//       }    
//     });
    
    
    
    
//   })();
  
var width = window.innerWidth,
    height = window.innerHeight,
    ratio = window.devicePixelRatio;

var x = width / 2,
    r = 40,
    step = 0,
    vx = r * 0.2;

var sprites = new Image();
sprites.onload = animate;
sprites.src = "shell.png";



var canvas = document.getElementById("cavas"),
    context = canvas.getContext("2d");

canvas.width  = width  * ratio;
canvas.height = height * ratio;
canvas.style.width  = width  + "px";
canvas.style.height = height + "px";
context.scale(ratio, ratio);
context.imageSmoothingEnabled = false;
context.fillStyle = "rgba(255, 255, 255, 0.25)";


function animate() {
    draw();
    update();
    requestAnimationFrame(animate);
}


function draw() {
    context.fillRect(0, 0, width, height);
    
    // Affichage
    drawShell(x, height, r, Math.floor(step));
}

function drawShell(x, y, r, step) {
    var s = r/12;
    
    context.drawImage(sprites, 32*step, 0, 32, 32, x - 16*s, y - 26*s, 32*s, 32*s);
}


function update() {
    // Mise à jour des variables
    x += vx;
    
    if (x < r || x > width - r) {
        vx *= -1;
    }
    
    step += 0.3;
    if (step >= 12)
        step -= 12;
}
  