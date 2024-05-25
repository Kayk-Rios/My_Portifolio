import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img4 from '../../../../assets/images/logo-movie.png'
import img3 from '../../../../assets/images/port.png'
import img2 from '../../../../assets/images/cafe.png'
import img1 from '../../../../assets/images/todoList2.png'
import "../../../../App.css"
import { Link } from 'react-router-dom';


export default function Projects() {

    return (
        <>
            <h2 className='h2' id='projects'  >Projects</h2>

            <div className="divs">

                    <Card sx={{ maxWidth: 345 }} >
                        <CardMedia
                            sx={{ height:200 }}
                            image={img1}
                            title=" Todo List"
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                              TodoList 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Todo List, aplicação simples, mas fundamental, que permite criar, visualizar, editar e excluir tarefas. Feita com TypeScript e React e LocaStorage, o Todo List se beneficia da tipagem do Typescript.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium"><Link to={"/TodoLis"}>Ver Projeto</Link></Button>

                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={img2}
                            title=" Landing page"
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                          Cafeteria
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Landing page de Cafeteria feita  com as tecnologias HTML e CSS para fins de treinar a base de estilização.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><Link to={"/Cafe"}>Ver Projeto</Link></Button>

                        </CardActions>
                    </Card>
               
             
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={img3}
                            title="Portifolio"
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                               Portifolio 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Portifolio 2 feito com as tecnologias JavaScript, HTML e CSSS para exibir as minhas habilidades no 2 perioso da faculdade de ADS,.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><Link to={"/Portifolio2"}>Ver Projeto</Link></Button>

                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={img4}
                            title="logo-mariobross"
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Mario Bross
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Projeto sobre Mario Bros em Landing page contendo as tecnologias HTML,CSS e JS. Junto com o jogo feito em Ionic com Typescript
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><Link to={"/Mario"}>Ver Projeto</Link></Button>
                        </CardActions>
                    </Card>
               
            </div>
        </>
    );
}
