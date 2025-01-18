"use client";
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
import img6 from "../../../../assets/images/salao3.png";
import img7 from "../../../../assets/images/decub.png";
import img8 from "../../../../assets/images/galStore.png";
import img9 from "../../../../assets/images/everyone_b_tech.png";
import CodeIcon from "@mui/icons-material/Code";
import { motion } from "framer-motion";
import "../../../../App.css";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const BoldText = styled("span")({
  fontWeight: 800, // equivalente a Tailwind `font-extrabold`
});

export default function Projects() {
  return (
    <>
      <h1 id="projects">Projects</h1>

      <div className=" divs">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 200 }} image={img6} title="Salao-brutal" />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
                Salao Brutal
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Projeto{" "}
                <BoldText className="!font-extrabold">Full-Stack</BoldText>{" "}
                sobre Salao utilizando as tecnologias Next.js e TypeScript.
                Cabelo afiado e bem feito, barba de lenhador e mãos de
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
                </a>{" "}
                <CodeIcon></CodeIcon>
              </Button>
            </CardActions>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 200 }} image={img7} title="Salao-brutal" />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
                DecubTech
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Projeto{" "}
                <BoldText className="!font-extrabold">Full-Stack</BoldText>{" "}
                voltado para uso em hospitais utilizando as tecnologias Next.js
                e TypeScript Nestjs e PostgreSQL. Melhore a organizaçao da sua
                area hospitalar com DecubTech o sistema de decubito.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", gap: 2 }}>
              <Button size="small" variant="outlined">
                <Link to={"/Hospital"}>Ver Projeto</Link>
              </Button>
              <Button size="small" variant="outlined">
                <a
                  href="https://github.com/Kayk-Rios/landingpagedecub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codigo
                </a>{" "}
                <CodeIcon></CodeIcon>
              </Button>
            </CardActions>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 200 }} image={img5} title="FOOF-DK" />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
                Food DK
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Projeto{" "}
                <BoldText className="!font-extrabold">Front-End</BoldText> sobre
                iFood utilizando as tecnologias Next.js e TypeScript. O projeto
                inclui LocalStorage, props, tipagem e o uso de hooks básicos.
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
                </a>
                <CodeIcon></CodeIcon>
              </Button>
            </CardActions>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 200 }} image={img1} title=" Todo List" />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
                TodoList
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Projeto{" "}
                <BoldText className="!font-extrabold">Front-End</BoldText> Todo
                List, aplicação simples, mas fundamental, que permite criar,
                visualizar, editar e excluir tarefas. Feita com TypeScript e
                React e LocaStorage, o Todo List se beneficia da tipagem do
                Typescript.
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
                </a>
                <CodeIcon></CodeIcon>
              </Button>
            </CardActions>
          </Card>
        </motion.div>






        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 200 }} image={img8} title=" Todo List" />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
              GalStore
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Projeto{" "}
                <BoldText className="!font-extrabold">Front-End</BoldText>, landingpage de Loja de roupas, aplicação simples, mas fundamental, que permite escolher items da loja, soma dos items, colocar em carrinho de compras e compra via WhatsApp . Feita com TypeScript e
                Angular e Tailwind, se beneficia da tipagem do
                Typescript.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", gap: 2 }}>
              <Button size="small" variant="outlined">
                <Link to={"/GalStore"}>Ver Projeto</Link>
              </Button>
              <Button size="small" variant="outlined">
                <a
                  href="https://github.com/Kayk-Rios/appangularLoja"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codigo
                </a>
                <CodeIcon></CodeIcon>
              </Button>
            </CardActions>
          </Card>
        </motion.div>



        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 200 }} image={img9} title=" Todo List" />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
              Everyone-b-tech
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Projeto{" "}
                <BoldText className="!font-extrabold">Front-End</BoldText> aplicação feita em equipe com colaboradores e fundamental, que permite oferecer soluções tecnológicas inovadoras que impulsionem a eficiência das pessoas, promovam a igualdade de gênero e fomentem uma cultura inclusiva. Feito com TypeScript e
                Next.js e Tailwind, se beneficia da tipagem do
                Typescript.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", gap: 2 }}>
              <Button size="small" variant="outlined">
                <Link to={"/Btech"}>Ver Projeto</Link>
              </Button>
              <Button size="small" variant="outlined">
                <a
                  href="https://github.com/Kayk-Rios/everyone_b_tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codigo
                </a>
                <CodeIcon></CodeIcon>
              </Button>
            </CardActions>
          </Card>
        </motion.div>






       

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -50 }}
        >
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
                Projeto{" "}
                <BoldText className="!font-extrabold">Front-End</BoldText>{" "}
                Projeto sobre jogo do Mario Bros contendo as tecnologias
                Ionic e Typescript.
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
                </a>
                <CodeIcon></CodeIcon>
              </Button>
            </CardActions>
          </Card>
        </motion.div>




        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 200 }} image={img3} title="Portifolio" />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
                Portifolio 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Projeto{" "}
                <BoldText className="!font-extrabold">Front-End</BoldText>{" "}
                Portifolio 2 feito com as tecnologias JavaScript, HTML e CSSS
                para exibir as minhas habilidades no 2 perioso da faculdade de
                ADS.
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
                </a>
                <CodeIcon></CodeIcon>
              </Button>
            </CardActions>
          </Card>
        </motion.div>


    
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={img2}
              title=" Landing page"
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
                Cafeteria
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Projeto{" "}
                <BoldText className="!font-extrabold">Front-End</BoldText>{" "}
                Landing page de Cafeteria feita com as tecnologias HTML e CSS
                para fins de treinar a base de estilização.
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
                </a>
                <CodeIcon></CodeIcon>
              </Button>
            </CardActions>
          </Card>
        </motion.div>


      </div>
    </>
  );
}
