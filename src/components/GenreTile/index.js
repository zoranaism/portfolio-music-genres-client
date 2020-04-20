// import React from "react";
// // import { Button } from "react-bootstrap";
// // import Card from "react-bootstrap/Card";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import IconButton from "@material-ui/core/IconButton";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 245,
//     position: "absolute",
//   },
//   padding: {
//     padding: "0"
//   }, 
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     padding: "0",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
// }));

// export default function GenreTile(props) {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div >Genre name very long</div>
//     <Card className={classes.root}>
//       <CardActions disableSpacing className={classes.padding}>
//       <Typography variant="overline" display="block" gutterBottom>
//             Genre name very long
//           </Typography>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>

//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites" className={classes.padding}>
//             <FavoriteIcon />
//           </IconButton>
//           <Button size="small">Learn More</Button>
//         </CardActions>
//       </Collapse>
//     </Card>
//   );
// }
