import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './component/home';

import Canvas1 from './component/canvas1';
import Canvas2 from './component/canvas2';
import Canvas3 from './component/canvas3';


import CurvedText from './curved';
import CanvasDownload from './curvedcanvas';
import Canvas_normal from './normal_canvas';
import TwoCanvasText from './canvas4';
function App() {
  
  

  return (
    <>
  <Router>
    <Routes>
      
          <Route exact path="/" element={<Home/>} />
        
          <Route exact path="/canvas" element={<Canvas1/>} />
          <Route exact path="/canvas2" element={<Canvas2/>} />
          <Route exact path="/canvas3" element={<Canvas3/>} />
          <Route exact path="/curved" element={<CurvedText/>} />
          <Route exact path="/download" element={<CanvasDownload/>} />
          <Route exact path="/normal" element={<Canvas_normal/>} />
          <Route exact path="/canvas4" element={<TwoCanvasText/>} />


          </Routes>   
    </Router>
     
    </>
  )
}

export default App
