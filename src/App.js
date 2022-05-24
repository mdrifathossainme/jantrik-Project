
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import DashBoard from './Pages/DashBoard/DashBoard';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Inventory from './Pages/Inventory/Inventory';
import Loading from './Components/Loading/Loading';
import RequierAuth from './Components/RequierAuth/RequierAuth';
import MyOrder from './Pages/DashBoard/MyOrder';
import AddProducts from './Pages/DashBoard/AddProducts';
import AddReview from './Pages/DashBoard/AddReview';
import MyProfile from './Pages/DashBoard/MyProfile';
import Payment from './Pages/DashBoard/Payment';
import MakeAdmin from './Pages/DashBoard/MakeAdmin';

function App() {
  return (
    <div className="App">
     <NavBar>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/Inventory' element={

            <RequierAuth>
              <Inventory/>
            </RequierAuth>
          }/>
         <Route path='/blog' element={<Blog/>}></Route>
          <Route path='dashboard' element={
            <RequierAuth>
              <DashBoard/>
            </RequierAuth>
         }>
            <Route index element={<MyProfile/>}></Route>
            <Route  path='myorder' element={<MyOrder/>}></Route>
            <Route  path='addproducts' element={<AddProducts/>}></Route>
            <Route  path='addreview' element={<AddReview/>}></Route>
            <Route  path='payment' element={<Payment/>}></Route>
            <Route  path='makeadmin' element={<MakeAdmin/>}></Route>
            
         </Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/signup' element={<SignUp/>}></Route>
         <Route path='*' element={<NotFound/>}></Route>
       </Routes>
     </NavBar>
    </div>
  );
}

export default App;
