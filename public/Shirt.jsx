import React, { useState } from 'react';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import goku from './goku.jpg';
import { MeshBasicMaterial, TextureLoader } from 'three';
import luffy from './luffy.webp'
import naruto from './naruto.png'


import { useControls } from "leva";

export default function Model(props) {
  const { nodes, materials } = useGLTF('/shirt.glb');
  const [pos, setPos] = useState([0, 1.8, 1]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale, setScale] = useState([1.5, 1.5, 1.5]);
  function degToRad(degrees) {
    return degrees * Math.PI / 180;
  }

  useControls({
    
    scale: {
      min: 0.1,
      max: 2,
      value: 1,
      step: 0.01,
      onChange: (value) => {
        setScale(() => [value, value, 1.5]);
      },
    },
  });






let decal




if(props.position){
decal=props.position


}
else{

   decal=[0, 0.04, 0.15]

}
let selectedValue = props.choice;

let logoTexture = null;

if (props.image) {
  // Use the uploaded image as the texture
  logoTexture = new TextureLoader().load(props.image);
} else {
  // Use predefined textures based on selected value
  if (selectedValue === 'goku') {
    logoTexture = useTexture(goku)
  } else if (selectedValue === 'naruto') {
    logoTexture =  logoTexture = useTexture(naruto)

  } else {
    logoTexture =  useTexture(luffy)
  }
}




/*
let logoTexture

if(selected_value==='goku'){

   logoTexture = useTexture(goku)

}
else if(selected_value==='naruto'){

  logoTexture = useTexture(naruto)

}
else{
  logoTexture = useTexture(luffy)

}

*/
  const decalMaterial = new MeshBasicMaterial({ color: 'red' });
  // Load the texture
  

  return (
    <group {...props} scale={[10, 10, 10]}>
      
      <mesh geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-color={props.color}>
        <Decal
          position={decal} // Adjust position as needed
          rotation={[0,0,0]} // No rotation
          scale={scale} // Adjust scale as needed
          map={logoTexture} // Use the logoTexture as the decal texture
         
          
        />
      </mesh>
    </group>
  );
}

// Preload the GLTF model
useGLTF.preload('/shirt.glb');
