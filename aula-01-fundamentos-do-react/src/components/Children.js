const Children = ({children}) => {
    return(
        <>
        <div>
            {/* Children passa bloco de código para o componente */}
            <p>O conteudo abaixo está sendo recebido atraves de Children</p>
            {Children}
        </div>
        </>
    )

}

export default Children ;