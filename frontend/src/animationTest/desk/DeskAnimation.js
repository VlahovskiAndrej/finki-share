import {Canvas} from "@react-three/fiber";
import {ContactShadows, Environment, OrbitControls} from "@react-three/drei";
import Desk from "./Desk";

const DeskAnimation = () => {

    return (
        <Canvas style={{height: "100vh"}}>
            <OrbitControls enableZoom={false}/>
            <Desk/>
            <Environment preset='sunset'/>
            <ContactShadows position={[0, -0.5, 0]} opacity={0.8} scale={40} blur={1} far={10} resolution={256}
                            color="#000000"/>
        </Canvas>
    );
}

export default DeskAnimation;