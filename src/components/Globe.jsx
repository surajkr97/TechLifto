import React, { useRef, useEffect, useState } from 'react';

const Globe = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const size = 200;
    canvas.width = size;
    canvas.height = size;

    // Globe configuration
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.35;
    
    // Initialize mouse position
    if (!mouseRef.current) {
      mouseRef.current = { x: 0, y: 0 };
    }
    
    // Initialize arrays first
    const particles = [];
    const connections = [];
    const dataPoints = [];

    // Initialize particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * size,
        y: Math.random() * size,
        z: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.8 + 0.2,
        size: Math.random() * 1.5 + 0.5
      });
    }

    // Initialize data points on globe surface
    for (let i = 0; i < 15; i++) {
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      dataPoints.push({
        phi,
        theta,
        intensity: Math.random(),
        pulsePhase: Math.random() * Math.PI * 2,
        connectionPhase: Math.random() * Math.PI * 2
      });
    }

    // Initialize connections between data points
    for (let i = 0; i < dataPoints.length; i++) {
      for (let j = i + 1; j < dataPoints.length; j++) {
        if (Math.random() < 0.25) { // 25% chance of connection
          connections.push({
            from: i,
            to: j,
            strength: Math.random() * 0.8 + 0.2,
            phase: Math.random() * Math.PI * 2
          });
        }
      }
    }

    let time = 0;
    let rotation = 0;

    const animate = () => {
      time += 0.016; // ~60fps
      rotation += 0.003;

      // Clear canvas with transparency (no background)
      ctx.clearRect(0, 0, size, size);

      // Initialize mouse interaction variables
      const mouseInfluence = isHovered ? 1 : 0;
      const mouseX = mouseRef.current?.x || 0;
      const mouseY = mouseRef.current?.y || 0;

      // Draw 3D sphere base with enhanced gradients
      const sphereGradient = ctx.createRadialGradient(
        centerX - radius * 0.4, centerY - radius * 0.4, 0,
        centerX, centerY, radius * 1.2
      );
      sphereGradient.addColorStop(0, 'hsla(280, 100%, 70%, 0.15)');
      sphereGradient.addColorStop(0.3, 'hsla(200, 100%, 60%, 0.12)');
      sphereGradient.addColorStop(0.7, 'hsla(280, 80%, 50%, 0.08)');
      sphereGradient.addColorStop(1, 'hsla(200, 60%, 30%, 0.02)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = sphereGradient;
      ctx.fill();

      // Add 3D rim lighting effect
      const rimGradient = ctx.createRadialGradient(
        centerX, centerY, radius * 0.8,
        centerX, centerY, radius * 1.1
      );
      rimGradient.addColorStop(0, 'transparent');
      rimGradient.addColorStop(0.8, 'hsla(280, 100%, 70%, 0.05)');
      rimGradient.addColorStop(1, 'hsla(200, 100%, 60%, 0.15)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.1, 0, Math.PI * 2);
      ctx.fillStyle = rimGradient;
      ctx.fill();

      // Draw enhanced grid lines with 3D perspective
      ctx.strokeStyle = 'hsla(280, 100%, 70%, 0.2)';
      ctx.lineWidth = 0.8;
      
      // Latitude lines with 3D depth
      for (let i = 1; i < 6; i++) {
        const lat = (i - 3) * Math.PI / 6;
        const y = centerY + Math.sin(lat) * radius * 0.7;
        const width = Math.cos(lat) * radius * 0.8;
        const depth = Math.cos(lat + rotation * 0.5);
        
        if (depth > 0) {
          ctx.strokeStyle = `hsla(280, 100%, 70%, ${0.3 * depth})`;
        } else {
          ctx.strokeStyle = `hsla(200, 100%, 60%, ${0.15 * Math.abs(depth)})`;
        }
        
        ctx.beginPath();
        ctx.ellipse(centerX, y, width, width * 0.15, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Longitude lines with enhanced 3D effect
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI / 4) + rotation;
        const depth = Math.sin(angle);
        
        if (depth > 0) {
          ctx.strokeStyle = `hsla(280, 100%, 70%, ${0.25 * depth})`;
        } else {
          ctx.strokeStyle = `hsla(200, 100%, 60%, ${0.12 * Math.abs(depth)})`;
        }
        
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius * 0.75, radius * 0.75, angle, 0, Math.PI);
        ctx.stroke();
      }

      // Draw data points and connections with new colors
      dataPoints.forEach((point, index) => {
        const x = centerX + Math.cos(point.phi + rotation) * Math.sin(point.theta) * radius * 0.85;
        const y = centerY + Math.sin(point.theta) * radius * 0.85;
        const z = Math.sin(point.phi + rotation) * Math.sin(point.theta);

        if (z > -0.3) { // Show more depth
          // Enhanced pulsing data point
          const pulse = Math.sin(time * 4 + point.pulsePhase) * 0.5 + 0.5;
          const pointSize = 1.5 + pulse * 1.5;
          const depth = Math.max(0, z + 0.3) / 1.3;
          
          ctx.beginPath();
          ctx.arc(x, y, pointSize, 0, Math.PI * 2);
          
          if (z > 0) {
            ctx.fillStyle = `hsla(280, 100%, 70%, ${0.9 * depth + pulse * 0.1})`;
          } else {
            ctx.fillStyle = `hsla(200, 100%, 60%, ${0.6 * depth + pulse * 0.1})`;
          }
          ctx.fill();
          
          // Enhanced glow effect
          ctx.beginPath();
          ctx.arc(x, y, pointSize * 3, 0, Math.PI * 2);
          
          if (z > 0) {
            ctx.fillStyle = `hsla(280, 100%, 70%, ${0.08 * depth + pulse * 0.03})`;
          } else {
            ctx.fillStyle = `hsla(200, 100%, 60%, ${0.05 * depth + pulse * 0.02})`;
          }
          ctx.fill();

          // Store visible point position for connections
          point.screenX = x;
          point.screenY = y;
          point.visible = true;
          point.depth = depth;
        } else {
          point.visible = false;
        }
      });

      // Draw enhanced connections between visible data points
      connections.forEach(connection => {
        const from = dataPoints[connection.from];
        const to = dataPoints[connection.to];
        
        if (from.visible && to.visible) {
          const connectionStrength = Math.sin(time * 3 + connection.phase) * 0.4 + 0.6;
          const avgDepth = (from.depth + to.depth) / 2;
          
          ctx.beginPath();
          ctx.moveTo(from.screenX, from.screenY);
          
          // Enhanced curved connection with 3D depth
          const midX = (from.screenX + to.screenX) / 2;
          const midY = (from.screenY + to.screenY) / 2 - (25 * avgDepth);
          ctx.quadraticCurveTo(midX, midY, to.screenX, to.screenY);
          
          ctx.strokeStyle = `hsla(280, 100%, 70%, ${0.4 * connectionStrength * avgDepth})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Enhanced data flow animation
          const flowProgress = (time * 2.5 + connection.phase) % 1;
          const flowX = from.screenX + (to.screenX - from.screenX) * flowProgress;
          const flowY = from.screenY + (to.screenY - from.screenY) * flowProgress - (25 * avgDepth) * Math.sin(flowProgress * Math.PI);
          
          ctx.beginPath();
          ctx.arc(flowX, flowY, 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(200, 100%, 60%, ${0.9 * connectionStrength * avgDepth})`;
          ctx.fill();
        }
      });

      // Draw floating particles with new colors
      particles.forEach(particle => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Boundary wrapping
        if (particle.x < 0) particle.x = size;
        if (particle.x > size) particle.x = 0;
        if (particle.y < 0) particle.y = size;
        if (particle.y > size) particle.y = 0;
        if (particle.z < 0) particle.z = 100;
        if (particle.z > 100) particle.z = 0;

        // Mouse interaction
        if (mouseInfluence > 0) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 60) {
            const force = (60 - distance) / 60;
            particle.vx += dx * force * 0.0008;
            particle.vy += dy * force * 0.0008;
          }
        }

        // Draw particle with depth-based opacity and color variation
        const depthOpacity = (particle.z / 100) * particle.opacity;
        const particleSize = particle.size * (particle.z / 100 + 0.3);
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        
        // Alternate between purple and cyan particles
        if (particle.z > 50) {
          ctx.fillStyle = `hsla(280, 100%, 70%, ${depthOpacity * 0.7})`;
        } else {
          ctx.fillStyle = `hsla(200, 100%, 60%, ${depthOpacity * 0.5})`;
        }
        ctx.fill();
      });

      // Draw enhanced orbital rings
      for (let i = 0; i < 3; i++) {
        const ringRadius = radius + (i + 1) * 18;
        const ringOpacity = 0.08 + Math.sin(time * 0.8 + i) * 0.04;
        const ringRotation = rotation * (1 + i * 0.4);
        
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, ringRadius, ringRadius * 0.15, ringRotation, 0, Math.PI * 2);
        
        if (i % 2 === 0) {
          ctx.strokeStyle = `hsla(280, 100%, 70%, ${ringOpacity})`;
        } else {
          ctx.strokeStyle = `hsla(200, 100%, 60%, ${ringOpacity})`;
        }
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (mouseRef.current) {
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div className="relative w-52 h-52 mx-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer transition-all duration-500 hover:scale-110 rounded-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          filter: 'drop-shadow(0 0 30px hsla(280, 100%, 70%, 0.6)) drop-shadow(0 0 60px hsla(200, 100%, 60%, 0.3))',
          background: 'transparent',
        }}
      />
      
      <div className="text-center mt-6">
        <h3 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
          Global Network
        </h3>
        <p className="text-sm text-muted-foreground">
          Connected worldwide through modern solutions
        </p>
      </div>
    </div>
  );
};

export default Globe;