import styles from "./signup.module.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth} from "firebase/auth";
import { app } from "../firebase";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Signup({Setlogout,logout,Setuserdetails,SetShow}) {
  
  const signupwithgoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    if (!logout) {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          console.log(
            credential,
            token,
            user,
            user.displayName,
            user.email,
            user.photoURL
          );
        //   Setlogedin(true);
            const newuserdetails = []
            newuserdetails.push(user.displayName)
            newuserdetails.push(user.email)
            newuserdetails.push(user.photoURL.replace("/","\\"))
            Setuserdetails(newuserdetails)
            Setlogout(true)
            SetShow(false)
            localStorage.setItem('user_details',JSON.stringify(newuserdetails))
            localStorage.setItem('logout',true)
            localStorage.setItem('show',false)
        })
        .catch((error) => {
          console.log(error);
        });
        
      
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupButton}>
        {!logout ? (
          <button
            type="button"
            className={styles.loginwithgooglebtn}
            onClick={signupwithgoogle}
          >
            Sign in with Google
          </button>
        ):''
        }
      </div>
    </div>
  );
}

export default Signup;
