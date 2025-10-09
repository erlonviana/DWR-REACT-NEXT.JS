// Importando o módulo de CSS do componente
// @ é a pasta src (isso depende do alias estar configurado no seu projeto)
import styles from "@/components/TrafficLight/TrafficLight.module.css";

// Importando o useState do React
import { useState } from "react";

const TrafficLight = () => {
    // Criando estado para a cor
    const [color, setColor] = useState("gray");

    return (
        <div className={styles.container}>
            <h3>Semáforo da FATEC:</h3>
            <br />

            {/* Semáforo */}
            <div className={`${styles.light} ${color === "red" ? styles.red : styles.gray}`}></div>
            <div className={`${styles.light} ${color === "yellow" ? styles.yellow : styles.gray}`}></div>
            <div className={`${styles.light} ${color === "green" ? styles.green : styles.gray}`}></div>

            <br />

            {/* Botões */}
            <div>
                <button className="button" onClick={() => setColor("red")}>Pare</button>
                <button className="button" onClick={() => setColor("yellow")}>Atenção!</button>
                <button className="button" onClick={() => setColor("green")}>Prossiga</button>
            </div>
        </div>
    );
};

export default TrafficLight;