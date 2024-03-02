import { Canvas } from "@react-three/fiber";

import styles from './canvas1.module.css'
import { Suspense, useState } from "react";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Shirt from '../../public/Shirt'
function Canvas2() {


  
 
  const [selectedValue, setSelectedValue] = useState('goku');

  
 

  // Handle selection of an option
  const handleOptionSelect = (value) => {
    setSelectedValue('goku');
    
  };
  const handleOptionSelect1= (value) => {
    setSelectedValue('vegeta');
    
  };
  const handleOptionSelect2= (value) => {
    setSelectedValue('naruto');
    
  };

  
    return ( <>
    
    <Canvas  camera={{ position: [-10, 0, -10], fov: 55 }}
    style={{ width: '100%', height: '70vh',backgroundColor:'wheat' }}
    >
    <pointLight position={[10, 10, 10]} intensity={1.5} />
    <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 0, 0]}>
<Shirt choice={selectedValue}/>
</group>
      

      </Suspense>


      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls />
    </Canvas>
    

    <button className="dropdown-toggle" onClick={handleOptionSelect }>
        Goku
      </button>
      <button className="dropdown-toggle" onClick={handleOptionSelect1 }>
      Luffy
      </button>
      <button className="dropdown-toggle" onClick={handleOptionSelect2 }>
      naruto
      </button>


    
    </> );
}

export default Canvas2;