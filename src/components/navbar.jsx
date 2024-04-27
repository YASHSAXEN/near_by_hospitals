import styles from './navbar.module.css'
import { Link } from 'react-router-dom';
import { app } from "../firebase";
import { getAuth, signOut } from "firebase/auth";

function Navbar({logout, Setlogout, SetShow}){

    const auth = getAuth(app);
    const Logout = ()=>{
        signOut(auth)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
        Setlogout(false)
        SetShow(true)
        localStorage.clear()
    }
    return(
        <div className={styles.navConatiner}>
            <div className={styles.navLogoContainer}>
                <div className={styles.navLogo}>
                    <Link to='/'><img src="../../public/images/logo.jpg" alt="logo"/></Link>
                </div>
            </div>
            <div className={styles.navButtonsContainer}>
                <div className={styles.navButtons}>
                    {!logout?
                    <Link to='/signup' className={styles.navButton}>Sign Up</Link>
                    :
                    <Link to='' className={styles.navButton} onClick={Logout}>Logout</Link>
                    }
                    {!logout?
                        ""
                    :
                    <div className={styles.images}>
                        <Link to='/signup'><img src={JSON.parse(localStorage.getItem('user_details'))[2]} alt={JSON.parse(localStorage.getItem('user_details'))[0][0]} /></Link>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;