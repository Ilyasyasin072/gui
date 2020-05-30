import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import projectReact from "../../../assets/img/logo/skills/laravel.png";
import projectDjango from "../../../assets/img/logo/skills/php.png";
import projectRest from "../../../assets/img/logo/skills/django.png";
import mysql from "../../../assets/img/logo/skills/database-mysql.png";
import sqlserver from "../../../assets/img/logo/skills/sqlserver.png";
import firebird from "../../../assets/img/logo/skills/firebird.jpg";
import laravel from "../../../assets/img/logo/skills/laravel.png";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  mobileroot: {
    maxWidth: 345,
  },
  media: {
    position: "absolute",
    width: "100px",
    height: "100px",
    marginTop: "10px",
    marginLeft: "10px",
  },
  mediamobile: {
    width: "100%",
    height: "80px",
    marginBottom: "10px",
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
}));

const SkillsComp = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3} className={classes.sectionDesktop}>
        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={mysql}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ marginLeft: "100px" }}
                  component="h2"
                >
                  Database Mysql
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginLeft: "100px" }}
                  color="textSecondary"
                  component="p"
                >
                  Management database menggunakan mysql
                  <br />
                  &nbsp;
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={projectDjango}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ marginLeft: "100px" }}
                  component="h2"
                >
                  PHP (Hypertext Prepocessor)
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginLeft: "100px" }}
                  color="textSecondary"
                  component="p"
                >
                  Membuat Website Menggunakan php atau Framework Lainya
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={projectRest}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ marginLeft: "100px" }}
                  component="h2"
                >
                  Django
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginLeft: "100px" }}
                  color="textSecondary"
                  component="p"
                >
                  Web Development dengan Django dan Api Rest Framework
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.sectionDesktop}>
        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={sqlserver}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ marginLeft: "100px" }}
                  component="h2"
                >
                  Sql Server
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginLeft: "100px" }}
                  color="textSecondary"
                  component="p"
                >
                  Management database menggunakan sql server
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={firebird}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ marginLeft: "100px" }}
                  component="h2"
                >
                  Firebird
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginLeft: "100px" }}
                  color="textSecondary"
                  component="p"
                >
                  Management database menggunakan Firebird
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={laravel}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ marginLeft: "100px" }}
                  component="h2"
                >
                  Laravel
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginLeft: "100px" }}
                  color="textSecondary"
                  component="p"
                >
                  Web Development dengan Laravel atau Api Backend
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.sectionMobile}>
        <Grid item xs>
          <Card className={classes.mobileroot}>
            <CardActionArea>
              <CardContent>
                <CardMedia
                  className={classes.mediamobile}
                  image={projectReact}
                  title="Contemplative Reptile"
                />
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.mobileroot}>
            <CardActionArea>
              <CardContent>
                <CardMedia
                  className={classes.mediamobile}
                  image={projectRest}
                  title="Contemplative Reptile"
                />
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SkillsComp;
