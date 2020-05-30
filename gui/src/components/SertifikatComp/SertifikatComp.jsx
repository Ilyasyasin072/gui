import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TimelineCom from "./Timeline/Timeline";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const SertifikatComp = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Work Experience</Typography>
          <Typography className={classes.secondaryHeading}>
            Read More ..
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <table className="table">
              <tr>
                <th>Sales Promotion Boy</th>
                <th>Year : 2014</th>
                <td>Place Factory Outlet Bali Heaven Bandung</td>
                <td>-</td>
                <tr>
                  <th>Intership 1</th>
                  <th>Year : 2017 November / 2018 January</th>
                  <td>Kampus Politeknik Pos Indonesa</td>
                  <td>Membuat Aplikasi Hydroponics Menggunakan Vue js</td>
                </tr>
              </tr>
              <tr>
                <th>Intership 2</th>
                <th>Year : 2017 Februari / 2018 April</th>
                <td>Kampus Politeknik Pos Indonesa</td>
                <td>
                  Pengembangan Aplikasi Hydroponics
                  <br /> Menggunakan Vue js
                </td>
                <tr>
                  <th>PT Prima Logic Inter Asia</th>
                  <th>Year : 2018 November / 2019 Juli</th>
                  <td>Software House Asurance</td>
                  <td>Web Developer And Maintance support</td>
                </tr>
              </tr>
              <tr style={{ background: "#fcf876" }}>
                <th>PT Mewah Niaga Jaya</th>
                <th>Year : 2019 Juli / Sekarang</th>
                <td>Web Developer / Programmer</td>
                <td>Laravel | Firebird | </td>
              </tr>
            </table>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Education</Typography>
          <Typography className={classes.secondaryHeading}>
            Readmore ..
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TimelineCom />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Advanced settings</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel> */}
      {/* <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel> */}
    </div>
  );
};

export default SertifikatComp;
