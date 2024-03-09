import React, { useState, useRef, useContext } from 'react';
import { Decal, Html, useGLTF, useTexture } from '@react-three/drei';
import goku from './goku.jpg';
import { MeshBasicMaterial, TextureLoader, Raycaster, Vector2 } from 'three';
import luffy from './luffy.webp';
import naruto from './naruto.png';
import cotton from './cotton.jpg';
import polyster from './polyster.jpg';
import { useControls } from "leva";
import { Text } from '@react-three/drei'; // Import Text component
import { Context2, Context3 } from '../src/component/canvas3';



export default function Model(props) {

  const { nodes, materials } = useGLTF('/shirt.glb');
  const [pos, setPos] = useState([0, 1.8, 1]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale1, setScale] = useState([0.10, 0.10, 0.10]);
  const [isDragging, setIsDragging] = useState(false);
  const canvasRef = useRef(null);
  const decalRef = useRef(null);
  const textRef = useRef(null); // Ref for the Text component
  const raycaster = new Raycaster();
  
  const [decal_selected,setDecal_selected] = useContext(Context2);
  const[text_selected,setText_selected]= useContext(Context3);
let text=props.text
console.log(text)


  let textureprops = useTexture({
    map: cotton,
  });

  useControls({
    scale: {
      min: 0.1,
      max: 2,
      value: 0.10,
      step: 0.01,
      onChange: (value) => {
        setScale(() => [value, value, 1.5]);
      },
    },
  });

  let decal = props.position ? props.position : [0, 0.04, 0.10];
  let selectedValue = props.choice;


  
  let logoTexture = props.image ? useTexture(props.image) : useTexture(goku)
  
  const handleDecalMouseDown = (event) => {
    setDecal_selected((prevState) => !prevState);
    event.stopPropagation(); 
    console.log("decal selected")
  };

  const text_select=()=>{
    setText_selected(true);
    event.stopPropagation(); 
    console.log("text selected")


  }
  
  return (
    
    <group {...props} scale={[5, 5, 5]} position={[0, 2, 0]} ref={canvasRef}>
      <mesh geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-color={props.color}>
        <Decal
          position={decal}
          rotation={[0, 0, 0]}
          scale={scale1}
          map={logoTexture}
          onClick={handleDecalMouseDown}
        
          ref={decalRef}
        />
        <Text
          position={[0, 0.07, 0.05]} 
          fontSize={0.05} 
          ref={textRef}
          color="black"
         
        >
          <Html>
         <h2 style={{ fontFamily: "Ojuju, sans-serif"}} onClick={text_select}> {text } </h2>
         </Html>
        </Text>
        <meshStandardMaterial {...textureprops} />
      </mesh>
    </group>
   
  );
}

useGLTF.preload('/shirt.glb');
