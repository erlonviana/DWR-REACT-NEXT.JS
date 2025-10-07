const Pet = ({name, breed, age}) => { //ao invés de chamar a Props chamou direto a propriedade (desestruturação das props)
    //Destructuring => Props.name -> {name}
    return (
        <>
        <div>
            <p>Informações do Pet</p>
            <ul>
                    {/* Dados vindo direto do index */}
                <li>Nome: {name}</li> 
                <li>Raça: {breed}</li>
                <li>Idade: {age} anos</li>
            </ul>
        </div>
        
        </>
    )

}

export default Pet;