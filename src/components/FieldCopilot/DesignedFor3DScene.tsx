import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

export const DesignedFor3DScene = () => {
    const { scene } = useGLTF("/models/robot.glb");
    const clone = useMemo(() => scene.clone(), [scene]);
    const groupRef = useRef<THREE.Group>(null);
    const { size } = useThree();

    // Responsive settings
    const isMobile = size.width < 768;
    const scale = isMobile ? 2.5 : 3.8;

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Slow continuous rotation
            groupRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <>
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1} />

            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
                <group
                    ref={groupRef}
                    dispose={null}
                    scale={[scale, scale, scale]}
                    position={[0, -0.5, 0]}
                    rotation={[0, 0, 0]}
                >
                    <primitive object={clone} rotation={[0, 0, 0]} />
                </group>
            </Float>
        </>
    );
};

useGLTF.preload("/models/robot.glb");
