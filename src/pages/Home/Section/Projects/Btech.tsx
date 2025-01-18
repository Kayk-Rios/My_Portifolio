import Voltar from "../../../../components/buttonVoltar/Voltar";


import img2 from "../../../../assets/images/everyone_b_tech.png";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NextIcon from "../../../../components/icontech/NextIcon";
import TypescriptIcon from "../../../../components/icontech/TypescriptIcon";
import ReactNativeIcon from "../../../../components/icontech/ReactNativeIcon";
import TailwindcssIcon from "../../../../components/icontech/TailwindcssIcon";


export default function Btech() {
  return (
    <>
      <Voltar />
      <div className="bg">
        <h1 className="h1_mario">B tech </h1>
        <br />
        <img src={img2} alt="Porti" className="Mario" />
        <Typography variant="body2" color="white">
          <div>
            <h1>Tecnologias usadas</h1>
            <div>
              <TypescriptIcon /> 
              <NextIcon />
              <ReactNativeIcon/>
              <TailwindcssIcon/>
            </div>
          </div>
        </Typography>
        <Button size="small" variant="contained">
          <h3>
            {" "}
            <a
              href="https://everyone-b-tech.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Acessar Site
            </a>{" "}
          </h3>
        </Button>
      </div>
    </>
  );
}
