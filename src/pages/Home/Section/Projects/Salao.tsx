import Voltar from "../../../../components/buttonVoltar/Voltar";

import img from "../../../../assets/images/salao.png";
import img2 from "../../../../assets/images/salao2.png";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NextIcon from "../../../../components/icontech/NextIcon";
import Nesticon from "../../../../components/icontech/NestIcon";
import TypescriptIcon from "../../../../components/icontech/TypescriptIcon";
import PrismaIcon from "../../../../components/icontech/PrismaIcon";
import ReactNativeIcon from "../../../../components/icontech/ReactNativeIcon";
import TailwindcssIcon from "../../../../components/icontech/TailwindcssIcon";
import PostGresSqlIcon from "../../../../components/icontech/PostGresSqlIcon";

export default function SalaoBele() {
  return (
    <>
      <Voltar />
      <div className="bg">
        <h1 className="h1_mario">Salao brutal </h1>
        <img src={img} alt="Porti" className="Mario" />
        <br />
        <img src={img2} alt="Porti" className="Mario" />
        <Typography variant="body2" color="white">
          <div>
            <h1>Tecnologias usadas</h1>
            <div>
              <TypescriptIcon /> 
              <Nesticon />
              <NextIcon />
              <PrismaIcon />
              <PostGresSqlIcon/>
              <ReactNativeIcon/>
              <TailwindcssIcon/>
            </div>
          </div>
        </Typography>
        <Button size="small" variant="contained">
          <h3>
            {" "}
            <a
              href="https://salao-bele.netlify.app/"
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
