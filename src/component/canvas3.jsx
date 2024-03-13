import { Canvas } from "@react-three/fiber";

import React, { Suspense, useRef, useState } from "react";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";


import Demo from '../../public/Demo3'
import Shirt from "../../public/Shirt";

import background from '../../public/background.jpg'
import T_shirt_demo from '../../public/T_shirt_Demo'

import style from "./canvas3.module.css";
import Upload from "./upload";
import Material_input from "./material";
import { PointLight, SpotLight } from "three";




export const Context=React.createContext();
export const Context1=React.createContext();
export const Context2=React.createContext();
export const Context3=React.createContext();
export const Context4=React.createContext();
export const Context5=React.createContext();


function Canvas3() {
  const canvasRef = useRef();
  const [image,setImage]=useState(null)
  const [decal_selected,setDecal_selected]=useState(false)
  const [decalPosition, setDecalPosition] = useState([0, 0.04, 0.15]);
  const[text_selected,setText_selected]=useState(false)
  const [color_text, setColor_text] = useState("white");
const [text,setText]=useState("hello")
const[color,setColor]=useState("white")
const[text_pos,setText_pos]=useState([0, 0.04, 0.15]);

const[material,setMaterial]=useState("cotton")

const mouse = { x: 0, y: 0 };

/*
const handleCanvasMouseDown = (event) => {
  if (!canvasRef.current || !decal_selected ) {console.log("not working")
   return;} // Return if the decal is not selected
  else{
  const rect = event.target.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  mouse.x = (offsetX / rect.width) * 2 - 1;
  mouse.y = -(offsetY / rect.height) * 2 + 1;
  setDecalPosition([mouse.x, mouse.y, decalPosition[2]]);
  console.log("decal selected mouse")
}

};
*/

const handleCanvasMouseMove = (event) => {
  if (!decal_selected ||  !canvasRef.current ) return;
  else{
  const rect = canvasRef.current.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const updatedX = (offsetX / rect.width) * 2 - 1;
  const updatedY = -(offsetY / rect.height) * 2.12 + 0.50;
  setDecalPosition([updatedX, updatedY, decalPosition[2]]);
  console.log(decal_selected)
}

};

const handleCanvasMouseUp = () => {
  setDecal_selected(false);
};


const handleMouseDown3=()=>{
  setText_selected(false);
  
  }
  const handleMouseMove = (event) => {
    if (!text_selected ||  !canvasRef.current ) return;
    else{
    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const updatedX = (offsetX / rect.width) * 2 - 1;
    const updatedY = -(offsetY / rect.height) * 2.12 + 0.50;
    setText_pos([updatedX, updatedY, text_pos[2]]);
    console.log(text_selected)
  }
  
  };
  
/*
  const handleMouseDown = (event) => {
    if (!canvasRef.current || !text_selected ) {console.log("not working")
     return;} // Return if the decal is not selected
    else{
    const rect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    mouse.x = (offsetX / rect.width) * 2 - 1;
    mouse.y = -(offsetY / rect.height) * 2 + 1;
    setText_pos([mouse.x, mouse.y, text_pos[2]]);
    console.log("mouse down")
  }
  
  };
  */
  return (
    <div className={style.app}>
      <Context.Provider value={[image,setImage ]}>
      <Context1.Provider value={[text,setText]}>
      <Context2.Provider value={[decal_selected,setDecal_selected]}>
      <Context3.Provider value={[text_selected,setText_selected]}>
      <Context4.Provider value={[color_text,setColor_text]}>
      <Context5.Provider value={[material,setMaterial]}>
        
      <Canvas ref={canvasRef} onMouseMove={decal_selected ? handleCanvasMouseMove:text_selected ? handleMouseMove :null}

   /*    onMouseDown={
       decal_selected ? handleCanvasMouseDown :text_selected ? handleMouseDown : null 
      }
      */ 
      onMouseUp={decal_selected ? handleCanvasMouseUp: text_selected ?  handleMouseDown3 :null}
      >
        
      
     
        <ContactShadows
          resolution={512}
          position={[0, 4, 5]}
          opacity={10}
          scale={10}
          blur={2}
          far={0.8}
        />
       <Environment preset="city"/>
        <Suspense fallback={null}>
        <Shirt color={color} position={decalPosition} image={image} text={text} text_position={text_pos} color_text={color_text} material={material}/>
        </Suspense>
        

        <pointLight position={[15, 15, 15]} />
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
      </Context5.Provider>
      </Context4.Provider>
      </Context3.Provider>
      </Context2.Provider>
      </Context1.Provider>
      </Context.Provider>
      
    </div>
  );
}

export default Canvas3;
