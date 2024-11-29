import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img5 from "../../../../assets/images/Front-food.png";
import img4 from "../../../../assets/images/logo-movie.png";
import img3 from "../../../../assets/images/port.png";
import img2 from "../../../../assets/images/cafe.png";
import img1 from "../../../../assets/images/todoList2.png";
import img6 from "../../../../assets/images/salao3.png"
import img7 from "../../../../assets/images/decub.png"
import CodeIcon from '@mui/icons-material/Code';

import "../../../../App.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <h1 id="projects">Projects</h1>

      <div className="divs">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={img6} title="Salao-brutal" />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              Salao Brutal
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Projeto sobre Salao utilizando as tecnologias Next.js e
              TypeScript. Cabelo afiado e bem feito, barba de lenhador e mãos de
              motoqueiro, tudo ao som de rock pesado!.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", gap: 2 }}>
            <Button size="small" variant="outlined">
              {" "}
              <Link to={"/Salao"}>Ver Projeto</Link>
            </Button>
            <Button size="small" variant="outlined">
              <a
                href="https://github.com/Kayk-Rios/Salao-bele-front-back-bd-mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
              
               Codigo
              </a>  <CodeIcon></CodeIcon>
            </Button>
          </CardActions>
        </Card>




        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={img7} title="Salao-brutal" />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
            DecubTech
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Projeto voltado para uso em hospitais utilizando as tecnologias Next.js e
              TypeScript Nestjs e PostgreSQL. Melhore a organizaçao da sua area hospitalar com DecubTech o sistema de decubito.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", gap: 2 }}>
            <Button size="small" variant="outlined">
    
              <Link to={"/Hospital"}>Ver Projeto</Link>
            </Button>
            <Button size="small" variant="outlined">
              <a
                href="https://github.com/Kayk-Rios/Decubtech-Front-End"
                target="_blank"
                rel="noopener noreferrer"
              >
              
               Codigo
              </a>  <CodeIcon></CodeIcon>
            </Button>
          </CardActions>
        </Card>




        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={img5} title="FOOF-DK" />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              Food DK
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Projeto sobre iFood utilizando as tecnologias Next.js e
              TypeScript. O projeto inclui LocalStorage, props, tipagem e o uso
              de hooks básicos.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", gap: 2 }}>
            <Button size="small" variant="outlined">
              <Link to={"/Food"}>Ver Projeto</Link>
            </Button>
            <Button size="small" variant="outlined">
              <a
                href="https://github.com/Kayk-Rios/FOOD-DK"
                target="_blank"
                rel="noopener noreferrer"
              >
               Codigo
              </a><CodeIcon></CodeIcon>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={img1} title=" Todo List" />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              TodoList
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Todo List, aplicação simples, mas fundamental, que permite criar,
              visualizar, editar e excluir tarefas. Feita com TypeScript e React
              e LocaStorage, o Todo List se beneficia da tipagem do Typescript.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", gap: 2 }}>
            <Button size="small" variant="outlined">
              <Link to={"/TodoLis"}>Ver Projeto</Link>
            </Button>
            <Button size="small" variant="outlined">
              <a
                href="https://github.com/Kayk-Rios/TodoList"
                target="_blank"
                rel="noopener noreferrer"
              >
               Codigo
              </a><CodeIcon></CodeIcon>
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={img2} title=" Landing page" />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              Cafeteria
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Landing page de Cafeteria feita com as tecnologias HTML e CSS para
              fins de treinar a base de estilização.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", gap: 2 }}>
            <Button size="small" variant="outlined">
              <Link to={"/Cafe"}>Ver Projeto</Link>
            </Button>
            <Button size="small" variant="outlined">
              <a
                href="https://github.com/Kayk-Rios/Cafe"
                target="_blank"
                rel="noopener noreferrer"
              >
               Codigo
              </a><CodeIcon></CodeIcon>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={img3} title="Portifolio" />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              Portifolio 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Portifolio 2 feito com as tecnologias JavaScript, HTML e CSSS para
              exibir as minhas habilidades no 2 perioso da faculdade de ADS.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", gap: 2 }}>
            <Button size="small" variant="outlined">
              <Link to={"/Portifolio2"}>Ver Projeto</Link>
            </Button>
            <Button size="small" variant="outlined">
            <a
                href="https://github.com/Kayk-Rios/Portifolio"
                target="_blank"
                rel="noopener noreferrer"
              >
               Codigo
              </a><CodeIcon></CodeIcon>
            </Button>
       
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={img4}
            title="logo-mariobross"
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              Mario Bross
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Projeto sobre Mario Bros em Landing page contendo as tecnologias
              HTML,CSS e JS. Junto com o jogo feito em Ionic com Typescript
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", gap: 2 }}>
            <Button size="small" variant="outlined">
              <Link to={"/Mario"}>Ver Projeto</Link>
            </Button>
            <Button size="small" variant="outlined">
              <a
                href="https://github.com/Kayk-Rios/MarioBrosIonic"
                target="_blank"
                rel="noopener noreferrer"
              >
               Codigo
              </a><CodeIcon></CodeIcon>
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
