import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Signup from "../components/signup";
import { useState } from "react";
import Map from "../components/map";
import './App.css'


function Signedup(){
  const [logout, Setlogout] = useState(localStorage.getItem('logout')?JSON.parse(localStorage.getItem('logout')):false)
  const [userdetails,Setuserdetails] = useState(localStorage.getItem('user_details')?JSON.parse(localStorage.getItem('user_details')):[])
  const [show,SetShow] = useState(localStorage.getItem('show')?JSON.parse(localStorage.getItem('show')):true)

  return(
    <div className="mainContainer">
      <Navbar logout={logout} Setlogout={Setlogout} SetShow={SetShow}></Navbar>
      {show ? <Signup Setlogout={Setlogout} logout={logout} Setuserdetails={Setuserdetails} SetShow={SetShow} ></Signup>
      :  <Map logout={logout}/> 
      }
      <Footer></Footer>
      
       </div>
  )
}

export default Signedup;