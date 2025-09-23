//Criando o primeiro componente funcional
//Boa pratica é iniciar o nome de componente com letra maiuscula
const Welcome = () => { //normalmente a função tem o mesmo nome do componente
    return (
        //Fragment
        <>
        <h3>Componente Welcome: Bem-vindo! Meu primeiro componente</h3>
        <p>Iniciando os estudos com React e Next.js</p>
        </>
    );
};

export default Welcome; //exportar logo após a criação do componente