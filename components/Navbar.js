import styles from ".//Navbar.module.css";
import HomeButton from ".//HomeButton.js";
function Navbar(props) {
    return (
        <div>
            <div className={styles.container}>

                <h1>{props.title}</h1>
            </div>
            <HomeButton />
        </div>

    )
}

export default Navbar;