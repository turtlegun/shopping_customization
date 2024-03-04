import { Canvas } from "@react-three/fiber";

import styles from './canvas1.module.css'
import { Suspense, useRef, useState } from "react";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Shirt from '../../public/Shirt'
import Customization from "./customization";


function Canvas2(props) {

  const canvasRef = useRef();
  const [decalPosition, setDecalPosition] = useState([0, 0.04, 0.15]);


 
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [image,setImage]=useState(null)


  const handleimage=(event)=>{
  
  const file=event.target.files[0]
  
  setImage(URL.createObjectURL(file))
  
  }
  


  const [dragging, setDragging] = useState(false);
 
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



  const handleMouseDown = (event) => {
   
   /*
    setDragging(true);
    */
    const { clientX, clientY } = event;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((clientY - rect.top) / rect.height) * 2 + 1;
    setDecalPosition([x, y, decalPosition[2]]);
  };

  const handleMouseUp = () => {
   /*
    setDragging(false);
 */
  };


/*

  const handleMouseMove = (event) => {
    if (dragging && canvasRef.current) {
      const { clientX, clientY } = event;
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((clientY - rect.top) / rect.height) * 2 + 1;
      setDecalPosition([x, y, decalPosition[2]]); // Update only x and y positions
    }
  };
*/
  
    return ( <>
    
    <Canvas  camera={{ position: [-10, 0, -10], fov: 55 }}
    style={{ width: '100%', height: '70vh',backgroundColor:'wheat' }}
    
   // onMouseMove={handleMouseMove}
    onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        ref={canvasRef}
    >
    <pointLight position={[10, 10, 10]} intensity={1.5} />
    <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 0, 0]}>
<Shirt choice={selectedValue} image={image} position={decalPosition} />
</group>
      

      </Suspense>


      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls  />
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

      <div /*</>className={styles.customization}*/>
<input type='file' onChange={handleimage}/>
</div>
    
    </> );
}

export default Canvas2;