import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  mainHeader: {
    ...theme.typography.button,
    fontSize: "25px",
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    margin: "0 auto",
  },
}));

export default function Header({ user }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
          <Box pt={10} mb={5}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={2}>
                <Badge
                  color="primary"
                  badgeContent="Admin"
                  style={{ visibility: user.isAdmin ? "visible" : "none" }}
                >
                  <Avatar
                    alt="My profile"
                    src={user.image}
                    className={classes.large}
                  />
                </Badge>
              </Grid>

              {/* <Badge badgeContent="Admin" {...defaultProps} /> */}
              <Grid item xs={12} sm={2}>
                <Typography className={classes.mainHeader}>
                  {user.name}
                  <br />
                </Typography>
                <Typography variant="h6" gutterBottom>
                  <small>{user.email}</small>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Fab style={{float: "right"}}color="primary" aria-label="add">
                  <CreateIcon />
                </Fab>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
