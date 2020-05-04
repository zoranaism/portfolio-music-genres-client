import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
      ...theme.typography.overline,
      fontSize: "20px",
      marginBottom: 10,
      lineHeight: 1.2,
    },
  }));

export default function About({user}) {
    const classes = useStyles();
  return (
    <div>
      <Paper
        style={{
          position: "relative",
          height: "auto",
          width: "100%",
          marginBottom: "30px",
        }}
      >
        <Grid item xs={12} style={{ position: "relative", height: "auto" }}>
          <Box pb={1} pl={3} pt={2} pb={0}>
            <Typography variant="h6" className={classes.header} gutterBottom>
              About me
            </Typography>
          </Box>
          <Divider />
          <Typography variant="body1" gutterBottom style={{ padding: "20px" }}>
            {user.about}
          </Typography>
        </Grid>
      </Paper>
    </div>
  );
}
