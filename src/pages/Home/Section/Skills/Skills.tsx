import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../../../../components/StyledButton/StyledButton";
// import "../../../../App.css"



export function Skills() {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        alignItems: "center",
        justifyContent: "space-between", 
        color:"white",
        padding:"50px",
        [theme.breakpoints.up("xs")]: { // <= mobile
            paddingTop: "100px",
        },
       
        [theme.breakpoints.up("md")]: { // > mobile
            paddingTop: "50px",
        },
    }));

    return <>
        
<StyledHero>
    <h2 id="skills">Skills</h2>
        <Grid container display="flex" justifyContent="center" spacing={6} pt={3}>
            <Grid item xs={5} md={6} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log("Download")}>

                    <Typography>TypeScript</Typography>
                </StyledButton>
            </Grid>
            <Grid item xs={5} md={6} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log("contact")}>
                    <Typography>JavaScript</Typography>
                </StyledButton>
            </Grid>
            <Grid item xs={5} md={6} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log("contact")}>
                    <Typography>Next.js</Typography>
                </StyledButton>
            </Grid>
            <Grid item xs={5} md={6} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log("contact")}>
                    <Typography>React.js</Typography>
                </StyledButton>
            </Grid>
            <Grid item xs={5} md={6} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log("contact")}>
                    <Typography>Git</Typography>
                </StyledButton>
            </Grid>
            <Grid item xs={5} md={6} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log("contact")}>
                    <Typography>HTMl</Typography>
                </StyledButton>
            </Grid>
            <Grid item xs={5} md={6} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log("contact")}>
                    <Typography>CSS</Typography>
                </StyledButton>
            </Grid>
            <Grid item xs={5} md={6} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log("contact")}>
                    <Typography>Material UI</Typography>
                </StyledButton>
            </Grid>
        </Grid>
        </StyledHero>
        <hr />

    </>

}