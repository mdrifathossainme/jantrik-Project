
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import DashBoard from './Pages/DashBoard/DashBoard';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Topbar from './Components/NavBar/Topbar';
import Inventory from './Pages/Inventory/Inventory';
import Loading from './Components/Loading/Loading';

function App() {
  return (
    <div className="App">
     <NavBar>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/Inventory' element={<Inventory/>}/>
         <Route path='/blog' element={<Blog/>}></Route>
         <Route path='/dashboard' element={<DashBoard/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/signup' element={<SignUp/>}></Route>
         <Route path='/loading' element={<Loading/>}></Route>
         <Route path='*' element={<NotFound/>}></Route>
       </Routes>
     </NavBar>
    </div>
  );
}

export default App;
