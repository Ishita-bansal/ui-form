import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import React from "react";
import {Register,Login,Dashboard,Profile,Tabledashboard,Page404} from "../pages"
import { useSelector } from "react-redux";
function Router(){
 const logedUser = useSelector((state)=>state.Loginreducer);
 
   const PrivateRouter = ({element})=>{ 
      return  logedUser?.isLoggedIn ? element : Navigate('/login');
   }

   const PublicRouter = ({element})=>{
     return !logedUser?.isLoggedIn ? element : Navigate('/dashboard');
   }
    return(
        <>
          <BrowserRouter>
            <Routes>
                <Route path="/register" element={<PublicRouter element={<Register/>} />}/>
                <Route path="/login" element = {<PublicRouter element={<Login/>} />} />
                <Route path="/dashboard" element= {<PrivateRouter  element={<Dashboard/>} />}/>
                <Route path="/profile" element={<PrivateRouter element={<Profile/>} />}  />
                <Route path="/tabledashboard" element={<PrivateRouter element={<Tabledashboard/>}/>}/>
                {/* <Route path="/tabledashboard" element={<Tabledashboard/>}/> */}
                <Route path="/*" element={<Page404/>} />
            </Routes>
          </BrowserRouter>
        </>
    )
}

export default Router;