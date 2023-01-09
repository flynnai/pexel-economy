import styles from "./App.module.scss";
import EconomyDisplay from "./Economy/EconomyDisplay";

function App() {
    return (
        <div className={styles.main}>
            <h2>Welcome to the Pexel Economy</h2>
            <EconomyDisplay />
        </div>
    );
}

export default App;
