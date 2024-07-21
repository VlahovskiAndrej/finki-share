import {Canvas} from "@react-three/fiber";
import {ContactShadows, Environment, OrbitControls} from "@react-three/drei";
import {Suspense} from "react";
import Computer from "./Computer"

const ComputerAnimation = () => {
    return (
        <Canvas style={{height: "100vh"}}>
            <ambientLight intensity={2}/>
            <OrbitControls enableZoom={false}/>
            <Suspense fallback={null}>
                <Computer/>
            </Suspense>
            <Environment preset='sunset'/>
            <ContactShadows position={[0, -0.5, 0]} opacity={0.8} scale={40} blur={1} far={10} resolution={256} color="#000000"/>
        </Canvas>
    );
}

export default ComputerAnimation;