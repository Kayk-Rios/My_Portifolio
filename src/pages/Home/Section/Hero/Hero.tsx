import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import SendIcon from '@mui/icons-material/Send';
const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))
    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))


    return (

        <>


            <StyledHero >
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <StyledImg src={Avatar} />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Typography color={"primary"} variant="h2" textAlign={"center"}>Kayk Dario</Typography>
                            <Typography color={"secondary"} variant="h3" textAlign={"center"}>Desenvolvedor Web</Typography>

                            <Grid container  display={"flex"} justifyContent={"center"}>
                                <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
                                    <Button>
                                        <ArrowDownwardIcon />
                                        Download Curriculo
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} >
                                    <Button>
                                        <SendIcon />
                                        Contato
                                    </Button>

                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>

        </>

    )
}

export default Hero
