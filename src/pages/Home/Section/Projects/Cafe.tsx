
import img from "../../../../assets/images/cafe.png"
import Voltar from "../../../../components/buttonVoltar/Voltar"
import "../../../../project.css"
import Button from "@mui/material/Button";
export default function Cafe(){
    return(
        <>
         <Voltar/>
        <div className="bg">
            <h1>Cafe</h1>
            <img src={img} alt="Cafe" className="Cafe" />
            <h2>Link para Acesar Projeto</h2>
            <Button size="small" variant="contained">
                 <h3> <a href="https://cafeteria-realeza.netlify.app/" target="_blank" rel="noopener noreferrer">Acesse Site</a> </h3>
            </Button>
         
        </div>
        </>
    )
}