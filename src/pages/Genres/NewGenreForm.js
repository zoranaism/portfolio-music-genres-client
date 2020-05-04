import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckboxesTags from "./CheckboxesTags";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { createGenre } from "../../store/genres/actions";
import Slide from '@material-ui/core/Slide';

export default function NewGenreForm({ genres }) {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [oneLineDescr, setOneLineDescr] = useState("");
  const [relations, setRelations] = useState([]);
  
  function submitForm(event) {
    event.preventDefault();
    // console.log("IN A DISPATCH", name, img, oneLineDescr, relations);
    
    dispatch(createGenre(name, img, oneLineDescr, relations));
  }

  return (
    <div style={{ position: "absolute", top: 20, right: 20 }}>
      <Fab
        style={{ float: "right", height: "50px", width: "50px" }}
        color="primary"
        aria-label="add"
        onClick={() => setOpen(!isOpen)}
      >
        <AddCircleIcon
          style={{
            fontSize: "54px",
            fill: "#3f51b5",
            background: "white",
            borderRadius: "100%",
          }}
        />
      </Fab>

      {/* {isOpen && ( */}
      <Slide direction="left" mountOnEnter unmountOnExit in={isOpen}>
        <form
          style={{
            border: "1px solid #3f51b5",
            background: "white",
            padding: "20px",
            marginTop: 70
          }}
        >
          <Box mb={1}>
            <TextField
              required
              id="name"
              label="Genre Name"
              style={{ width: 300 }}
              type="text"
              variant="outlined"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Box>
          <br />
          <Box mb={1}>
            <TextField
              required
              id="img"
              label="Genre image link"
              style={{ width: 300 }}
              variant="outlined"
              type="text"
              value={img}
              onChange={(event) => setImg(event.target.value)}
            />
          </Box>
          <br />
          <Box mb={1}>
            <TextField
              required
              id="oneLineDescr"
              label="Genre one line description"
              multiline
              rows="4"
              type="text"
              style={{ width: 300 }}
              variant="outlined"
              value={oneLineDescr}
              onChange={(event) => setOneLineDescr(event.target.value)}
            />
          </Box>
          <br />
          <Box mb={1}>
            <CheckboxesTags genres={genres} setRelations={setRelations} />
          </Box>
          <br />
          <Box>
            <Button
              style={{ marginRight: "15px" }}
              variant="contained"
              color="primary"
              type="submit"
              onClick={submitForm}
            >
              Submit
            </Button>
            <Button variant="contained" color="inherit" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </Box>
        </form>
      </Slide>
      {/* )} */}
    </div>
  );
}
