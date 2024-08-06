import Voltar from "../../../../components/buttonVoltar/Voltar";
import img from "../../../../assets/images/salao.png"
import img2 from "../../../../assets/images/salao2.png"

export default function SalaoBele(){
    return(
        <>
        
        <Voltar/>
        <div className="bg">

                <h1 className="h1_mario">Salao brutal </h1>
                <img src={img} alt="Porti" className="Mario" /><br />
                <img src={img2} alt="Porti" className="Mario" />
             
                <h2>Link para Acesar Projeto</h2>
                <h3>Acesse: <a href="https://salao-bele.netlify.app/" target="_blank" rel="noopener noreferrer"> Acessar Site</a> </h3>
            

        </div>
        
        
        </>
    )
}