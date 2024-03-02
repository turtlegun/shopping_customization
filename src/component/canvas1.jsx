
import { Canvas } from '@react-three/fiber';
import { OrbitControls,ContactShadows,Environment } from '@react-three/drei';

import React, { Suspense, useState } from 'react';
import Shirt_vest from '../../public/Shirt_and_vest-processed'

import styles from './canvas1.module.css'


function Canvas1() {

    const [isOpen, setIsOpen] = useState(false);
    // State to manage the selected value
    const [selectedValue, setSelectedValue] = useState('option1');
  
    // Toggle dropdown visibility
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    // Handle selection of an option
    const handleOptionSelect = (value) => {
      setSelectedValue(value);
      setIsOpen(false); // Close the dropdown after selection
    };




const[vest,setvest]=useState('#ffffff')
const[button,setbutton]=useState('#ffffff')
const[packet,setpacket]=useState('#ffffff')
const[shirtcolor,setshirtcolor]=useState('#ffffff')
const[tiecolor,settiecolor]=useState('#ffffff')
    return ( <>
   <div>
    <Canvas
      style={{ width: '100%', height: '70vh' }}
      eventSource={document.getElementById('root')} eventPrefix="client" camera={{ position: [0, 0, 8], fov: 35 }}
         >
            <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />
<OrbitControls/>

<ambientLight />
         <ambientLight intensity={0.3} />
         <spotLight intensity={0.3} position={[5,20,20]}/>
         <directionalLight />
         <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow />

<Suspense fallback={null}>


<Shirt_vest customcolor={{vest:vest,button:button,packet:packet,shirtcolor:shirtcolor,tiecolor:tiecolor}}selectedValue={selectedValue}/>

</Suspense>

</Canvas>
</div>

<h2>Color chooser</h2>
                <div className='colors'>
                    <div>
                      <h2> vest  color </h2>
                        <input type="button" id="mesh" name="vest" className={styles.shirt}
                              
                              
                              onClick={(e) => setvest('yellow')}/>
                               <input type="button" id="mesh" name="vest" className={styles.shirt1}
                              
                              
                              onClick={(e) => setvest('red')}/>
                               <input type="button" id="mesh" name="vest" className={styles.shirt2}
                              
                              
                              onClick={(e) => setvest('blue')}/>
                                  <input type="button" id="mesh" name="vest" className={styles.shirt3}
                              
                              
                              onClick={(e) => setvest('green')}/>
                        
                      </div>

                    <div>
                        <input type="color" id="button" name="button"
                                value= {button}
                                onChange={(e) => setbutton(e.target.value)}/>
                        <label >Button Color</label>
                    </div>
                    <div>
                        <input type="color" id="packet" name="packet"
                                value={packet} 
                                onChange={(e) => setpacket(e.target.value)}/>
                        <label>Pocket Color</label>

                        <input type="color" id="shirtcolor" name="shirtcolor"
                                value={shirtcolor} 
                                onChange={(e) => setshirtcolor(e.target.value)}/>
                        <label >Shirt Color</label>

                        <input type="color" id="shirtcolor" name="shirtcolor"
                                value={shirtcolor} 
                                onChange={(e) => settiecolor(e.target.value)}/>
                        <label >Tie Color</label>

                        
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Select an option
      </button>
    
      {isOpen && (
        <ul className={styles.dropdownUl}>
          <li onClick={() => handleOptionSelect("option1")}>cotton 1</li>
          <li onClick={() => handleOptionSelect("option2")}>cotton 2</li>
         
        </ul>
      )}
    
 

                    </div>
                </div>
    
    </> );
}

export default Canvas1;