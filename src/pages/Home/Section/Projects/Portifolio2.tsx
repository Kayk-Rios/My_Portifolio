import Button from "@mui/material/Button"
import img from "../../../../assets/images/port.png"
import Voltar from "../../../../components/buttonVoltar/Voltar"
import "../../../../project.css"
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography"
import JsIcon from "../../../../components/icontech/JsIcon"
import HtmlIcon from "../../../../components/icontech/HtmlIcon";
export default function Portifolio2(){
    return(
        <>
         <Voltar/>
        <div className="bg">
            <h1>Portifolio2</h1>
            <img src={img} alt="Porti" className="Porti" />
           
            <Typography variant="body2" color="white"> 
                <h2>Tecnologias usadas </h2>
            <JsIcon/>
            <GitHubIcon
                  color="info"
                  style={{ height: "50px", width: "50px" }}
                />
                  <HtmlIcon/>
            </Typography>

            <Button size="small" variant="contained">
            <h3><a href="https://portifolio-kayk.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar Site</a> </h3>
            </Button>
        </div>
        </>
    )
}