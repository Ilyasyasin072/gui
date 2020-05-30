import React from "react";
import landingLogo from "../../../assets/img/logo/personal.svg";
import landingLogomobile from "../../../assets/img/logo/personal-mobile.svg";
import mobilePage from "../../../assets/img/logo/mobil-page.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./Landing.scss";
// hook functions
const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    flexGrow: 1,
    width: "100%",
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    marginTop: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const Landing = () => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.sectionDesktop}>
        <div className="content home">
          <Grid container fixed spacing={3}>
            {/* content text */}
            <Grid item xs={6}>
              <div className="content-text">
                <h6>Hello,</h6>
                <br />
                <h1 style={{ fontSize: "60px" }}>ILYAS YASIN</h1>
                <h1 style={{ textTransform: "uppercase", opacity: "70%" }}>
                  Web Developer
                </h1>
                <h2>
                  <br />
                  I'm Proggram Development Website and Other Skill Database
                  Mysql, SqlServer, Firebird, Postgresql
                </h2>
              </div>

              <Link to="portofolio">
                <Button id="btn-landing"> Get Started</Button>
              </Link>
            </Grid>
            {/* content images */}
            <Grid item xs={6}>
              <img src={landingLogo} className="content-img" alt="dashboard" />
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.sectionMobile}>
        <div className="content-mobile home-mobile">
          <Grid container spacing={3}>
            <Grid ite xs={4}>
              <img
                src={landingLogomobile}
                className="content-img-mobile"
                alt="dashboard"
              />
            </Grid>
            <Grid ite xs={8} style={{ marginRight: "left", marginTop: "30%" }}>
              <h1 style={{ fontSize: "20px" }}>Hello, My Name</h1>
              <h1>ILYAS YASIN</h1>
              <h1 style={{ fontSize: "20px", opacity: "60%" }}>
                WEB DEVELOPER
              </h1>
            </Grid>
            <Grid item xs={12}>
              <img src={mobilePage} alt="" className="img-mobile" />
              <h1>Lest See my Profile</h1>
              <Link to="about">
                <Button id="btn-landing-mobile"> Get Started</Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
  /* <Container fixed className={classes.root}>
          <Grid container spacing={3} style={{ marginBottom: "10px" }}>
            <Grid item xs={6}>
              <h1 className="name-titile">My Name Ilyas Yasin</h1>
              <h3 id="job-title">Web Developer</h3>
              <Link to="portofolio">
                <Button id="btn-landing"> Get Started</Button>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <img src={dashboardlogo} className="img-landing-pages" alt="" />
            </Grid>
          </Grid>
        </Container> */
};

export default Landing;
