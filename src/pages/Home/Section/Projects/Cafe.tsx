import img from "../../../../assets/images/cafe.png"
import "../../../../project.css"
export default function Cafe(){
    return(
        <>
        <div className="bg">
            <h1>Cafe</h1>
            <img src={img} alt="Cafe" className="Cafe" />
            <h2>Link para Acesar Projeto</h2>
            <h3>Acesse: <a href="https://cafeteria-realeza.netlify.app/" target="_blank" rel="noopener noreferrer">Acesse </a> </h3>
        </div>
        </>
    )
}