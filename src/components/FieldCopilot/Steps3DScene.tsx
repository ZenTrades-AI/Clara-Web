import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

interface Steps3DSceneProps {
    activeStep: number;
}

export const Steps3DScene = ({ activeStep }: Steps3DSceneProps) => {
    const { scene } = useGLTF("/models/robot.glb");
    const clone = useMemo(() => scene.clone(), [scene]);
    const groupRef = useRef<THREE.Group>(null);
    const { size } = useThree();

    // Responsive settings
    const isMobile = size.width < 768;
    const isTablet = size.width >= 768 && size.width < 1024;

    // Scale
    const scale = isMobile ? 1.5 : (isTablet ? 2.0 : 2.5);

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
            const startY = 1;
            const endY = -1;
            const progress = activeStep / 4; // 4 is max step index (5 steps total but assuming logic here)
            const targetY = startY + (progress * (endY - startY));

            groupRef.current.position.y = THREE.MathUtils.damp(
                groupRef.current.position.y,
                targetY,
                2,
                delta
            );

            // Smoothly interpolate rotation
            const baseRotationY = 0; // Model likely facing front by default

            groupRef.current.rotation.y = THREE.MathUtils.damp(
                groupRef.current.rotation.y,
                baseRotationY + (activeStep % 2 === 0 ? -0.5 : 0.5),
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
                    position={[0, 0.2, 0]}
                    rotation={[0, 0, 0]}
                >
                    <primitive object={clone} rotation={[0, -2, 0]} />
                </group>
            </Float>
        </>
    );
};

useGLTF.preload("/models/robot.glb");
