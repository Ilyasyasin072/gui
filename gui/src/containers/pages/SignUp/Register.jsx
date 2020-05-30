import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import "../../../assets/css/custome.css";
import { Button, Grid } from "@material-ui/core";
class Register extends Component {
  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <Avatar className="avatar"></Avatar>
            <Typography className="signIn" component="h1" variant="h5">
              Sign in
            </Typography>
            <form action="">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username/Nik"
                name="username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confrim_password"
                label="confrim password"
                type="password"
                id="confrim_password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{
                  margin: "3, 0, 2",
                }}
              >
                sign in
              </Button>
              <Grid item style={{ marginTop: "10px", margin: "3, 0, 2" }}>
                <Grid item xs>
                  <Link to="login" variant="body2">
                    {"Back to Sign in ?  "}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Register;
