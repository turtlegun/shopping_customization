import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import Shirt from "../../public/Shirt";
import style from "./canvas3.module.css";
import Upload from "./upload";
import Material_input from "./material";
import shirt_2d from '../2d_t-shirt.png';
import { useImage } from "../App";
import Tshirt_2d from "../tshirt_2d";

export const Context = React.createContext();
export const Context1 = React.createContext();
export const Context2 = React.createContext();
export const Context3 = React.createContext();
export const Context4 = React.createContext();
export const Context5 = React.createContext();
export const Context6 = React.createContext();
export const Context7 = React.createContext();
export const Context8 = React.createContext();

export const Context9=React.createContext();


function Canvas3(props) {
  const [showdisplay, setShowdisplay] = useState(false);
  const canvasRef = useRef();
  const canvas2Ref = useRef();
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(shirt_2d);
  const [decal_selected, setDecal_selected] = useState(false);
  const [decalPosition, setDecalPosition] = useState([0, 0.04, 0.15]);
  const [text_selected, setText_selected] = useState(false);
  const [color_text, setColor_text] = useState("white");
  const [text, setText] = useState("hello");
  const [color, setColor] = useState("white");
  const [text_pos, setText_pos] = useState([0, 0.04, 0.15]);
  const [dlt, setDlt] = useState(false);
  const [material, setMaterial] = useState("cotton");
  const [image5, setImage5] = useState(null);

  const handleCanvasMouseMove = (event) => {
    if (!decal_selected || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const updatedX = (offsetX / rect.width) * 2 - 1;


   


    const updatedY = -(offsetY / rect.height) * 2.12 + 0.50;



     console.log(`updatedX`,updatedX)
    console.log(`updatedy`,updatedY)
   /* setDecalPosition([-0.03949999999999996, -0.1005912, decalPosition[2]]); */
  };

  const handleCanvasMouseUp = () => {
    setDecal_selected(false);
  };

  const handleMouseDown3 = () => {
    setText_selected(false);
  };

  const handleMouseMove = (event) => {
    if (!text_selected || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const updatedX = (offsetX / rect.width) * 2 - 1;
    const updatedY = -(offsetY / rect.height) * 2.12 + 0.50;
    setText_pos([updatedX, updatedY, text_pos[2]]);
  };

  return (
    <>
      <Context.Provider value={[image, setImage]}>
        <Context1.Provider value={[text, setText]}>
          <Context2.Provider value={[decal_selected, setDecal_selected]}>
            <Context3.Provider value={[text_selected, setText_selected]}>
              <Context4.Provider value={[color_text, setColor_text]}>
                <Context5.Provider value={[material, setMaterial]}>
                  <Context6.Provider value={[image2, setImage2]}>
                    <Context7.Provider value={[image3, setImage3]}>
                      <Context8.Provider value={[image5, setImage5]}>
                        <Context9.Provider value={[decalPosition,setDecalPosition]}>
                        {showdisplay && (
                          <div className={style.app}>
                            <div className={style.canvas_style} style={{ width: "50vw", height: "50vh" }}>
                              <Canvas
                               size={[`2000px`,`3000px`]}
                              className={style.canvas}
                                width={500}
                                height={1000}
                                ref={canvasRef}
                                onMouseMove={decal_selected ? handleCanvasMouseMove : text_selected ? handleMouseMove : null}
                                onMouseUp={decal_selected ? handleCanvasMouseUp : text_selected ? handleMouseDown3 : null}
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
                                    image={image5}
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
                              <div className={style.customization}>
                                <div></div>
                                <div className={style.color_container}>
                                  <h2>shirt color</h2>
                                  <input type="button" className={style.shirt} onClick={(e) => setColor("yellow")} />
                                  <input type="button" id="mesh" name="vest" className={style.shirt1} onClick={(e) => setColor("red")} />
                                  <input type="button" id="mesh" name="vest" className={style.shirt2} onClick={(e) => setColor("blue")} />
                                  <input type="button" id="mesh" name="vest" className={style.shirt3} onClick={(e) => setColor("green")} />
                                  <input type="button" id="mesh" name="vest" className={style.shirt4} onClick={(e) => setColor("purple")} />
                                  <br />
                                  <input type="button" id="mesh" name="vest" className={style.shirt5} onClick={(e) => setColor("black")} />
                                  <input type="button" id="mesh" name="vest" className={style.shirt6} onClick={(e) => setColor("grey")} />
                                  <input type="button" id="mesh" name="vest" className={style.shirt7} onClick={(e) => setColor("white")} />
                                </div>
                                <button onClick={(e) => setDlt((prevState) => !prevState)}>Hide</button>
                                <Material_input />
                                <div className={style.upload}>
                                  <Upload delete={dlt} update={setDlt} />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <button onClick={() => setShowdisplay(prevState => !prevState)} className={style.button}>convert 3d</button>
                        {!showdisplay && (
                          <Tshirt_2d />
                        )}
                        </Context9.Provider>
                      </Context8.Provider>
                    </Context7.Provider>
                  </Context6.Provider>
                </Context5.Provider>
              </Context4.Provider>
            </Context3.Provider>
          </Context2.Provider>
        </Context1.Provider>
      </Context.Provider>
    </>
  );
}

export default Canvas3;
