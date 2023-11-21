import styles from ".//HomeButton.module.css";
function HomeButton() {
    return (
        <div>
            <a href="/">
                <button className={styles.button}>
                    Back to Home
                </button>
            </a>
        </div>

    )
}

export default HomeButton;