//importando useState para estados
//Hook useEffect -> efeito colateral, é um bloco executado quando o componente é re-renderizado
import { useState, useEffect } from "react";

import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";
//Importando o axios para enviar as requisições http
import axios from "axios";

const HomeContent = () => {

  //Criando um estado para a lista de jogos
  const [games, setGames] = useState([]);

  //Criando o bloco do UseEffect:
  useEffect(() => {
    const fetchGames = async() => {
      try{
        const response = await axios.get("http://localhost:4000/games")
        console.log(response)

      } catch (error){
        console.log(error);
      }
    };
    fetchGames(); //invocando a função dentro do useEffect
  }, [games]); //antes de finalizar o useEffect o colchete  é a dependência do useEffect (é o que ele fica observando)

  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          {/* TITLE */}
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          <Loading />
          <div className={styles.games} id={styles.games}>
            {/* Lista de jogos irá aqui */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
