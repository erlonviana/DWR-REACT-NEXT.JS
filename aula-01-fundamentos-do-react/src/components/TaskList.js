// Componente recebendo valores via props ("task")

const TaskList = ({tasks}) => {

    //Retorno condicional: se tiver tarefa, ele vai mostrar. Se não, aparece a msg "Não há tarefas para mostrar"
    if (tasks.length === 0) {
        return <p>Não há tarefas para mostrar</p>;
    }

    return (

        
        <>
        <div>
            <h4>Lista de Tarefas: </h4>
            <ol>
                {tasks.map((task) => (
                    <li key={task.id}>{task.text}</li>
                )

                )}
                {/* 
                lista direto no componente
                <li>1. Tirar o lixo</li>
                <li>2. Lavar a louça</li>
                <li>3. Passear com o doguinho</li> */}
            </ol>
        </div>
        </>
    )
}

export default TaskList;