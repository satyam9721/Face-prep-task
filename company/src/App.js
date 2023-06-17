import React from 'react';

import{BrowserRouter,Routes, Route} from 'react-router-dom'


import LOGIN from "./components/Login";


const App = () => {


  return ( <>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <LOGIN/>}/>
   

   
    </Routes>
    </BrowserRouter>,
     </>)
 
 
};

export default App;
