import img from "../../../../assets/images/todoList2.png"
import "../../../../project.css"
export default function TodoList(){
    return(
        <>
        <div className="bg">
            <h1>TodoList</h1>
            <img src={img} alt="Todo list" className="TodoImg" />
            <h2>Link para Acesar Projeto</h2>
            <h3>Acesse: <a href="https://master--todolist-kayk.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar</a> </h3>
        </div>
        </>
    )
}