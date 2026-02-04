import { Canvas } from "@react-three/fiber";
import { Home3DScene } from "@/components/Home3DScene";

interface DeferredHome3DSceneProps {
    scrollProgress: number;
}

const DeferredHome3DScene = ({ scrollProgress }: DeferredHome3DSceneProps) => {
    return (
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
            <Home3DScene scrollProgress={scrollProgress} />
        </Canvas>
    );
};

export default DeferredHome3DScene;
