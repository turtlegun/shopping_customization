
import { useState } from 'react';
import style from './material.module.css'


function Material_input() {


const [toogle,setToogle]=useState(false)

const material=()=>{


    setToogle((prevState) => !prevState);


}

    return ( <>
    
<div className={style.material}>

    <b onClick={material}>Material</b> &nbsp;&nbsp;
    
    {toogle&&(
<div className={style.material_list}>

<ul>
<li>
    cotton
</li>
<li>
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