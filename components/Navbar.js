import styles from ".//Navbar.module.css";
import HomeButton from ".//HomeButton.js";
function Navbar(props) {
    return (
        <div className={styles.container}>
            <HomeButton/>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Navbar;