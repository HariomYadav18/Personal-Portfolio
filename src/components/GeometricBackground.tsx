import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Shape {
  id: number;
  type: 'triangle' | 'circle' | 'square' | 'cross' | 'ring' | 'nested-square';
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  duration: number;
  delay: number;
}

const GeometricBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shapes: Shape[] = useMemo(() => {
    const shapeTypes: Shape['type'][] = ['triangle', 'circle', 'square', 'cross', 'ring', 'nested-square'];
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 24 + 8,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.4 + 0.1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -20,
    }));
  }, []);

  if (!mounted) return null;

  const renderShape = (shape: Shape) => {
    const baseStyle = {
      width: shape.size,
      height: shape.size,
    };

    switch (shape.type) {
      case 'triangle':
        return (
          <div
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid currentColor`,
            }}
          />
        );
      case 'circle':
        return (
          <div
            style={baseStyle}
            className="rounded-full border-2 border-current"
          />
        );
      case 'ring':
        return (
          <div
            style={baseStyle}
            className="rounded-full border-[3px] border-current"
          />
        );
      case 'square':
        return (
          <div
            style={baseStyle}
            className="border-2 border-current"
          />
        );
      case 'nested-square':
        return (
          <div style={baseStyle} className="relative border-2 border-current">
            <div 
              className="absolute inset-[25%] border border-current"
            />
          </div>
        );
      case 'cross':
        return (
          <div style={baseStyle} className="relative">
            <div 
              className="absolute top-1/2 left-0 w-full h-0.5 bg-current -translate-y-1/2"
            />
            <div 
              className="absolute top-0 left-1/2 h-full w-0.5 bg-current -translate-x-1/2"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background))_70%)]" />
      
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute text-foreground/20"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
          }}
          initial={{ 
            rotate: shape.rotation,
            scale: 0.8,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(shape.id) * 20, 0],
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [0.8, 1, 0.8],
            opacity: [shape.opacity, shape.opacity * 1.5, shape.opacity],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div 
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            style={{ filter: 'drop-shadow(0 0 4px currentColor)' }}
          >
            {renderShape(shape)}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GeometricBackground;
