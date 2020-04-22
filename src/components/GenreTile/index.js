import React from "react";
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
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 160,
    position: "absolute",
    userSelect: "none",
  },
  fav: {
    color: "red",
  },
  icons: {
    padding: "0",
    height: "28px",
    width: "28px",
    "& *": {
      fontSize: "15px",
    },
  },
  delete: {
    color: "gray",
  },
  navIcons: {
    fontSize: "18px",
    color: "#757575",
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
  collapse: {
    borderTop: "1px solid lightgray"
  },
}));

export default function GenreItem(props) {
  console.log("props", props);
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardActions disableSpacing className={classes.padding}>
          <Typography
            variant="overline"
            display="block"
            style={{ paddingLeft: "7px" }}
          >
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

        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          className={classes.collapse}
        >
          <CardActions disableSpacing>
            <Link to={`/genres/${props.tile.id}`} style={{ textDecoration: "none" }}>
              <Button size="small">
                <Typography variant="caption">
                  READ More <NavigateNextIcon className={classes.navIcons} />
                </Typography>
              </Button>
            </Link>
            <IconButton aria-label="add to favorites" className={classes.icons}>
              <FavoriteIcon className={classes.fav} />
            </IconButton>
            <IconButton aria-label="Delete" className={classes.icons}>
              <RemoveCircleIcon className={classes.delete} />
            </IconButton>
          </CardActions>
        </Collapse>
      </Card>
    </>
  );
}
