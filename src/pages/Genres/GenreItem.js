import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 160,
    position: "absolute",
    paddingLeft: "5px",
    userSelect: "none",
  },
  padding: {
    padding: "0",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    padding: "0",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function GenreItem(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onMouseDownStartDragging = (event, id) => {
    props.startDragging(event, id);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
        cursor: "grabbing",
      }}
      whileTap={{
        transition: { duration: 0.2 },
        cursor: "grabbing",
      }}
      style={{
        position: "absolute",

        height: 30,
        textAlign: "center",
        backgroundColor: "rgb(255, 255, 255)",
        lineHeight: "30px",
        ...props.tile,
      }}
      onMouseDown={(event) => onMouseDownStartDragging(event, props.id)}
    >
      <Card className={classes.root}>
        <CardActions disableSpacing className={classes.padding}>
          <Typography variant="overline" display="block">
            {props.tile.name}
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              className={classes.padding}
              style={{ color: "red", height: "28px", width: "28px" }}
            >
              <FavoriteIcon style={{fontSize: "15px"}}/>
            </IconButton>
            <Button size="small">
              <Typography variant="caption">
                Learn More
              </Typography>
            </Button>
          </CardActions>
        </Collapse>
      </Card>
    </motion.div>
  );
}
