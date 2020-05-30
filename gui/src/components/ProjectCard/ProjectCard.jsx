import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import projectDjango from "../../assets/img/project/logo-crud-django.png";
import projectRest from "../../assets/img/project/logo-rest-framework.png";
import laravel from "../../assets/img/logo/skills/laravel.png";
import codeigniter from "../../assets/img/project/codeigniter.PNG";
import djangoproject from "../../assets/img/project/design3.png";
import design1 from "../../assets/img/project/design1.PNG";
import design2 from "../../assets/img/project/design2.PNG";
import design3 from "../../assets/img/project/design3.jpg";
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
    width: "100%",
    height: 200,
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

const ProjectCard = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.sectionDesktop}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow1 />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow2 />
          </Grid>
        </Grid>
      </div>
      <div className={classes.sectionMobile}>
        <p>Mobile Sertifikat</p>
      </div>
    </div>
  );
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Grid item xs>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={djangoproject}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Web Application Django and PostgreSql
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Aplikasi Berbasis Web Framework Django dengan memanfaatkan
                    databasse postgresql fitur crud, upload
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://github.com/Ilyasyasin072/apps-crud-django"
                  target="_blank"
                  size="small"
                  color="primary"
                >
                  Lihat Lebih Detail
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item xs>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={design2}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Mobile Design dengan Abode XD
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Tampilan Design mmbile Aplikasi Menggunakan <br /> Adobe XD
                    dan Undraw
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://www.fiverr.com/share/9dkXxY"
                  target="_blank"
                  size="small"
                  color="primary"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item xs>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={design1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Design Mobile Dengan Adobe XD
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Tampilan Design Login Dengan Landing page Menggunakan <br />{" "}
                    Abode XD
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://www.fiverr.com/share/43QWAy"
                  target="_blank"
                  size="small"
                  color="primary"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow1() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Grid item xs>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={design3}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Design Web Landing Page / Dashboard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Tamilan Web Design Dashboard Menggunakan MenggunakanAdobe XD
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
        </Grid>
        <Grid item xs={4}>
          <Grid item xs>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={projectDjango}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    App Crud Django - PostgreSql
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Web Aplikasi Simple Crud Menggunakan Django - Postgresql
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://github.com/Ilyasyasin072/apps-django-crud-pgsql"
                  target="_blank"
                  size="small"
                  color="primary"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item xs>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={codeigniter}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Web Applications Codeigniter And Mysql
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Web Apkasi crud user management
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://github.com/Ilyasyasin072/codeignite-crud-management-access"
                  target="_blank"
                  size="small"
                  color="primary"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Grid item xs>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={laravel}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React Frontend Portofolio
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Created Web Development My Portofolio with React Js And
                    Material Ui
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
        </Grid>
        <Grid item xs={4}>
          <Grid item xs>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={projectRest}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Rest Framework Api With Django App Klinik
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Backend Web dengan Framwork Django Implementasi Klinik
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://github.com/Ilyasyasin072/rest_framework_django-appklinik"
                  target="_blank"
                  size="small"
                  color="primary"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item xs>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={codeigniter}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Backend Rest Framework
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Created Backend Framework Django with Rest Framework And
                    Database PostgreSql or sqlLite
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
        </Grid>
      </React.Fragment>
    );
  }
};

export default ProjectCard;
