import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Html, Image } from '@react-three/drei';
import * as THREE from 'three';

// 1. Camera Parallax Rig
const CameraRig = () => {
    useFrame((state) => {
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, (state.mouse.x * 2), 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (state.mouse.y * 2), 0.05);
        state.camera.lookAt(0, 0, 0);
    });
    return null;
};

// 2. True 3D Avatar Image Layer
const AvatarLayer = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.1 - 0.5;
        }
    });

    return (
        <Image
            ref={meshRef}
            url="/images/akshita-avatar-transparent.png"
            position={[0, -0.5, 2.5]}
            scale={[3.5, 4.5]} // Arbitrary scale, will double-check visual sizing
            transparent={true}
        />
    );
};

// 3. Digital Core
const DigitalCore = () => {
    const coreRef = useRef();

    useFrame((state, delta) => {
        coreRef.current.rotation.x += delta * 0.15;
        coreRef.current.rotation.y += delta * 0.2;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={coreRef} position={[0, -0.5, -2]} scale={1.8}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#e57399"
                    roughness={0.25}
                    metalness={0.2}
                />
            </mesh>
        </Float>
    );
};

// 4. Orbital System
const OrbitalRings = () => {
    const ringsRef = useRef();

    useFrame((state, delta) => {
        ringsRef.current.rotation.y -= delta * 0.05;
        ringsRef.current.rotation.z += delta * 0.02;
    });

    return (
        <group ref={ringsRef} position={[0, -0.5, -2]}>
            {/* Ring 1 - Outer (Behind) */}
            <mesh rotation={[Math.PI / 3, 0, 0]}>
                <torusGeometry args={[3.5, 0.015, 16, 64]} />
                <meshBasicMaterial color="#e57399" transparent opacity={0.4} />
                <mesh position={[3.5, 0, 0]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshBasicMaterial color="#fff7fa" />
                </mesh>
            </mesh>

            {/* Ring 2 - Mid (Behind) */}
            <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
                <torusGeometry args={[2.8, 0.01, 16, 64]} />
                <meshBasicMaterial color="#ffb6c9" transparent opacity={0.3} />
                <mesh position={[0, 2.8, 0]}>
                    <sphereGeometry args={[0.06, 16, 16]} />
                    <meshBasicMaterial color="#fff7fa" />
                </mesh>
            </mesh>

            {/* Ring 3 - Inner (Behind) */}
            <mesh rotation={[0, Math.PI / 2, Math.PI / 6]}>
                <torusGeometry args={[2.2, 0.02, 16, 64]} />
                <meshBasicMaterial color="#5a1635" transparent opacity={0.6} />
            </mesh>

            {/* Ring 4 - Front Orbital (In front of Photo which is at Z=4.5 relative to Rings) */}
            <mesh rotation={[Math.PI / 8, -Math.PI / 4, 0]} position={[0, 0, 5]}>
                <torusGeometry args={[1.5, 0.015, 16, 64]} />
                <meshBasicMaterial color="#ffb6c9" transparent opacity={0.5} />
                <mesh position={[1.5, 0, 0]}>
                    <sphereGeometry args={[0.05, 16, 16]} />
                    <meshBasicMaterial color="#e57399" />
                </mesh>
            </mesh>
        </group>
    );
};

// 5. Loading Fallback
const CanvasLoader = () => {
    return (
        <Html center>
            <div style={{ color: '#ffb6c9', fontSize: '1.2rem', fontWeight: 500, width: 'max-content', letterSpacing: '1px' }}>
                Entering my digital space...
            </div>
        </Html>
    );
};

export default function Hero3D() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // Init setup
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="canvas-container" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <Suspense fallback={<CanvasLoader />}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} color="#fff7fa" intensity={0.8} />

                    {/* Pink/Burgundy Rim Lights */}
                    <pointLight position={[-5, 5, -5]} color="#ffb6c9" intensity={1.5} />
                    <pointLight position={[5, -5, 5]} color="#5a1635" intensity={2} />
                    <pointLight position={[0, 2, 4]} color="#e57399" intensity={0.5} />

                    {/* Camera logic turned off for mobile performance parity? We leave it on, but optimize counts */}
                    <CameraRig />

                    {/* The 3D Composition */}
                    {/* Background Elements */}
                    <DigitalCore />
                    <OrbitalRings />
                    <Sparkles count={isMobile ? 30 : 100} scale={10} size={1.5} speed={0.4} color="#ffb6c9" opacity={0.3} position={[0, 0, -2]} />

                    {/* Stylized Avatar Image Layer */}
                    <AvatarLayer />

                    {/* Foreground Elements (In front of character) */}
                    <Sparkles count={isMobile ? 15 : 50} scale={4} size={2} speed={0.5} color="#fff7fa" opacity={0.8} position={[0, 0, 3.5]} />

                </Suspense>
            </Canvas>
        </div>
    );
}
