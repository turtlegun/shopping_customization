import { Canvas } from '@react-three/fiber';
import Round from '../../public/Roundneck'
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import Vneck from '../../public/Vneck'
import { Color } from 'three';

import style from './canvas3.module.css'
import Customization from './customization';
function Canvas3(props) {
    return (
        
        <div className={style.app}>
        <Canvas dpr={[1, 2]}>
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />
          <ambientLight/>
          <Vneck image={props.image} />
        <OrbitControls/>
        </Canvas>
        <Customization/>
      </div>
        
    );
}

export default Canvas3;