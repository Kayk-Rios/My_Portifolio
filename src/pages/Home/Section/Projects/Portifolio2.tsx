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
            <h3>Acesse: <a href="https://portifolio-kayk.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar</a> </h3>
        </div>
        </>
    )
}