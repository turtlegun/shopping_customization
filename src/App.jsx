import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './component/home';

import Canvas1 from './component/canvas1';
import Canvas2 from './component/canvas2';


function App() {
  
  

  return (
    <>
  <Router>
    <Routes>
      
          <Route exact path="/" element={<Home/>} />
        
          <Route exact path="/canvas" element={<Canvas1/>} />
          <Route exact path="/canvas2" element={<Canvas2/>} />
          </Routes>   
    </Router>
     
    </>
  )
}

export default App
