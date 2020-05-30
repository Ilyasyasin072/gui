import React from "react";
import "../Dashboard/Dashboard.scss";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import aboutLogo from "../../../assets/img/logo/Enginner.svg";
import profile from "../../../assets/img/profile/profile-me.svg";
import "./About.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
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
  titleName: {
    fontSize: "50px",
    backgroundColor: theme.palette.background.paper,
  },
  titleJob: {
    fontSize: "20px",
    opacity: "50%",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.sectionDesktop}>
        <div className="content-about about">
          <Grid container spacing={3}>
            {/* content text */}
            <Grid item xs={6}>
              <div className="content-text">
                <h6>About Me</h6>
                <h2>
                  <br />
                  Hello semuanya perkenalkan nama saya ilyas yasin, saya lulusan
                  dari kampus politeknik pos indonesia dengan gelar D4 dan saya
                  seorang programmer atau web developer.
                </h2>
              </div>

              <Link to="portofolio">
                <Button id="btn-landing"> Get Started</Button>
              </Link>
            </Grid>
            {/* content images */}
            <Grid item xs={6}>
              <img
                src={aboutLogo}
                className="content-img-about"
                alt="dashboard"
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.sectionMobile}>
        <div className="about-mobile">
          <Grid container spacing={3} style={{ marginTop: "10px" }}>
            <Grid item xs={4}>
              <img id="profile-mobile" src={profile} alt="" />
            </Grid>
            <Grid
              item
              xs={8}
              style={{ marginRight: "left", marginTop: "10px" }}
            >
              <h1 style={{ fontSize: "20px" }}>Hello, My Name</h1>
              <h1>ILYAS YASIN</h1>
              <h1 style={{ fontSize: "20px", opacity: "60%" }}>
                WEB DEVELOPER
              </h1>
            </Grid>
            <Grid item xs={12}>
              <h1 id="desc">
                Hello semuanya perkenalkan nama saya ilyas yasin, saya lulusan
                dari kampus politeknik pos indonesia dengan gelar D4 dan saya
                seorang programmer atau web developer.
              </h1>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default About;
