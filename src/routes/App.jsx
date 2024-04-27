import './App.css'
import Navbar from '../components/navbar';
import Aboutus from '../components/about';
import Footer from '../components/footer';
import { useState } from 'react';

function App() {
  const [logout, Setlogout] = useState(localStorage.getItem('logout')?JSON.parse(localStorage.getItem('logout')):false)
  const [show,SetShow] = useState(localStorage.getItem('show')?JSON.parse(localStorage.getItem('show')):true)

  return (
    <div className="mainContainer">
      <Navbar logout={logout} Setlogout={Setlogout} SetShow={SetShow}></Navbar>
      <Aboutus></Aboutus>
      <Footer></Footer>
    </div>
  )
}

export default App;
