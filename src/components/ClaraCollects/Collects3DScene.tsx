import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

export const Collects3DScene = () => {
    // Using calculator.glb as requested
    const { scene } = useGLTF("/models/calculator.glb");
    const clone = useMemo(() => scene.clone(), [scene]);
    const groupRef = useRef<THREE.Group>(null);
    const { size } = useThree();

    // Responsive settings
    const isMobile = size.width < 768;
    const scale = isMobile ? 2.0 : 3.2;

    // Spin interaction
    const targetRotation = useRef(-Math.PI / 2); // Start at base rotation

    const spin = () => {
        // Add 3 full rotations (3 * 360 degrees)
        targetRotation.current += Math.PI * 2 * 3;
    };

    // Auto-spin on load
    useEffect(() => {
        // Short delay to ensure model is visible before spinning
        const timer = setTimeout(() => {
            spin();
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = THREE.MathUtils.damp(
                groupRef.current.rotation.y,
                targetRotation.current,
                1.5, // Damping factor
                delta
            );
        }
    });

    // Cursor style handling
    const [hovered, setHover] = useState(false);
    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }, [hovered]);

    return (
        <>
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1} />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <group
                    ref={groupRef}
                    dispose={null}
                    scale={[scale, scale, scale]}
                    position={[0, -0.5, 0]}
                    onClick={spin}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                // rotation handled by useFrame
                >
                    <primitive object={clone} rotation={[0, -0.5, -Math.PI / 2]} />
                </group>
            </Float>
        </>
    );
};

useGLTF.preload("/models/calculator.glb");
