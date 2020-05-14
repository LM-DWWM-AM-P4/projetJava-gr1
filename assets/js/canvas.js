// CANVAS

(function() {
  
    'use strict';
    
    var c = document.getElementById('c');
    var ctx = c.getContext('2d');
    var w = c.width = window.innerWidth;
    var h = c.height = window.innerHeight;
    var itr = 100;
    var s = 30;
    var off = 0;
    
    requestAnimationFrame(function loop() {
      requestAnimationFrame(loop);
        
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, w, h);
      
      off += 0.5;
      
      for(var i = 0; i < itr; i++) {
        
        var x = Math.random() * w;
        var y = Math.random() * h;
        var gx = Math.floor(x / s) * s;
        var gy = Math.floor(y / s) * s;
        var scl = Math.random();
        var c = (gx + gy) / (w + h);
  
        ctx.save();
        ctx.translate(gx, gy);
        ctx.rotate(Math.random() * Math.PI * 2);
        ctx.scale(scl, scl);
  
        ctx.beginPath();
        ctx.fillStyle = 'hsl(' + (c * 200 + off) + ', 100%, 50%)';
        ctx.arc(0, 0, s / 2, 0.25 * Math.PI, 1.25 * Math.PI);
        ctx.fill();    
  
        ctx.beginPath();
        ctx.arc(0, 0, s / 2, 0.75 * Math.PI, 1.75 * Math.PI);
        ctx.fill();    
  
        ctx.restore();
      }    
    });
    
    
    
    
  })();
  
  