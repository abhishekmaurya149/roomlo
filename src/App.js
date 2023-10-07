import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import Services from './pages/Services/Services';
 
 

function App() {
  return (
     <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
 
     </Routes>
     </BrowserRouter>
     
 
     
     </>
  );
}

export default App;
