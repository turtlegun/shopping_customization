import { Canvas } from "@react-three/fiber";
import New from "./new";
import { Suspense } from "react";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

function Canvas2() {
    return ( <>
    
    <Canvas  camera={{ position: [-10, 0, -10], fov: 55 }}
    style={{ width: '100%', height: '100vh',backgroundColor:'wheat' }}
    >
    <pointLight position={[10, 10, 10]} intensity={1.5} />
    <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 0, 0]}>
<New/>
</group>
        <Environment preset="city" />
      </Suspense>


      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls />
    </Canvas>
    
    
    </> );
}

export default Canvas2;