
import img from "../../../../assets/images/logo-movie.png"
import Voltar from "../../../../components/buttonVoltar/Voltar"
import "../../../../project.css"


export default function AbaTodo(){
    return(
        <>
         <Voltar/>
        <div className="bg">

                <h1 className="h1_mario">Jogo Mario Bros e Pagina estatica </h1>
                <img src={img} alt="Porti" className="Mario" />
                <h2>Link para Acesar Projeto</h2>
                <h3>Acesse: <a href="" target="_blank" rel="noopener noreferrer">Acessar Site</a> </h3>
                <a href="https://mario-bros-ionic.netlify.app" target="_blank" rel="noopener noreferrer" style={{color:"white"}}>Acessar jogo</a>

        </div>
        
        </>
    )
}