import React, { useRef, useEffect } from 'react';

const Antigravity = ({
  count = 300,
  magnetRadius = 6,
  ringRadius = 7,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 1.5,
  lerpSpeed = 0.05,
  color = '#FF9FFC',
  autoAnimate = true,
  particleVariance = 1,
}) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0, isActive: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.parentElement.clientWidth;
    let height = canvas.parentElement.clientHeight;

    canvas.width = width;
    canvas.height = height;

    // Helper to get random number
    const random = (min, max) => Math.random() * (max - min) + min;

    // Initialize Particles
    const initParticles = () => {
      particles.current = [];
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          originX: Math.random() * width,
          originY: Math.random() * height,
          vx: 0,
          vy: 0,
          size: particleSize + Math.random() * particleVariance,
          color: color,
          angle: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    // Mouse Handlers
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.current.isActive = false;
    };

    // Resize Handler
    const handleResize = () => {
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.current.forEach((p) => {
        // Wave Motion
        if (autoAnimate) {
          p.angle += waveSpeed * 0.01;
          p.y += Math.sin(p.angle) * waveAmplitude * 0.1;
          p.x += Math.cos(p.angle) * waveAmplitude * 0.1;
        }

        // Mouse Interaction (Magnet Effect)
        if (mouse.current.isActive) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          
          // Magnet radius multiplier
          const maxDistance = magnetRadius * 20; 

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * ringRadius;
            const directionY = forceDirectionY * force * ringRadius;
            
            p.vx += directionX * 0.5;
            p.vy += directionY * 0.5;
          }
        }

        // Friction / Lerp (Return to somewhat original state or slow down)
        p.vx *= (1 - lerpSpeed);
        p.vy *= (1 - lerpSpeed);

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen (Infinite effect)
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;
        if (p.y > height) p.y = 0;
        if (p.y < 0) p.y = height;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Event Listeners
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [count, magnetRadius, ringRadius, waveSpeed, waveAmplitude, particleSize, lerpSpeed, color, autoAnimate, particleVariance]);

  return <canvas ref={canvasRef} style={{ display: 'block' }} />;
};

export default Antigravity;