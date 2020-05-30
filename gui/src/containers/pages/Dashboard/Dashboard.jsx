import React from "react";
import "../Dashboard/Dashboard.scss";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import dashboardlogo from "../../../assets/img/logo/About.svg";

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
    marginTop: "10px",
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

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.sectionDesktop}>
        <div className="content-dashboard dashboard">
          <Grid container fixed spacing={3}>
            {/* content text */}
            <Grid item xs={6}>
              <div className="content-text">
                <h6>Hello,,</h6>
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
              <img
                src={dashboardlogo}
                className="content-img-dashboard"
                alt="dashboard"
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.sectionMobile}>
        {/* <div className="content-dashboard dashboard">
          <Grid container fixed spacing={3}>
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
            <Grid item xs={6}>
              <img
                src={dashboardlogo}
                className="content-img-dashboard"
                alt="dashboard"
              />
            </Grid>
          </Grid>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
