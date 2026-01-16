import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

interface HowItWorks3DSceneProps {
    activeStep: number;
}

export const HowItWorks3DScene = ({ activeStep }: HowItWorks3DSceneProps) => {
    const { scene } = useGLTF("/models/answers.glb");
    const clone = useMemo(() => scene.clone(), [scene]);
    const groupRef = useRef<THREE.Group>(null);
    const { size } = useThree();

    // Responsive settings
    const isMobile = size.width < 768;
    const isTablet = size.width >= 768 && size.width < 1024;

    // Scale
    const scale = isMobile ? 1.2 : (isTablet ? 1.6 : 2.0);

    // Positions (Relative to center)
    // Even steps (0, 2, 4): Text Left, Model Right -> X > 0
    // Odd steps (1, 3): Text Right, Model Left -> X < 0
    const xOffset = isMobile ? 0 : (isTablet ? 1.5 : 2.2); // Reduced from 3.2 to ensure visibility
    const targetX = (activeStep % 2 === 0) ? xOffset : -xOffset;

    // Rotation targets (Optional: rotate model slightly to face center)
    const targetRotY = (activeStep % 2 === 0) ? -0.5 : 0.5;

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Smoothly interpolate position (X)
            groupRef.current.position.x = THREE.MathUtils.damp(
                groupRef.current.position.x,
                targetX,
                2,
                delta
            );

            // Smoothly interpolate position (Y) - Dynamic alignment per step
            // Step 0 (Top) -> 0.2 (Higher)
            // Step 4 (Bottom) -> -0.9 (Lower)
            const startY = 1;
            const endY = -1;
            // Linear interpolation: startY + (progress * (endY - startY))
            const progress = activeStep / 4; // 4 is max step index (5 steps total)
            const targetY = startY + (progress * (endY - startY));

            groupRef.current.position.y = THREE.MathUtils.damp(
                groupRef.current.position.y,
                targetY,
                2,
                delta
            );

            // Smoothly interpolate rotation
            // Actually let's just make it face the user more directly but titled
            const baseRotation = -Math.PI / 2;
            groupRef.current.rotation.y = THREE.MathUtils.damp(
                groupRef.current.rotation.y,
                baseRotation + (activeStep % 2 === 0 ? -0.5 : 0.5), // Increased rotation range for more dynamic effect
                3,
                delta
            );
        }
    });

    return (
        <>
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1} />

            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
                <group
                    ref={groupRef}
                    dispose={null}
                    scale={[scale, scale, scale]}
                    position={[0, 0.2, 0]} // Initial Y position, updated dynamically by useFrame
                    rotation={[0, -Math.PI / 2, 0]}
                >
                    <primitive object={clone} />
                </group>
            </Float>
        </>
    );
};

useGLTF.preload("/models/answers.glb");
