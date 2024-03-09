import { useContext, useRef, useState } from 'react';
import style from './canvas3.module.css'
import logo_input from "../assets/Upload-icon.svg";
import   {Context}  from './canvas3';
import   {Context1}  from './canvas3';

function Upload() {
  const inputRef=useRef()
  const [image, setImage] = useContext(Context); // Destructure image from Context
  const [text, setText] = useContext(Context1); 
    
    const[input_text,setInput_text]=useState()
    const[position,setPosition]=useState({ x: 0, y: 0 })
    const handleimage = (event) => {
        const file = event.target.files[0];
      
        setImage(URL.createObjectURL(file));
      };
    const text_input=(e)=>{

setText(e.target.value)


    }
    const handlemouse=(event)=>{
      setPosition({ x: event.clientX, y: event.clientY });


    }

   
    return ( 


     
      
        <div className={style.input_file}>
        <input type='file' onChange={handleimage} style={{ display: 'none' }} ref={inputRef}/>
        <img src={logo_input} alt="Logo" onClick={() => inputRef.current.click()} className={style.upload_svg} />
        <h2>Upload Image </h2>
        <h2>Write text</h2>

        <input type='text' onChange={text_input}/>
      
      </div>
     
     );
}

export default Upload;