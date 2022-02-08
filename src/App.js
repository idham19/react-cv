import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Knowledges from './pages/Knowledges';
import Portfolio from'./pages/Portfolio';
import NotFound from './pages/NotFound';
import {BrowserRouter, Routes ,Route} from 'react-router-dom'

const App = () => {
  return (
<>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Knowledges' element={<Knowledges/>}></Route>
<Route path='/Portfolio' element={<Portfolio/>}></Route>
<Route path='/Contact' element={<Contact/>}></Route>
<Route element={<NotFound/>}></Route>
</Routes>




</BrowserRouter>
</>
  );
  }
export default App;