import ComponenteFilho from "./ComponenteFilho";

const ComponentePai = () => {
    return(
        <>
        <div>
            <h2>Início do Componente Pai</h2>
            {/* Importando um componente dentro do outro */}
            <ComponenteFilho/>


            <h2>Fim do Componente Pai</h2>
            </div>
        </>
    )
}
export default ComponentePai;