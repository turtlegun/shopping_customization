import { Canvas } from "@react-three/fiber";

import React, { Suspense, useRef, useState } from "react";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

import Shirt from "../../public/Shirt";

import background from '../../public/background.jpg'
import T_shirt_demo from '../../public/T_shirt_Demo'

import style from "./canvas3.module.css";
import Upload from "./upload";
import Material_input from "./material";


export const Context=React.createContext();
export const Context1=React.createContext();
export const Context2=React.createContext();
export const Context3=React.createContext();

function Canvas3() {
  const canvasRef = useRef();
  const [image,setImage]=useState(null)
  const [decal_selected,setDecal_selected]=useState(false)
  const [decalPosition, setDecalPosition] = useState([0, 0.04, 0.15]);
  const[text_selected,setText_selected]=useState(false)
  const [color, setColor] = useState("white");
const [text,setText]=useState("")


const handleCanvasMouseDown = (event) => {
  if (!canvasRef.current || !decal_selected || !text_selected) {console.log("not working")
   return;} // Return if the decal is not selected
  const rect = event.target.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  mouse.x = (offsetX / rect.width) * 2 - 1;
  mouse.y = -(offsetY / rect.height) * 2 + 1;
  setDecalPosition([mouse.x, mouse.y, decalPosition[2]]);
};


const handleCanvasMouseMove = (event) => {
  if ((!decal_selected || !text_selected) || !canvasRef.current ) return;
  const rect = canvasRef.current.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const updatedX = (offsetX / rect.width) * 2 - 1;
  const updatedY = -(offsetY / rect.height) * 2 + 0.5;
  setDecalPosition([updatedX, updatedY, decalPosition[2]]);
};

const handleCanvasMouseUp = () => {
  setDecal_selected(false);
};

console.log(text)
  return (
    <div className={style.app}>
      <Context.Provider value={[image,setImage ]}>
      <Context1.Provider value={[text,setText]}>
      <Context2.Provider value={[decal_selected,setDecal_selected]}>
      <Context3.Provider value={[text_selected,setText_selected]}>
      <Canvas ref={canvasRef} onMouseMove={handleCanvasMouseMove}
      onMouseDown={handleCanvasMouseDown} 
      
      onMouseUp={handleCanvasMouseUp}
      >
        
      
        <spotLight
          intensity={1}
          angle={0.1}
          penumbra={1}
          position={[1, 1, 1]}
          castShadow
        />
        <ContactShadows
          resolution={512}
          position={[0, 4, 5]}
          opacity={10}
          scale={10}
          blur={2}
          far={0.8}
        />
       <Environment preset="studio" background blur={0.5} />
        <Suspense fallback={null}>
        <Shirt color={color} position={decalPosition} image={image} text={text}/>
        </Suspense>
        
        <OrbitControls
          enableDamping={true} // Enable damping for smooth movement
          dampingFactor={0.1}
        />
      </Canvas>

      <div className={style.customization}>
        <div /*</>className={styles.customization}*/></div>
        <div className={style.color_container}>
          <h2> shirt color </h2>
          <input
            type="button"
            id="mesh"
            name="vest"
            className={style.shirt}
            onClick={(e) => setColor("yellow")}
          />
          <input
            type="button"
            id="mesh"
            name="vest"
            className={style.shirt1}
            onClick={(e) => setColor("red")}
          />
          <input
            type="button"
            id="mesh"
            name="vest"
            className={style.shirt2}
            onClick={(e) => setColor("blue")}
          />
          <input
            type="button"
            id="mesh"
            name="vest"
            className={style.shirt3}
            onClick={(e) => setColor("green")}
          />
          <input
            type="button"
            id="mesh"
            name="vest"
            className={style.shirt4}
            onClick={(e) => setColor("purple")}
          />

          <br></br>
          <input
            type="button"
            id="mesh"
            name="vest"
            className={style.shirt5}
            onClick={(e) => setColor("black")}
          />
          <input
            type="button"
            id="mesh"
            name="vest"
            className={style.shirt6}
            onClick={(e) => setColor("grey")}
          />
          <input
            type="button"
            id="mesh"
            name="vest"
            className={style.shirt7}
            onClick={(e) => setColor("white")}
          />
        </div>

<Material_input/>
        
        <div className={style.upload}>
       <Upload/>
       </div>
      </div>
      </Context3.Provider>
      </Context2.Provider>
      </Context1.Provider>
      </Context.Provider>
      
    </div>
  );
}

export default Canvas3;
