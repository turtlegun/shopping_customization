import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import Shirt from "../../public/Shirt";
import style from "./canvas3.module.css";
import Upload from "./upload";
import Material_input from "./material";

export const Context = React.createContext();
export const Context1 = React.createContext();
export const Context2 = React.createContext();
export const Context3 = React.createContext();
export const Context4 = React.createContext();
export const Context5 = React.createContext();
export const Context6 = React.createContext();

function Canvas3() {
  const canvasRef = useRef();
  const canvas2Ref = useRef();
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [decal_selected, setDecal_selected] = useState(false);
  const [decalPosition, setDecalPosition] = useState([0, 0.04, 0.15]);
  const [text_selected, setText_selected] = useState(false);
  const [color_text, setColor_text] = useState("white");
  const [text, setText] = useState("hello");
  const [color, setColor] = useState("white");
  const [text_pos, setText_pos] = useState([0, 0.04, 0.15]);
  const [dlt, setDlt] = useState(false);
  const [material, setMaterial] = useState("cotton");

  useEffect(() => {
    const ctx2 = canvas2Ref.current.getContext("2d");
    ctx2.font = "20px Arial";
    drawText(ctx2, text, canvas2Ref.current.width / 2, canvas2Ref.current.height / 2);
  }, [text]);

  const drawText = (ctx, text, x, y) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillText(text, x, y);
  };

  const handleCanvasMouseMove = (event) => {
    if (!decal_selected || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const updatedX = (offsetX / rect.width) * 2 - 1;
    const updatedY = -(offsetY / rect.height) * 2.12 + 0.50;
    setDecalPosition([updatedX, updatedY, decalPosition[2]]);

    console.log("mouse move")
  };

  const handleCanvasMouseUp = () => {
    setDecal_selected(false);
  };

  

  const handleMouseDown3=()=>{
    setText_selected(false);
    
    }
    const handleMouseMove = (event) => {
      if (!text_selected ||  !canvasRef.current ) return;
      else{
      const rect = canvasRef.current.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      const updatedX = (offsetX / rect.width) * 2 - 1;
      const updatedY = -(offsetY / rect.height) * 2.12 + 0.50;
      setText_pos([updatedX, updatedY, text_pos[2]]);
      console.log(text_selected)
    }
    
    };





const check_move=()=>{

console.log("mouse down")


}


const check_move1=()=>{

console.log("mouse move")
const rect = canvasRef.current.getBoundingClientRect();
const offsetX = event.clientX - rect.left;
const offsetY = event.clientY - rect.top;
const updatedX = (offsetX / rect.width) * 2 - 1.69;
const updatedY = -(offsetY / rect.height) * 2.12 + 0.43;
setText_pos([updatedX, updatedY, text_pos[2]]);
console.log(text_selected)

}
const check_move2=()=>{

  console.log("mouse move")
  
  }
  

  return (
    <div className={style.app}>
      <Context.Provider value={[image, setImage]}>
        <Context1.Provider value={[text, setText]}>
          <Context2.Provider value={[decal_selected, setDecal_selected]}>
            <Context3.Provider value={[text_selected, setText_selected]}>
              <Context4.Provider value={[color_text, setColor_text]}>
                <Context5.Provider value={[material, setMaterial]}>
                  <Context6.Provider value={[image2, setImage2]}>
                    <Canvas
                      width={400}
                      height={200}
                      ref={canvasRef}
                      onMouseMove={decal_selected ? handleCanvasMouseMove:text_selected ? handleMouseMove :null}
                      onMouseUp={decal_selected ? handleCanvasMouseUp: text_selected ?  handleMouseDown3 :null}
                    >
                      <ContactShadows
                        resolution={512}
                        position={[0, 4, 5]}
                        opacity={10}
                        scale={10}
                        blur={2}
                        far={0.8}
                      />
                      <ambientLight />
                      <Suspense fallback={null}>
                        <Shirt
                          color={color}
                          position={decalPosition}
                          image={image}
                          text={text}
                          text_position={text_pos}
                          color_text={color_text}
                          material={material}
                          image2={image2}
                          delete={dlt}
                        />
                      </Suspense>
                      <pointLight position={[15, 15, 15]} />
                      <OrbitControls enableDamping={true} dampingFactor={0.1} />
                    </Canvas>
                    <canvas
                      id="canvas2"
                      style={{ backgroundColor: "red", position: "absolute", top: "0", right: "0" }}
                      width={500}
                      height={300}
                      ref={canvas2Ref}
                      onMouseDown={check_move}
                      onMouseMove={ check_move1 }
                      onMouseUp={ check_move2 }
                    ></canvas>
                    <div className={style.customization}>
                      <div></div>
                      <div className={style.color_container}>
                        <h2> shirt color </h2>
                        <input type="button" className={style.shirt} onClick={(e) => setColor("yellow")} />
                        <input type="button" id="mesh" name="vest" className={style.shirt1} onClick={(e) => setColor("red")} />
                        <input type="button" id="mesh" name="vest" className={style.shirt2} onClick={(e) => setColor("blue")} />
                        <input type="button" id="mesh" name="vest" className={style.shirt3} onClick={(e) => setColor("green")} />
                        <input type="button" id="mesh" name="vest" className={style.shirt4} onClick={(e) => setColor("purple")} />
                        <br></br>
                        <input type="button" id="mesh" name="vest" className={style.shirt5} onClick={(e) => setColor("black")} />
                        <input type="button" id="mesh" name="vest" className={style.shirt6} onClick={(e) => setColor("grey")} />
                        <input type="button" id="mesh" name="vest" className={style.shirt7} onClick={(e) => setColor("white")} />
                      </div>
                      <button onClick={(e) => setDlt((prevState) => !prevState)}>Hide</button>
                      <Material_input />
                      <div className={style.upload}>
                        
 {/*                  <Upload delete={dlt} update={setDlt} />
*/}
 
 
                      </div>
                    </div>
                  </Context6.Provider>
                </Context5.Provider>
              </Context4.Provider>
            </Context3.Provider>
          </Context2.Provider>
        </Context1.Provider>
      </Context.Provider>
    </div>
  );
}

export default Canvas3;
