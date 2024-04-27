import styles from './about.module.css'

function Aboutus(){
    return (
    <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUs}>
            <h1>About Us</h1>
            <p>
            Welcome to our website! I'm Yash Saxena, the creator. Using ReactJS, Mappls map and Firebase, we've built a simple interface to help you locate nearby hospitals with ease.<br/><br/>

            Our mission is clear: to provide a smooth experience in finding the nearest hospitals whenever you need them. Whether it's an emergency or a regular check-up, our website is here to assist you.<br/><br/>

            With ReactJS, CSS, Mappls map and Firebase, we've designed an intuitive interface for seamless navigation and accurate results. Just enter your location, and our maps will guide you to the closest healthcare facilities.<br/><br/>

            Thank you for choosing our website for your hospital location needs. We're dedicated to continuously improving your experience. Stay healthy and let us be your guide when you need it most.
            </p>
            <h1>How to Use</h1>
            <ul>
                <li>
                    <strong>Sign Up:</strong> Begin by clicking on the "Sign Up" button located in the navbar. You will be redirected to the signup page.
                </li><br/><br/>
                <li>
                    <strong>Sign In with Google:</strong> Next, click on the "Sign in with Google" button to authenticate using your Gmail account. Once signed in, you'll be logged into the website.
                </li><br/><br/>
                <li>
                    <strong>Get Nearby Hospitals:</strong> Now, click on the "Get Nearby Hospitals" button. Grant the website access to your location when prompted.
                </li><br/><br/>
                <li>
                    <strong>View Nearby Hospitals:</strong> You'll now see the locations of nearby hospitals displayed on the map.
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Aboutus;