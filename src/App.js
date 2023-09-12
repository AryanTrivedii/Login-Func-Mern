import Login from "./Components/Login";
import Home from './Components/Home';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
function App() {
  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path='/'element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
 </Routes>
 </BrowserRouter>  

    </>
  )
}

export default App