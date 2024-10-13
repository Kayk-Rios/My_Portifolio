import Button from "@mui/material/Button"
import img from "../../../../assets/images/port.png"
import Voltar from "../../../../components/buttonVoltar/Voltar"
import "../../../../project.css"
export default function Portifolio2(){
    return(
        <>
         <Voltar/>
        <div className="bg">
            <h1>Portifolio2</h1>
            <img src={img} alt="Porti" className="Porti" />
            <h2>Link para Acesar Projeto</h2>
           

            <Button size="small" variant="contained">
            <h3><a href="https://portifolio-kayk.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar Site</a> </h3>
            </Button>
        </div>
        </>
    )
}