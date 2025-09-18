import React, { useRef, useEffect, useState } from 'react';

const AnimatedGlobe = ({ className = "" }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let dimensions = { width: 0, height: 0 };
    let centerX = 0, centerY = 0, radius = 0;
    
    // Set canvas size properly
    const setupCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      // Use default dimensions if canvas not yet sized
      const width = rect.width || 380;
      const height = rect.height || 380;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);
      
      dimensions = { width, height };
      centerX = width / 2;
      centerY = height / 2;
      radius = Math.min(centerX, centerY) * 0.8;
      
      return dimensions;
    };

    // Initial setup
    setupCanvas();
    
    // Retry setup after a short delay if dimensions are still zero
    const retrySetup = () => {
      if (dimensions.width === 0 || dimensions.height === 0) {
        setupCanvas();
        if (dimensions.width === 0 || dimensions.height === 0) {
          setTimeout(retrySetup, 100);
        }
      }
    };
    setTimeout(retrySetup, 10);

    // Advanced 3D Globe Parameters
    let rotation = 0;
    const particles = [];
    const connections = [];
    const dataPoints = [];
    const orbitRings = [];

    // Create orbital particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.004,
        radius: radius * (0.9 + Math.random() * 0.3),
        size: 1 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.7,
        color: `hsl(${180 + Math.random() * 40}, 70%, ${60 + Math.random() * 30}%)`,
        z: (Math.random() - 0.5) * radius * 0.8
      });
    }

    // Create data connection lines
    for (let i = 0; i < 25; i++) {
      const lat1 = (Math.random() - 0.5) * Math.PI;
      const lon1 = Math.random() * Math.PI * 2;
      const lat2 = (Math.random() - 0.5) * Math.PI;
      const lon2 = Math.random() * Math.PI * 2;
      
      connections.push({
        start: { lat: lat1, lon: lon1 },
        end: { lat: lat2, lon: lon2 },
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.01,
        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
        intensity: 0.3 + Math.random() * 0.7
      });
    }

    // Create data points on globe surface
    for (let i = 0; i < 40; i++) {
      const lat = (Math.random() - 0.5) * Math.PI;
      const lon = Math.random() * Math.PI * 2;
      
      dataPoints.push({
        lat,
        lon,
        size: 2 + Math.random() * 4,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        color: `hsl(${160 + Math.random() * 60}, 90%, 70%)`,
        intensity: 0.5 + Math.random() * 0.5
      });
    }

    // Create orbital rings
    for (let i = 0; i < 3; i++) {
      orbitRings.push({
        radius: radius * (1.1 + i * 0.15),
        rotation: Math.random() * Math.PI * 2,
        speed: 0.001 * (i + 1),
        tilt: (Math.random() - 0.5) * 0.5,
        opacity: 0.1 + Math.random() * 0.2
      });
    }

    // Convert 3D coordinates to 2D screen coordinates
    const project3D = (lat, lon, r = radius) => {
      const x3d = r * Math.cos(lat) * Math.cos(lon + rotation);
      const y3d = r * Math.sin(lat);
      const z3d = r * Math.cos(lat) * Math.sin(lon + rotation);
      
      return {
        x: centerX + x3d,
        y: centerY - y3d,
        z: z3d,
        visible: z3d > -r * 0.1 // Show points slightly behind sphere
      };
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      
      // Use current dimensions or fallback to default
      const currentWidth = dimensions.width || 400;
      const currentHeight = dimensions.height || 400;
      
      ctx.clearRect(0, 0, currentWidth, currentHeight);
      
      rotation += isHovered ? 0.06 : 0.006;

      // Draw cosmic background
      const bgGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.5);
      bgGrad.addColorStop(0, 'rgba(6, 182, 212, 0.05)');
      bgGrad.addColorStop(0.5, 'rgba(139, 92, 246, 0.03)');
      bgGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, currentWidth, currentHeight);

      // Draw orbital rings
      orbitRings.forEach(ring => {
        ring.rotation += ring.speed;
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(ring.tilt);
        ctx.beginPath();
        ctx.arc(0, 0, ring.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(6, 182, 212, ${ring.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      });

      // Draw main sphere with advanced shading
      const sphereGrad = ctx.createRadialGradient(
        centerX - radius * 0.3, centerY - radius * 0.3, 0,
        centerX, centerY, radius
      );
      sphereGrad.addColorStop(0, 'rgba(6, 182, 212, 0.15)');
      sphereGrad.addColorStop(0.6, 'rgba(139, 92, 246, 0.08)');
      sphereGrad.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.fill();

      // Draw sphere rim lighting
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw grid lines on sphere
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
      ctx.lineWidth = 1;
      
      // Latitude lines
      for (let lat = -Math.PI/2; lat <= Math.PI/2; lat += Math.PI/6) {
        ctx.beginPath();
        for (let lon = 0; lon <= Math.PI * 2; lon += 0.1) {
          const point = project3D(lat, lon);
          if (point.visible) {
            if (lon === 0) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
          }
        }
        ctx.stroke();
      }
      
      // Longitude lines
      for (let lon = 0; lon < Math.PI * 2; lon += Math.PI/6) {
        ctx.beginPath();
        for (let lat = -Math.PI/2; lat <= Math.PI/2; lat += 0.1) {
          const point = project3D(lat, lon);
          if (point.visible) {
            if (lat === -Math.PI/2) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
          }
        }
        ctx.stroke();
      }

      // Draw data points with pulsing effects
      dataPoints.forEach(point => {
        point.pulse += point.pulseSpeed;
        const projected = project3D(point.lat, point.lon);
        
        if (projected.visible) {
          const pulseSize = point.size * (1 + Math.sin(point.pulse) * 0.5);
          const alpha = point.intensity * (0.7 + Math.sin(point.pulse) * 0.3);
          
          // Main point
          ctx.beginPath();
          ctx.arc(projected.x, projected.y, pulseSize, 0, Math.PI * 2);
          ctx.fillStyle = point.color.replace('70%)', `70%, ${alpha})`);
          ctx.fill();
          
          // Glow effect
          const glowGrad = ctx.createRadialGradient(
            projected.x, projected.y, 0,
            projected.x, projected.y, pulseSize * 3
          );
          glowGrad.addColorStop(0, point.color.replace('70%)', '70%, 0.8)'));
          glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.beginPath();
          ctx.arc(projected.x, projected.y, pulseSize * 3, 0, Math.PI * 2);
          ctx.fillStyle = glowGrad;
          ctx.fill();
        }
      });

      // Draw connection lines with flow animation
      connections.forEach(connection => {
        connection.progress += connection.speed;
        if (connection.progress > 1) connection.progress = 0;

        const start = project3D(connection.start.lat, connection.start.lon);
        const end = project3D(connection.end.lat, connection.end.lon);
        
        if (start.visible && end.visible) {
          // Draw connection line
          const gradient = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
          gradient.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
          gradient.addColorStop(0.5, `rgba(251, 146, 60, ${connection.intensity * 0.5})`);
          gradient.addColorStop(1, 'rgba(139, 92, 246, 0.1)');
          
          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(end.x, end.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          
          // Draw flow particle
          const flowX = start.x + (end.x - start.x) * connection.progress;
          const flowY = start.y + (end.y - start.y) * connection.progress;
          
          ctx.beginPath();
          ctx.arc(flowX, flowY, 3, 0, Math.PI * 2);
          ctx.fillStyle = connection.color;
          ctx.fill();
          ctx.shadowBlur = 10;
          ctx.shadowColor = connection.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw floating particles around globe
      particles.forEach(particle => {
        particle.angle += particle.speed;
        const x = centerX + Math.cos(particle.angle) * particle.radius;
        const y = centerY + Math.sin(particle.angle) * particle.radius * 0.3 + 
                   Math.sin(particle.angle * 2 + particle.z * 0.01) * 20;
        
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace('60%)', `60%, ${particle.opacity})`);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse interaction
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Start animation immediately and ensure it runs
    const startAnimation = () => {
      // Always start animation, even if dimensions aren't perfect yet
      animate();
    };
    
    // Start animation immediately
    startAnimation();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer transition-all duration-300 hover:scale-110"
        style={{
          background: 'transparent',
          filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.3))',
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Global Network
          </h3>
          <p className="text-sm text-muted-foreground">
            Connected worldwide through modern solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGlobe;