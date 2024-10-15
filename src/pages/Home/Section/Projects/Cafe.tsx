
import Typography from "@mui/material/Typography";
import img from "../../../../assets/images/cafe.png"
import Voltar from "../../../../components/buttonVoltar/Voltar"
import "../../../../project.css"
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import HtmlIcon from "../../../../components/icontech/HtmlIcon";
export default function Cafe(){
    return(
        <>
         <Voltar/>
        <div className="bg">
            <h1>Cafe</h1>
            <img src={img} alt="Cafe" className="Cafe" />
          
            <Typography variant="body2" color="white">  
                <h2>Tecnologias usadas</h2>
            <GitHubIcon
                  color="info"
                  style={{ height: "50px", width: "50px" }}
                />
                   <HtmlIcon/>
            </Typography>

            <Button size="small" variant="contained">
                 <h3> <a href="https://cafeteria-realeza.netlify.app/" target="_blank" rel="noopener noreferrer">Acesse Site</a> </h3>
            </Button>
         
        </div>
        </>
    )
}