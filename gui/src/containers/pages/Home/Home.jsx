import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Home = () => {
  const [user, setUsers] = React.useState([]);

  React.useEffect(() => {
    let unmounted = false;
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!unmounted) {
          setUsers(res.data);
        }
      })
      .catch((error) => {});
    return () => {
      unmounted = true;
    };
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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

  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <div className={classes.sectionDesktop}>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Allow ID</TableCell>
                <TableCell align="left">Allow Amount</TableCell>
                <TableCell align="left">AllowType</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.userId}
                  </TableCell>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">{row.body}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
      <div className={classes.sectionMobile}>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Allow ID</TableCell>
                <TableCell align="left">Allow Amount</TableCell>
                <TableCell align="left">AllowType</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.userId}
                  </TableCell>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">{row.body}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
