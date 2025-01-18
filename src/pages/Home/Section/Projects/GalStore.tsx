import Button from "@mui/material/Button"
import img from "../../../../assets/images/galStore.png"
import Voltar from "../../../../components/buttonVoltar/Voltar"
import "../../../../project.css"
import Typography from "@mui/material/Typography"
import TailwindcssIcon from "../../../../components/icontech/TailwindcssIcon"

import TypescriptIcon from "../../../../components/icontech/TypescriptIcon"
import AngularIcon from "../../../../components/icontech/AngularIcon"
export default function GalStore(){
    return(
        <> 
        <Voltar/>
        <div className="bg">
           
            <h1>GalStore</h1>
            <img src={img} alt="Todo list" className="TodoImg" />
        
            <Typography variant="body2" color="white">
            <h1>Tecnologias usadas</h1>
            <TypescriptIcon /> 
            <AngularIcon/>
            <TailwindcssIcon/>
            </Typography>

            <Button size="small" variant="contained">
            <h3> <a href="https://galstore.vercel.app/" target="_blank" rel="noopener noreferrer">Acessar Site</a> </h3>
            </Button>
        </div>
        </>
    )
}