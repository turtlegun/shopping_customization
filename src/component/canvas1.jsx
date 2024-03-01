
import { Canvas } from '@react-three/fiber';
import { OrbitControls,ContactShadows,Environment } from '@react-three/drei';

import React, { Suspense, useState } from 'react';
import Shirt_vest from '../../public/Shirt_and_vest-processed'




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
      style={{ width: '95%', height: '80vh' }}
      eventSource={document.getElementById('root')} eventPrefix="client" camera={{ position: [0, 0, 8], fov: 35 }}
         >
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
                        <input type="color" id="mesh" name="vest"
                              value={vest} 
                              onChange={(e) => setvest(e.target.value)}/>
                        <label >Vest Color </label>
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
        <ul className="dropdown-menu">
          <li onClick={() => handleOptionSelect("option1")}>cotton 1</li>
          <li onClick={() => handleOptionSelect("option2")}>cotton 2</li>
         
        </ul>
      )}
    
 

                    </div>
                </div>
    
    </> );
}

export default Canvas1;