import { useState, useEffect } from "react";
import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";
import axios from "axios";
import EditContent from "../EditContent";

const HomeContent = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGame, setSelectedGame] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0); // NOVO: trigger para recarregar

  // useEffect para carregar jogos - executa quando refreshTrigger muda
  useEffect(() => {
    const fetchGames = async() => {
      try{
        const response = await axios.get("http://localhost:4000/games");
        setGames(response.data.games);
      } catch (error){
        console.log(error);
      } finally {
        setTimeout(() => setLoading(false), 3000);
      }
    };
    fetchGames();
  }, [refreshTrigger]); // ← Agora observa o refreshTrigger

  // Função para forçar atualização da lista
  const refreshGames = () => {
    setRefreshTrigger(prev => prev + 1); // ← Muda o trigger, disparando o useEffect
  };

  // Função de deletar 
  const deleteGame = async (gameId) => {
    try {
      const response = await axios.delete(`http://localhost:4000/games/${gameId}`);
      if (response.status === 204){
        alert("O jogo foi excluído com sucesso");
        refreshGames(); // ← Atualiza a lista após deletar
      }
    } catch (error){
      console.log(error);
    }
  }

  // Função para abrir o modal
  const openEditModal = (game) => {
    setSelectedGame(game);
  };

  // Função para fechar o modal
  const closeEditModal = () => {
    setSelectedGame(null);
  }

  // Função chamada quando um jogo é editado com sucesso
  const handleGameUpdated = () => {
    refreshGames(); // ← Atualiza a lista após editar
    closeEditModal(); // ← Fecha o modal
  };

  return (
    <>
      <div className={styles.homeContent}>
        <div className={styles.listGamesCard}>
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          {loading ? (
            <Loading loading={loading} />
          ) : ( 
            <div className={styles.games} id={styles.games}>
              {games.map((game) => (
                <ul key={game._id} className={styles.listGames}>
                  <div className={styles.gameImg}>
                    <img src="images/game_cd_cover.png" alt="Jogo em estoque"/>
                  </div>
                  <div className={styles.gameInfo}>
                    <h3>{game.title}</h3>
                    <li>Plataforma: {game.descriptions.platform}</li>
                    <li>Gênero: {game.descriptions.genre}</li>
                    <li>Classificação: {game.descriptions.rating}</li>
                    <li>Ano: {game.year}</li>
                    <li>Preço: {game.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL"
                    })}</li>
                    <button className={styles.btnDel}
                      onClick={() => {
                        const confirmed = window.confirm("Deseja mesmo excluir o jogo?");
                        if (confirmed){
                          deleteGame(game._id);
                        }
                      }}
                    >
                      Deletar
                    </button>
                    <button
                      className={styles.btnEdit}
                      onClick={() => openEditModal(game)}
                    >
                      Editar
                    </button>
                  </div>
                </ul>
              ))}
            </div>
          )}
        </div>
        {selectedGame && (
          <EditContent 
            game={selectedGame} 
            closeEditModal={closeEditModal}
            onGameUpdated={handleGameUpdated} // ← NOVO: callback para sucesso
          />
        )}
      </div>
    </>
  );
};

export default HomeContent;