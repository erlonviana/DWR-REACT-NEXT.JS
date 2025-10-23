import styles from "@/components/Loading/Loading.module.css";

const Loading = ({loading}) => {
  return (
    <>
      {/* Se loading é verdadeiro recebe a classe loading, se não, recebe a classe done */}
      <div className={loading ? styles.loading : styles.done}> 
        <img src="../../images/loading.gif" alt="Carregando" />
        <p>Carregando...</p>
      </div>
    </>
  );
};

export default Loading;
