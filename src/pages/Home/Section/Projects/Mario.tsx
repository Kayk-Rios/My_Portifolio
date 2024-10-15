
import Typography from "@mui/material/Typography"
import img from "../../../../assets/images/logo-movie.png"
import Voltar from "../../../../components/buttonVoltar/Voltar"
import "../../../../project.css"
import Button from "@mui/material/Button"
import JsIcon from "../../../../components/icontech/JsIcon"
import HtmlIcon from "../../../../components/icontech/HtmlIcon"
import IonicIcon from "../../../../components/icontech/IonicIcon"
import TypescriptIcon from "../../../../components/icontech/TypescriptIcon"

export default function AbaTodo(){
    return(
        <>
         <Voltar/>
        <div className="bg">

                <h1 className="h1_mario">Jogo Mario Bros e Pagina estatica </h1>
                <img src={img} alt="Porti" className="Mario" />
             
                <Typography variant="body2" color="white"> 
                      <h2>Tecnologias usadas </h2>
                <JsIcon/>
                <IonicIcon/>
                <TypescriptIcon /> 
                <HtmlIcon/>

            </Typography>
            <br />
            <Button size="small" variant="contained">
            <h3> <a href="https://mario-bros-ionic.netlify.app" target="_blank" rel="noopener noreferrer" style={{color:"white"}}>Acessar jogo</a></h3>
            </Button>
        </div>
        
        </>
    )
}