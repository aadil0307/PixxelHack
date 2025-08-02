"use client";

import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  color: string;
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles: Particle[] = [];
    const mouse = { x: width / 2, y: height / 2 };

    // Create particles
    const init = () => {
      particles = [];
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#667eea', '#f093fb', '#FFD700'];
      
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2 + 0.5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particles.push({
          x: x + Math.random() * 50 - 25,
          y: y + Math.random() * 50 - 25,
          size,
          baseX: x,
          baseY: y,
          density: (Math.random() * 30) + 1,
          color
        });
      }
    };

    // Draw particles
    const drawParticles = () => {
      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      });
    };

    // Update particle positions
    const updateParticles = () => {
      particles.forEach(particle => {
        let dx = mouse.x - particle.x;
        let dy = mouse.y - particle.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = 150;
        let force = (maxDistance - distance) / maxDistance;
        
        if (force < 0) force = 0;

        let directionX = (forceDirectionX * force * particle.density);
        let directionY = (forceDirectionY * force * particle.density);

        if (distance < 150) {
          particle.x -= directionX;
          particle.y -= directionY;
        } else {
          if (particle.x !== particle.baseX) {
            let dx = particle.x - particle.baseX;
            particle.x -= dx / 10;
          }
          if (particle.y !== particle.baseY) {
            let dy = particle.y - particle.baseY;
            particle.y -= dy / 10;
          }
        }
      });
    };

    // Draw connections
    const drawConnections = () => {
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.globalAlpha = 1 - (distance / 100);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Add gradient background
      const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
      gradient.addColorStop(0, 'rgba(0,0,0,0.1)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      updateParticles();
      drawConnections();
      drawParticles();
      
      requestAnimationFrame(animate);
    };

    // Event listeners
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default InteractiveBackground; 