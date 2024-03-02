import React from 'react';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import goku from './goku.jpg';
import { MeshBasicMaterial } from 'three';
import luffy from './luffy.webp'
import naruto from './naruto.png'
export default function Model(props) {
  const { nodes, materials } = useGLTF('/shirt.glb');

let selected_value=props.choice
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


  const decalMaterial = new MeshBasicMaterial({ color: 'red' });
  // Load the texture
  

  return (
    <group {...props} scale={[16, 16, 16]}>
      
      <mesh geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1}>
        <Decal
          position={[0, 0.04, 0.15]} // Adjust position as needed
          rotation={[0, 0, 0]} // No rotation
          scale={[0.15, 0.15, 0.15]} // Adjust scale as needed
          map={logoTexture} // Use the logoTexture as the decal texture
         
          
        />
      </mesh>
    </group>
  );
}

// Preload the GLTF model
useGLTF.preload('/shirt.glb');
