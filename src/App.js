
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
import RequierAuth from './Components/RequierAuth/RequierAuth';
import MyOrder from './Pages/DashBoard/MyOrder';
import AddProducts from './Pages/DashBoard/AddProducts';
import AddReview from './Pages/DashBoard/AddReview';
import MyProfile from './Pages/DashBoard/MyProfile';
import Payment from './Pages/DashBoard/Payment';
import AllUser from './Pages/DashBoard/AllUser';
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
       <ToastContainer />
     <NavBar>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/Inventory/:id' element={

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
            <Route  path='AllUser' element={<AllUser/>}></Route>
            
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
