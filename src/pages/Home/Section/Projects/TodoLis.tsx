import Button from "@mui/material/Button"
import img from "../../../../assets/images/todoList2.png"
import Voltar from "../../../../components/buttonVoltar/Voltar"
import "../../../../project.css"
import Typography from "@mui/material/Typography"
import TailwindcssIcon from "../../../../components/icontech/TailwindcssIcon"
import ViteIcon from "../../../../components/icontech/ViteIcon"
import TypescriptIcon from "../../../../components/icontech/TypescriptIcon"
export default function TodoList(){
    return(
        <> 
        <Voltar/>
        <div className="bg">
           
            <h1>TodoList</h1>
            <img src={img} alt="Todo list" className="TodoImg" />
        
            <Typography variant="body2" color="white">
            <h1>Tecnologias usadas</h1>
            <TypescriptIcon /> 
            <ViteIcon/>
            <TailwindcssIcon/>
            </Typography>

            <Button size="small" variant="contained">
            <h3> <a href="https://master--todolist-kayk.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar Site</a> </h3>
            </Button>
        </div>
        </>
    )
}