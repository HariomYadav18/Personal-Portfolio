import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Icosahedron, Octahedron, Torus } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = ({ position, shape, color, speed = 1 }: { 
  position: [number, number, number]; 
  shape: 'icosahedron' | 'octahedron' | 'torus';
  color: string;
  speed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  const ShapeComponent = shape === 'icosahedron' ? Icosahedron : shape === 'octahedron' ? Octahedron : Torus;
  const args = shape === 'torus' ? [1, 0.4, 16, 32] : [1, 1];

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <ShapeComponent ref={meshRef} args={args as any} position={position} scale={0.8}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          wireframe
          distort={0.2}
          speed={2}
        />
      </ShapeComponent>
    </Float>
  );
};

const ParticleField = () => {
  const count = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00ffff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#a855f7" />
        
        <AnimatedShape position={[-3, 2, -2]} shape="icosahedron" color="#00ffff" speed={0.8} />
        <AnimatedShape position={[3, -1, -3]} shape="octahedron" color="#a855f7" speed={1.2} />
        <AnimatedShape position={[0, -2, -4]} shape="torus" color="#00ffff" speed={0.6} />
        <AnimatedShape position={[-2, -2, -2]} shape="icosahedron" color="#a855f7" speed={1} />
        <AnimatedShape position={[4, 2, -5]} shape="octahedron" color="#00ffff" speed={0.9} />
        
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default Scene3D;
