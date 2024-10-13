
import img from "../../../../assets/images/Front-food.png"
import img2 from "../../../../assets/images/Carrinho-front.png"
import Voltar from "../../../../components/buttonVoltar/Voltar"
import "../../../../project.css"
import Button from "@mui/material/Button"


export default function Food(){
    return(
        <>
         <Voltar/>
        <div className="bg">

                <h1 className="h1_mario">FOOD DK </h1>
                <img src={img} alt="Porti" className="Mario" /><br />
                <img src={img2} alt="Porti" className="Mario" />
             
                <h2>Link para Acesar Projeto</h2>
                <Button size="small" variant="contained">
                <h3>  <a href="https://food-dk.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar Site</a> </h3>
                 </Button>

        </div>
        
        </>
    )
}