import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
}));

export default function GenreInfo({ genre }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  // console.log(genre);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid>
          <Paper>
            {/* <AppBar position="static" color="default"> */}
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="History" {...a11yProps(0)} />
              <Tab label="Characteristics" {...a11yProps(1)} />
              <Tab label="Origins" {...a11yProps(2)} />
            </Tabs>
            <Divider />
            {/* </AppBar> */}
            <TabPanel value={value} index={0}>
              {genre.history}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {genre.characteristics}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {genre.origins}
            </TabPanel>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}
