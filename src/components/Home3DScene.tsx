import { useRef, useLayoutEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

interface Home3DSceneProps {
    scrollProgress: number; // 0 to 1
}

export const Home3DScene = ({ scrollProgress }: Home3DSceneProps) => {
    const { scene } = useGLTF("/models/robot.glb");
    const groupRef = useRef<THREE.Group>(null);
    const { viewport, size } = useThree();

    // Calculate responsive positions
    const isMobile = size.width < 768;
    const isTablet = size.width >= 768 && size.width < 1024;

    // Initial position (Center)
    const initialX = 0;
    const initialY = -1;
    const initialZ = 0;
    const initialScale = isMobile ? 1.5 : 2.2;
    const initialRotationY = - Math.PI; // Face left initially

    // Target position (Right side for Hero)
    // Dynamic positioning based on viewport width
    const targetX = isMobile ? 0 : (isTablet ? 0 : viewport.width / 5); // Center on tablet
    const targetY = isMobile || isTablet ? 2.5 : 0; // Move up on mobile/tablet
    const targetZ = isMobile ? 0 : 1.5;

    // Dynamic scale
    const targetScale = isMobile ? 1.3 : (isTablet ? 1 : 1.5); // Reduced tablet scale
    const targetRotationY = -0.9; // Rotate slightly to face content

    useFrame(() => {
        if (groupRef.current) {
            // Smooth interpolation based on scrollProgress
            const t = scrollProgress; // Linear for now, can add easing

            // Position
            groupRef.current.position.x = THREE.MathUtils.lerp(initialX, targetX, t);
            groupRef.current.position.y = THREE.MathUtils.lerp(initialY, targetY, t);
            groupRef.current.position.z = THREE.MathUtils.lerp(initialZ, targetZ, t);

            // Scale
            const currentScale = THREE.MathUtils.lerp(initialScale, targetScale, t);
            groupRef.current.scale.set(currentScale, currentScale, currentScale);

            // Rotation
            groupRef.current.rotation.y = THREE.MathUtils.lerp(initialRotationY, targetRotationY, t);
        }
    });

    return (
        <>
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <group ref={groupRef} dispose={null}>
                    <primitive object={scene} />
                </group>
            </Float>
        </>
    );
};

useGLTF.preload("/models/robot.glb");
