
import img from "../../../../assets/images/Front-food.png"
import img2 from "../../../../assets/images/Carrinho-front.png"
import Voltar from "../../../../components/buttonVoltar/Voltar"
import "../../../../project.css"
import Button from "@mui/material/Button"
import TailwindcssIcon from "../../../../components/icontech/TailwindcssIcon"
import Typography from "@mui/material/Typography"
import NextIcon from "../../../../components/icontech/NextIcon"
import TypescriptIcon from "../../../../components/icontech/TypescriptIcon"



export default function Food(){
    return(
        <>
         <Voltar/>
        <div className="bg">

                <h1 className="h1_mario">FOOD DK </h1>
                <img src={img} alt="Porti" className="Mario" /><br />
                <img src={img2} alt="Porti" className="Mario" />
                <Typography variant="body2" color="white">
                <h2>Tecnologias usadas</h2>
                <NextIcon />
                <TailwindcssIcon/>
                <TypescriptIcon /> 

                </Typography>
                
                <Button size="small" variant="contained">
                <h3>  <a href="https://food-dk.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar Site</a> </h3>
                 </Button>

        </div>
        
        </>
    )
}