import {
  styled,
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import downloadLink from "../../../../Download/Curruculo_Rec.pdf";
import "../../../../App.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import Typical from 'react-typical'

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
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      // > mobile
      paddingTop: "50px",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "50%",
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
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
                pb={2}
              >
                <span className="dev1">Kayk Dario</span>
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h4"
                textAlign="center"
              >
                <span className="dev">Desenvolvedor Web <Typical
                  steps={['-React', 2000, '-TypeScript', 2000]}
                  loop={Infinity}
                  wrapper="p"
                />
                </span>
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={6}
                pt={3}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <ArrowDownwardIcon />
                    <Typography><a href={downloadLink} download='Curruculo_Rec.pdf' style={{ textDecoration: 'none', color: 'inherit' }}>Download CV</a></Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>

                    <Typography>
                      <a href="https://www.linkedin.com/in/kayk-dario" target="_blank" rel="noopener noreferrer"> <LinkedInIcon className="Link" style={{ marginRight: '50px' }} /> </a>
                    </Typography>
                    <Typography>
                      <a href="https://github.com/Kayk-Rios" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ marginLeft: '50px' }} /></a>
                    </Typography>
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
