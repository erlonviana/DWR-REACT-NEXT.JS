//Expressões Javascript dentro do HTML
const User = () => {
    //criando variáveis para o componente
    const name = "Erlon Viana"; //variável, vai ser chamada logo abaixo
    return (
    <>
        {/* name é uma expressão Javascript chamada por chaves {} */}
        <div>Usuario logado: {name}</div> 
    </>
    );
};

export default User;