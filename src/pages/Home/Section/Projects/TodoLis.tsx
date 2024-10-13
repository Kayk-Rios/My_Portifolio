import Button from "@mui/material/Button"
import img from "../../../../assets/images/todoList2.png"
import Voltar from "../../../../components/buttonVoltar/Voltar"
import "../../../../project.css"
export default function TodoList(){
    return(
        <> 
        <Voltar/>
        <div className="bg">
           
            <h1>TodoList</h1>
            <img src={img} alt="Todo list" className="TodoImg" />
            <h2>Link para Acesar Projeto</h2>
           

            <Button size="small" variant="contained">
            <h3> <a href="https://master--todolist-kayk.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar Site</a> </h3>
            </Button>
        </div>
        </>
    )
}