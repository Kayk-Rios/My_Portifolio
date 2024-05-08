import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import SendIcon from '@mui/icons-material/Send';
import Styledbutton from "../../../../components/styledbuttons/styledbutton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.up('xs')]:{ // < ou igual a mobile
          paddingTop: '100px'
        },
        [theme.breakpoints.up('md')]:{ // > ou igual a mobile
            paddingTop: '50px'
        }
    }))
    const StyledImg = styled("img")(({ theme }) => ({
        width: "70%",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.primary.contrastText}`
    }))


    return (

        <>


            <StyledHero >
                <Container maxWidth="lg" >
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={5}>
                            <Box position="relative">

                            <Box position="absolute" width={"130%" }  top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                 <StyledImg src={Avatar} />

                            </Box>
                        </Box>
                       
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>Kayk Dario</Typography>
                        <Typography color="primary.contrastText" variant="h3" textAlign="center" >Desenvolvedor Web</Typography>

                        <Grid container display="flex" justifyContent="center" spacing={6} pt={3}>
                            <Grid item xs={12} md={6} display="flex" justifyContent="center">

                                <Styledbutton>

                                    <ArrowDownwardIcon />

                                    <Typography>
                                        Download Curriculo
                                    </Typography>

                                </Styledbutton>
                            </Grid>
                            <Grid item xs={12} md={6} display="flex" justifyContent="center" >
                                <Styledbutton>

                                    <SendIcon />
                                    <Typography>
                                        Contato
                                    </Typography>

                                </Styledbutton>


                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
            </Container>
        </StyledHero >

        </>

    )
}

export default Hero
