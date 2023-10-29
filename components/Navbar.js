import styles from ".//Navbar.module.css";
function Navbar(props) {
    return (
        <div className={styles.container}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Navbar;