import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {ContactShadows, Environment, OrbitControls} from "@react-three/drei";
import Earth from "./Earth"

const EarthAnimation = () => {
    return (
        <Canvas style={{height: "100vh"}}>
            <ambientLight intensity={2}/>
            <OrbitControls/>
            <Suspense fallback={null}>
                <Earth/>
            </Suspense>
            <Environment preset='sunset'/>
            <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={50} blur={1} far={10} resolution={256} color="#000000"/>
        </Canvas>
    );
}

export default EarthAnimation;