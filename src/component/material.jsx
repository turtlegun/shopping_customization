
import { useContext, useState } from 'react';
import style from './material.module.css'
import { Context5 } from './canvas3';


function Material_input() {


const [toogle,setToogle]=useState(false)

const [material,setMaterial]=useContext(Context5)

const material1=()=>{


    setToogle((prevState) => !prevState);


}


const cotton=()=>{

setMaterial("cotton")

}

const polyster=()=>{

    setMaterial("polyster")
}

    return ( <>
    
<div className={style.material}>

    <b onClick={material1}>Material</b> &nbsp;&nbsp;
    
    {toogle&&(
<div className={style.material_list}>

<ul>
<li onClick={cotton}>
    cotton
</li>
<li onClick={polyster}>
polyster

</li>
</ul>

</div>

    ) }
    
    <b>/</b>&nbsp;&nbsp;
    <b>Sleves</b>&nbsp;&nbsp;
    <b>/</b>&nbsp;&nbsp;
    <b>Neck</b>&nbsp;&nbsp;
    



</div>

    </> );
}

export default Material_input;