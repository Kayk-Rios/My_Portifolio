import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../../../../components/StyledButton/StyledButton";
// import "../../../../App.css"
import GitHubIcon from "@mui/icons-material/GitHub";
import HtmlIcon from "../../../../components/icontech/HtmlIcon";
import AngularIcon from "../../../../components/icontech/AngularIcon";
import IonicIcon from "../../../../components/icontech/IonicIcon";
import SqlIcon from "../../../../components/icontech/SqlIcon";
import Nesticon from "../../../../components/icontech/NestIcon";
import PostGresSqlIcon from "../../../../components/icontech/PostGresSqlIcon";
import ReactNativeIcon from "../../../../components/icontech/ReactNativeIcon";
import NextIcon from "../../../../components/icontech/NextIcon";
import JsIcon from "../../../../components/icontech/JsIcon";
import TypescriptIcon from "../../../../components/icontech/TypescriptIcon";
import Docker from "../../../../components/icontech/Docker";
import Prisma from "../../../../components/icontech/Prisma";
import Tailwind from "../../../../components/icontech/Tailwind";
import Git from "../../../../components/icontech/Git";
import Linux from "../../../../components/icontech/Linux";
import Qhaphql from "../../../../components/icontech/Qhaphql";
import Sass from "../../../../components/icontech/Sass";
import Figma from "../../../../components/icontech/Figma";
import Node from "../../../../components/icontech/Nodejs"

export function Skills() {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh", // Define uma altura mínima para evitar cortes
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: "10px",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "20px",
      paddingBottom: "50px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "40px",
      paddingBottom: "100px",
    },
  }));
  

  return (
    <>
      <StyledHero>
        <h1 id="skills">Skills</h1>
        <Grid
          container
          display="flex"
          justifyContent="center"
          spacing={6}
          pt={3}
        >
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("Download")}>
              <Typography title="TypeScript">
              <TypescriptIcon /> 
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="JavaScript">
                <JsIcon/>
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="Next.Js ">
              <NextIcon />
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="React.Js ">
              <ReactNativeIcon/>
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="Git hub">
                <GitHubIcon
                  color="info"
                  style={{ height: "50px", width: "50px" }}
                />
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="Postgres">
              <PostGresSqlIcon/>
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="CSS HTML ">
                <HtmlIcon/>
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="Material UI ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#0073E6"
                    fill-rule="evenodd"
                    d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="Angular">
                <AngularIcon/>
              </Typography>
            </StyledButton>
          </Grid>

          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="Ionic ">
                 <IonicIcon/>
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="MySql ">
               <SqlIcon/>
              </Typography>
            </StyledButton>
          </Grid>

          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="NestJs ">
              <Nesticon />
              </Typography>
            </StyledButton>
          </Grid>

          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="NodeJs ">
              <Node/>
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="Docker ">
              <Docker/>
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="Prisma ">
              <Prisma/>
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="Tailwind ">
              <Tailwind/>
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="Figma">
              <Figma/>
              </Typography>
            </StyledButton>
          </Grid>

          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="Git ">
              <Git/>
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="Linux ">
              <Linux/>
              </Typography>
            </StyledButton>
          </Grid>

          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="QraphQL">
              <Qhaphql/>
              </Typography>
            </StyledButton>
          </Grid>

          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="Sass">
              <Sass/>
              </Typography>
            </StyledButton>
          </Grid>
        </Grid>
      </StyledHero>
      <hr />
    </>
  );
}
