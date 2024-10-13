import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../../../../components/StyledButton/StyledButton";
// import "../../../../App.css"
import GitHubIcon from "@mui/icons-material/GitHub";

export function Skills() {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    padding: "50px",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingTop: "100px",
    },

    [theme.breakpoints.up("md")]: {
      // > mobile
      paddingTop: "50px",
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="#3178C6"
                >
                  <g>
                    <path d="M21.656,0H2.344C1.05,0,0,1.05,0,2.344v19.312C0,22.95,1.05,24,2.344,24h19.312C22.95,24,24,22.95,24,21.656V2.344   C24,1.05,22.95,0,21.656,0z M13.922,13.316h-3.01v8.574H8.527v-8.574H5.531v-1.926h8.391V13.316z M21.698,20.37   c-0.467,0.835-1.325,1.305-2.238,1.5c-1.06,0.226-2.187,0.214-3.25,0.015c-0.521-0.098-0.972-0.244-1.353-0.44v-2.347   c0.426,0.357,0.888,0.625,1.387,0.803c0.499,0.179,1.003,0.268,1.511,0.268c0.45,0,0.951-0.056,1.339-0.304   c0.266-0.17,0.444-0.438,0.444-0.759c0-0.437-0.316-0.767-0.657-0.997c-0.499-0.336-1.072-0.555-1.625-0.785   c-0.822-0.342-1.434-0.76-1.838-1.254c-0.702-0.859-0.817-2.231-0.275-3.201c0.463-0.828,1.316-1.316,2.216-1.533   c0.981-0.236,2.046-0.236,3.041-0.081c0.423,0.066,0.813,0.167,1.17,0.304v2.193c-0.176-0.122-0.368-0.23-0.576-0.322   c-0.41-0.183-0.853-0.307-1.298-0.367c-0.445-0.06-0.914-0.07-1.353,0.033c-0.346,0.08-0.71,0.241-0.91,0.55   c-0.083,0.13-0.125,0.275-0.125,0.436c0,0.176,0.046,0.334,0.139,0.473c0.235,0.353,0.649,0.58,1.02,0.763   c0.652,0.32,1.336,0.56,1.962,0.931c0.608,0.359,1.148,0.859,1.412,1.525c0.127,0.32,0.191,0.693,0.191,1.118   C22.031,19.479,21.92,19.972,21.698,20.37z" />
                  </g>
                </svg>
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="JavaScript">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                  width="50"
                  height="50"
                  fill="#F7DF1E"
                >
                  <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z" />
                </svg>
                
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="NextJs ">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                      fill="#000000"
                    ></path>
                  </g>
                </svg>
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="React.Js ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                  width="50"
                  height="50"
                  fill="#61DAFB"
                >
                  <path d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 00-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 00-64.18-10.16 481.27 481.27 0 00-40.57-50.75q5.38-5.22 11.02-10.15zM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 01-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76zM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0116.12 42.32 434.44 434.44 0 01-44.79 7.65q7.62-12.09 14.75-24.48zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 01-15.37 41.39zm-98.24-107.45a439.75 439.75 0 0128.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18zM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 00201 160.51a499.12 499.12 0 00-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0023.4 60.75 502.46 502.46 0 00-23.69 61.58zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0064.69 9.39 501.2 501.2 0 0041.2 51c-2.98 2.93-6.03 5.75-9.14 8.48zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 01-28.2 34.74zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0040.23-51.2 477.84 477.84 0 0065-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 00-24.31-60.94 481.52 481.52 0 0023.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52z" />
                  <path d="M256 298.55a43 43 0 10-42.86-43 42.91 42.91 0 0042.86 43z" />
                </svg>
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
              <Typography title="HTML ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                  width="50"
                  height="50"
                  fill="#E34F26"
                >
                  <path d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z" />
                </svg>
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="CSS ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                  width="50"
                  height="50"
                  fill="#1572B6"
                >
                  <path d="M64 32l35 403.22L255.77 480 413 435.15 448 32zm290.68 334.9L256.07 395l-98.46-28.24-6.75-77.76h48.26l3.43 39.56 53.59 15.16.13.28 53.47-14.85 5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58z" />
                </svg>{" "}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                  width="50"
                  height="50"
                  fill="red"
                >
                  <path d="M213.57 256h84.85l-42.43-89.36L213.57 256z" />
                  <path d="M256 32L32 112l46.12 272L256 480l177.75-96L480 112zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280z" />
                </svg>
              </Typography>
            </StyledButton>
          </Grid>

          <Grid item xs={5} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => console.log("contact")}>
              <Typography title="Ionic ">
                <svg
                
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                  width="50"
                  height="50"
                  fill="blue"
                >
                  <path d="M256 153.9A102.1 102.1 0 10358.1 256 102.23 102.23 0 00256 153.9z" />
                  <circle cx="402.59" cy="116.45" r="46.52" />
                  <path d="M459.86 163.2l-1.95-4.28-3.11 3.52a70 70 0 01-28.06 19.32l-3 1.1 1.22 2.93A181.43 181.43 0 01439 256c0 100.92-82.1 183-183 183S73 356.92 73 256 155.08 73 256 73a180.94 180.94 0 0178.43 17.7l2.87 1.3 1.25-2.92A70.19 70.19 0 01359.21 62l3.67-2.93-4.17-2.07A221.61 221.61 0 00256 32C132.49 32 32 132.49 32 256s100.49 224 224 224 224-100.49 224-224a222.19 222.19 0 00-20.14-92.8z" />
                </svg>
              </Typography>
            </StyledButton>
          </Grid>
        </Grid>
      </StyledHero>
      <hr />
    </>
  );
}
