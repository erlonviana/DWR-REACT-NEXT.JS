//importando o modulo de CSS do componente
// @ é a pasta src
import styles from "@/components/TrafficLight/TrafficLight.module.css"  

//Importando o useState

const TrafficLight = () => {
    //Criando estado para a cor
    const [color, setColor] = useState("gray");

    return (
        <>
        <div className={styles.container}>
            <h3>Semáforo da FATEC: </h3>
            <br/>
            <div className={`${styles.light}${color == "red" ? styles.gray}`}></div>
            <div className={`${styles.light}${color == "yellow" ? styles.gray}`}></div>
            <div className={`${styles.light}${color == "green" ? styles.gray}`}></div>
        <br/>
        <div>
        <button className = "button" onClick={() => setColor("red")}> Pare </button>
        <button className = "button" onClick={() => setColor("yellow")}> Atenção! </button>
        <Button className = "button" onClick={() => setColor("green")}> Prossiga </Button>
        </div>
        </div>
        </>
    );
};
export default TrafficLight;