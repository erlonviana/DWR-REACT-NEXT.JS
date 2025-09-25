import { useState } from "react";
const UserForm = () => {
    // criando os estados
    const [name, setName] = useState("")//O estado é sempre o nome e depois setNome (set+primeira maiuscula)
    const [email, setEmail] = useState("")

    // Criando a função que irá receber os dados do formulario e enviar para o backend
    const handleSubmit = (event) => {
        //Evitando o comportamento padrão do formulario (recarregar a pagina)
        event.preventDefault()
        //Aqui seria feito o envio dos dados para a API, porém iremos simular com um console.log
        console.log(name, email);
    }

    return (
        <>
        {/* Criando o formulario */}
        <h1>Formulario de cadastro</h1>
        <br/>
        {/* Vai submeter o formulario para a função handleSubmit que, por sua vez, vai printar no console.log */}
        <form onSubmit={handleSubmit}> 
            <input type="text"
            placeholder="Digite seu nome"
            value={name}
            // onChange: função que verifica alteração no elemento (caixa do formulario)
            //"quando o valor do input mudar, pegue o novo valor (e.target.name) e mande atualizar o estado name (setName())"
            onChange={(e) => setName(e.target.value)} 
            />
            <br/><br />
            <input type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />
            <br /><br />
            <button type="submit">Cadastrar</button>
        </form>
        <br/>
        {name}
        <br/>
        {email}
        </>
    );
};
export default UserForm;