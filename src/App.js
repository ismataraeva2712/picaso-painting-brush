
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myportfolio from './Pages/Myportfolio/Myportfolio';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Notfound from './Pages/Shared/Notfound';
import MyProfile from './Pages/Dashboard/MyProfile';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import Payment from './Pages/Dashboard/Payment';
import Blogs from './Pages/Blogs/Blogs';
;
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myportfolio' element={<Myportfolio></Myportfolio>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        {/* ========================================== */}
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='makeadmin' element={<RequireAdmin>
            <MakeAdmin></MakeAdmin>
          </RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin>
            <AddProduct></AddProduct>
          </RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin>
            <ManageProduct></ManageProduct>
          </RequireAdmin>}></Route>
          <Route path='manageorder' element={<RequireAdmin>
            <ManageOrder></ManageOrder>
          </RequireAdmin>}></Route>


        </Route>
        {/* ============================= */}
        <Route path='/signin' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
