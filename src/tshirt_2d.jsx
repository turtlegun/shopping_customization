import React, { useState, useEffect, useRef, useContext } from "react";
import tshirt_2d from './2d_t-shirt.png';
import Canvas3, { Context8, Context9 } from "./component/canvas3";
import vegeta from './vegeta.jpg'; // Import the image

function Tshirt_2d() {
  const canvasRef = useRef(null);
  const [image5, setImage5] = useState(vegeta);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [second_position, setSecond_position] = useState({ x: 100, y: 100 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [btn_true, setBtn_true] = useState(false);
  const [image, setImage] = useContext(Context8);
  const [decalPosition, setDecalPosition] = useContext(Context9);
  const [image2, setImage2] = useState(null);
  const [count, setCount] = useState(0);
  const [first_image_selected, setFirst_image_selected] = useState(false);
  const [second_image_selected, setSecond_image_selected] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.onload = () => {
      console.log("Base T-shirt image loaded successfully:");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw the base T-shirt image

      if (image5) {
        console.log("Uploaded image loaded successfully:");
        console.log("Position:", position);
        const scale = 0.2;
        const width = image5.width * scale;
        const height = image5.height * scale;
        ctx.drawImage(image5, position.x, position.y, width, height);
        console.log(width);
        console.log(height);
      }

      if (image2) {
        console.log("Second uploaded image loaded successfully:");
        console.log("Position:", second_position);
        const scale = 0.2;
        const width = image2.width * scale;
        const height = image2.height * scale;
        ctx.drawImage(image2, second_position.x, second_position.y, width, height);
        console.log(width);
        console.log(height);
      }
    };
    img.src = tshirt_2d;
  }, [image5, position, image2, second_position]);

  const handleimage = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    console.log("first image ");
  };
  const handleimage1 = (event) => {
    const file = event.target.files[0];
    setImage2(URL.createObjectURL(file));
    console.log("second image ");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setImage5(img);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  
  };


  
  const handleImageUpload1 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setImage2(img);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  
  };


  const handleMouseDown = (e) => {
   
    if (first_image_selected) {
      setDragging(true);
      const rect = canvasRef.current.getBoundingClientRect();
      setOffset({
        x: e.clientX - react.left,
        y: e.clientY - react.top
      });
    }
   
   
   
  if(second_image_selected){
    setDragging(true);
    const rect = canvasRef.current.getBoundingClientRect();
    setSecond_position({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
}

  const handleMouseMove = (e) => {
    if (!dragging) return;

  

    if(first_image_selected){

      const rect = canvasRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
  
      let updatedX = +(offsetX / rect.width) - .6;
      updatedX = Math.min(0.12005912, Math.max(-0.2029292, updatedX));
  
      let updatedY = -(offsetY / rect.height) + 0.5;
      updatedY = Math.min(0.12005912, Math.max(-0.52005912, updatedY));
  
      setDecalPosition([updatedX, updatedY, decalPosition[2]]);
      setPosition({
        x: offsetX,
        y: offsetY
      });



    }
    
    
    if(second_image_selected){
    
  const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    setSecond_position({
      x: offsetX,
      y: offsetY
    });
  };

}

  const handleMouseUp = () => {
    setDragging(false);
  };



const deletebtn=()=>{

if(first_image_selected){


setImage5(null)

}
if(second_image_selected){


  setImage2(null)
}


}


  return (
    <>
      <canvas
        ref={canvasRef}
        width={310}
        height={350}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseUp}
        style={{ cursor: dragging ? 'grabbing' : 'grab', position: "relative", left: '200px', top: "50px" }}
      />
      <input type="file" onChange={(e) => {
        handleImageUpload(e);
        handleimage(e);
        setCount(0)
      }} accept="image/*" style={{ position: 'relative', right: '10px', top: "100px" }} />

      <input type="file" accept="image/*" onChange={(e) => {
        handleImageUpload1(e);
        handleimage1(e);
        setCount(1)
      }} />
      <button onClick={()=>{setFirst_image_selected(true),setSecond_image_selected(false)}}>move first image </button>
      <button onClick={()=>{setSecond_image_selected(true),setFirst_image_selected(false)}}>move second image </button>

      <button onClick={deletebtn}>Delete</button>
    </>
  );
}

export default Tshirt_2d;