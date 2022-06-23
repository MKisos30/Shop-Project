import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from "../App";
import Layout from "../view/Layout";
import Auth from "../view/pages/Auth";
import LogIn from "../view/components/LogIn";
import Register from "../view/components/Register";

const RoutePage = () => {
  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Layout/>}>
         <Route index element={<App/>}/>
         <Route path='auth' element={<Auth/>}>
           <Route index element={<LogIn/>}/>
           <Route path='register' element={<Register/>}/>
         </Route>
       </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default RoutePage