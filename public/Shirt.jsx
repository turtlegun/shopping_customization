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
  const [image_size, setScale] = useState([0.10, 0.10, 0.10]);
  const [isDragging, setIsDragging] = useState(false);
  const canvasRef = useRef(null);
  const decalRef = useRef(null);
  const textRef = useRef(null); // Ref for the Text component
  const raycaster = new Raycaster();
  
  const [decal_selected,setDecal_selected] = useContext(Context2);
  const[text_selected,setText_selected]= useContext(Context3);
  const[se_sel,setSe]=useState(false)

  const [tex_sel,setTex]=useState(false)

  const [font_size, setFont_size] = useState(0.05);
let text=props.text
console.log(text)



let material_inp=props.material
let textureprops 
if(material_inp=="cotton"){
   textureprops = useTexture({
    map: cotton,
  });}

else{

  textureprops = useTexture({
    map: polyster,})

}


  useControls({
    image_size: {
      min: 0.1,
      max: 2,
      value: 0.10,
      step: 0.01,
      onChange: (value) => {
        setScale(() => [value, value, 1.5]);
      },
    },
  });
  


  useControls({
    font_size: {
      value: 0.05,
      min: 0.01,
      max: 0.5,
      step: 0.01,
      onChange: (value) => {
        setFont_size(value);
      },
    },
  });

  let decal = props.position ? props.position : [0, 0.04, 0.10];
  let selectedValue = props.choice;
  
  
  let text_pos = props.text_position ? props.text_position : [0, 0.05, 0.11];
  console.log(text_pos)

  
  let logoTexture = props.image ? useTexture(props.image) : useTexture(goku)
  
  const handleDecalMouseDown = (event) => {
    setSe(prevState => !prevState)
    setDecal_selected(se_sel);
    event.stopPropagation(); 
    console.log("decal selected")
  };

  const text_select=(event)=>{
    setTex(prevState => !prevState)
    setText_selected(tex_sel);
    event.stopPropagation(); 
    console.log("text selected")


  }
  

let font ="italic"

let color="red"

  
  return (
    
    <group {...props} scale={[5, 5, 5]} position={[0, 2, 0]} ref={canvasRef}>
      <mesh geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-color={props.color}>
        <Decal
          position={decal}
          rotation={[0, 0, 0]}
          scale={image_size}
          map={logoTexture}
          onClick={handleDecalMouseDown}
        
          ref={decalRef}
        />
        <Text
          position={text_pos} 
          fontSize={font_size} 
          ref={textRef}
          color={props.color_text}
          onClick={text_select}
          style={{ fontFamily:font ,fontStyle: 'italic'}}
          font={font}
        >
         {text}
        </Text>
        <meshStandardMaterial {...textureprops} />
      </mesh>
    </group>
   
  );
}

useGLTF.preload('/shirt.glb');
