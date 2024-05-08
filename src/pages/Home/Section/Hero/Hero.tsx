import { styled, Box, Container, Grid, Typography, IconButton } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SendIcon from '@mui/icons-material/Send';
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const StyledButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: "transparent",
    borderRadius: "3px",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    padding: "4px 20px",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "inline-flex",
    gap: "10px",
    "&:hover": {
        backgroundColor: theme.palette.secondary.light,
    },
}));

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.up("xs")]: { // <= mobile
            paddingTop: "100px",
        },
        [theme.breakpoints.up("md")]: { // > mobile
            paddingTop: "50px",
        },
    }));

    const StyledImg = styled("img")(({ theme }) => ({
        width: "70%",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.primary.contrastText}`,
    }));

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"130%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
                                Kayk Dario
                            </Typography>
                            <Typography
                                color="primary.contrastText"
                                variant="h3"
                                textAlign="center"
                            >
                                Desenvolvedor Web
                            </Typography>
                            <Grid container display="flex" justifyContent="center" spacing={6} pt={3}>
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log("Download")}>
                                        <ArrowDownwardIcon />
                                        <Typography>Download Curriculo</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log("contact")}>
                                        <SendIcon />
                                        <Typography>Contato</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    );
};

export default Hero;
