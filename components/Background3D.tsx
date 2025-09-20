import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Dodecahedron } from '@react-three/drei';

// Helper function to generate random points in a sphere, replacing `maath/random`
const inSphere = (array: Float32Array, { radius = 1 }): Float32Array => {
  for (let i = 0; i < array.length; i += 3) {
    let x, y, z, d;
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
      d = x * x + y * y + z * z;
    } while (d > 1);
    
    array[i] = x * radius;
    array[i + 1] = y * radius;
    array[i + 2] = z * radius;
  }
  return array;
}

const Stars = (props: any) => {
  // FIX: Initialize useRef with null to fix "Expected 1 arguments, but got 0" error by providing a default value.
  const ref = useRef<any>(null);
  // FIX: The number of vertices must be a multiple of 3 for x, y, z coordinates. 5001 is used instead of 5000.
  const sphere = inSphere(new Float32Array(5001), { radius: 1.2 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#877EFF"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const InteractiveShape = () => {
    // FIX: Initialize useRef with null to fix "Expected 1 arguments, but got 0" error by providing a default value.
    const meshRef = useRef<any>(null);
    const { mouse } = useThree();

    useFrame((state) => {
        if(meshRef.current) {
            const time = state.clock.getElapsedTime();
            meshRef.current.rotation.y = time * 0.1;
            meshRef.current.rotation.x = time * 0.1;
            meshRef.current.position.x = mouse.x * 0.2;
            meshRef.current.position.y = mouse.y * 0.2;
        }
    });

    return (
        <Dodecahedron ref={meshRef} args={[0.3, 0]} position={[0, 0, -2]}>
            <meshStandardMaterial color="#915EFF" roughness={0.5} metalness={0.9} emissive="#3300ff" emissiveIntensity={2} />
        </Dodecahedron>
    );
};


const Background3D = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} color="#877EFF" intensity={2} />
            <Stars />
            <InteractiveShape />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;