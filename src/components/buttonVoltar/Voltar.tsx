import { Link } from "react-router-dom";
import "../../project.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Voltar(){
    return(
        <>
        <button className="voltar" >
            <Link to={"/"} ><ArrowBackIosIcon/> </Link>
        </button></>
    )
}