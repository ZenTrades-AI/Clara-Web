import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

interface CollectsHowItWorks3DSceneProps {
    activeStep: number;
}

export const CollectsHowItWorks3DScene = ({ activeStep }: CollectsHowItWorks3DSceneProps) => {
    // Using calculator.glb as requested
    const { scene } = useGLTF("/models/calculator.glb");
    const clone = useMemo(() => scene.clone(), [scene]);
    const groupRef = useRef<THREE.Group>(null);
    const { size } = useThree();

    // Responsive settings
    const isMobile = size.width < 768;
    const isTablet = size.width >= 768 && size.width < 1024;

    // Scale - Decreased as requested (1.3 for Desktop)
    const scale = isMobile ? 0.5 : (isTablet ? 0.3 : 0.9);

    // Positions (Relative to center)
    // Even steps (0, 2, 4): Text Left, Model Right -> X > 0
    // Odd steps (1, 3): Text Right, Model Left -> X < 0
    const xOffset = isMobile ? 0 : (isTablet ? 1.5 : 2.2);
    const targetX = (activeStep % 2 === 0) ? xOffset : -xOffset;

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
            // Matching Answers logic: Start High (1), End Low (-1)
            const startY = 1;
            const endY = -1;
            const progress = activeStep / 4; // 4 is max step index
            const targetY = startY + (progress * (endY - startY));

            groupRef.current.position.y = THREE.MathUtils.damp(
                groupRef.current.position.y,
                targetY,
                2,
                delta
            );

            // Smoothly interpolate rotation
            // Base rotation: -45 deg (facing slightly forward)
            const baseRotation = Math.PI / 8;
            groupRef.current.rotation.y = THREE.MathUtils.damp(
                groupRef.current.rotation.y,
                baseRotation + (activeStep % 2 === 0 ? -0.5 : 0.5),
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
                    position={[0, 0.2, 0]} // Initial positon matching Answers
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    {/* To rotate on X, change the first value: [X, Y, Z] */}
                    <primitive object={clone} rotation={[-0.5, -0.5, -0.5]} />
                </group>
            </Float>
        </>
    );
};

useGLTF.preload("/models/calculator.glb");
