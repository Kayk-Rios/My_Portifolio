
import img from "../../../../assets/images/logo-movie.png"
import Voltar from "../../../../components/buttonVoltar/Voltar"
import "../../../../project.css"
import Button from "@mui/material/Button"

export default function AbaTodo(){
    return(
        <>
         <Voltar/>
        <div className="bg">

                <h1 className="h1_mario">Jogo Mario Bros e Pagina estatica </h1>
                <img src={img} alt="Porti" className="Mario" />
                <h2>Link para Acesar Projeto</h2>
            <br />
            <Button size="small" variant="contained">
            <h3> <a href="https://mario-bros-ionic.netlify.app" target="_blank" rel="noopener noreferrer" style={{color:"white"}}>Acessar jogo</a></h3>
            </Button>
        </div>
        
        </>
    )
}