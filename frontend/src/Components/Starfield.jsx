import React, { useEffect, useRef } from 'react';

const Starfield = ({ speed = 0.1, starColor = "#ffffff", backgroundColor = "black" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const stars = [];
    const starCount = 800; 
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
      });
    }

    let animationId;

    const animate = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
      
      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < starCount; i++) {
        let star = stars[i];

        // Speed adjust karein
        star.z -= speed * 20; 

        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
        }

        const x = (star.x / star.z) * width + cx;
        const y = (star.y / star.z) * height + cy;

        // SIZE CHANGE: Pehle 1.5 tha, ab 4.0 kiya hai taake wazia nazar aaye
        const radius = (1 - star.z / width) * 4.0;

        if (x >= 0 && x <= width && y >= 0 && y <= height) {
          const alpha = (1 - star.z / width);
          
          ctx.beginPath();
          ctx.fillStyle = starColor; // Stroke ki jagah Fill use kiya
          ctx.globalAlpha = alpha;
          
          // Circle draw karein (Dot) taake mota dikhay
          ctx.arc(x, y, radius > 0 ? radius : 0, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.globalAlpha = 1;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [speed, starColor, backgroundColor]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full block"
      style={{ background: backgroundColor }}
    />
  );
};

export default Starfield;