
import { useEffect, useState } from 'react';
import style from './customization.module.css'
import Canvas3 from './canvas3';
import Canvas2 from './canvas2';


function Customization() {

    const [image,setImage]=useState(null)


const handleimage=(event)=>{

const file=event.target.files[0]

setImage(URL.createObjectURL(file))

}


    return ( <>
   <div className={style.customization}>
<input type='file' onChange={handleimage}/>

{image && <Canvas2 image={image} />}
   </div>
    </> );
}

export default Customization;