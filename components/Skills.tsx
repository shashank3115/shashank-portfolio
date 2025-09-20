import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import AnimatedSection from './AnimatedSection';
import { SKILLS } from '../constants';

// FIX: Removed React.FC and typed props directly in the function signature.
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">{children}</span>
    </h2>
);

interface SkillTextProps {
    position: [number, number, number];
    text: string;
    level: number;
}

// FIX: Removed React.FC and used the SkillTextProps interface for props destructuring.
const SkillText = ({ position, text, level }: SkillTextProps) => {
    // FIX: Initialize useRef with null to fix "Expected 1 arguments, but got 0" error by providing a default value.
    const ref = useRef<any>(null);
    const [hovered, setHovered] = useState(false);
    
    useFrame(({ clock }) => {
        if(ref.current) {
            ref.current.lookAt(0, 0, 0);
        }
    });

    return (
        <Text
            ref={ref}
            position={position}
            fontSize={0.25}
            color={hovered ? '#00FFFF' : '#FFFFFF'}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            anchorX="center"
            anchorY="middle"
        >
            {text}
        </Text>
    );
};

// FIX: Removed React.FC for better type inference.
const SkillCloud = () => {
    // FIX: Initialize useRef with null to fix "Expected 1 arguments, but got 0" error by providing a default value.
    const groupRef = useRef<any>(null);
    const count = SKILLS.length;
    const radius = 3.5;

    const words = useMemo(() => {
        const temp = [];
        const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians
        for (let i = 0; i < count; i++) {
            const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
            const radiusAtY = Math.sqrt(1 - y * y);
            const theta = phi * i;
            const x = Math.cos(theta) * radiusAtY;
            const z = Math.sin(theta) * radiusAtY;
            temp.push({ position: [x * radius, y * radius, z * radius], skill: SKILLS[i]});
        }
        return temp;
    }, [count, radius]);

    useFrame((state) => {
        if(groupRef.current) {
            groupRef.current.rotation.y = state.mouse.x * 0.2;
            groupRef.current.rotation.x = state.mouse.y * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            {words.map((word, i) => (
                <SkillText key={i} position={word.position as [number, number, number]} text={word.skill.name} level={word.skill.level} />
            ))}
        </group>
    )
}

// FIX: Removed React.FC for better type inference.
const Skills = () => {
  return (
    <AnimatedSection id="skills" className="py-20 container mx-auto px-6">
      <SectionTitle>Skills</SectionTitle>
      <div className="w-full h-[500px]">
         <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <SkillCloud />
            </Suspense>
        </Canvas>
      </div>
    </AnimatedSection>
  );
};

export default Skills;