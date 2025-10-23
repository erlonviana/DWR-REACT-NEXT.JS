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

  //Criando um estado para controlar o carregamento da página
  const [loading, setLoading] = useState(true)

  //Criando o bloco do UseEffect:
  useEffect(() => {
    const fetchGames = async() => {
      try{
        const response = await axios.get("http://localhost:4000/games")
        //Atualizando o estado com a lista de jogos:
        setGames(response.data.games)
        //console.log(response.data.games);//Vai aparecer apenas lista de jogos

      } catch (error){
        console.log(error);
      } finally {
        setTimeout (() => setLoading(false), 3000)
      }
    };
    fetchGames(); //invocando a função dentro do useEffect
  }, [games]); //antes de finalizar o useEffect o colchete  é a dependência do useEffect (é o que ele fica observando)


  //Função de deletar 
  const deleteGame = async (gameId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/games/${gameId}`);
      if (response.status == 204){
        alert ("O jogo foi excluido com sucesso")
        //Filtrando a lista de jogos, removendo o jogo que foi excluido por meio de sua ID:
        setGames(games.filter((game) => game._id !== gameId))
      }
    } catch (error){
      console.log(error)
    }
  }
  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          {/* TITLE */}
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          {loading ? (
          <Loading loading = {loading} />
          ) : ( 
          <div className={styles.games} id={styles.games}>
            {/* Lista de jogos irá aqui */}
            {games.map((game) => (
              <ul key={game._id} className={styles.listGames}>
                <div className={styles.gameImg}>
                  <img src="images/game_cd_cover.png" alt="Jogo em estoque"/>
                </div>
                <div clasName={styles.gameInfo}>
                  <h3>{game.title}</h3>
                  <li>Plataforma: {game.descriptions.platform}</li>
                  <li>Gênero: {game.descriptions.genre}</li>
                  <li>Classificação: {game.descriptions.rating}</li>
                  <li>Ano: {game.year}</li>
                  <li>Preço: {game.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL"
                  })}</li>
                  {/* Botão para deletar: */}
                  <button className={styles.btnDel}
                  onClick={() => {

                    const confirmed = window.confirm(
                      "Deseja mesmo excluir o jogo?"
                    );
                    if (confirmed){
                      deleteGame(game._id);
                    }
                    }}
                  >
                    Deletar
                  </button>
                </div>
              </ul>
            ))}
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeContent;
