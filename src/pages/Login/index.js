import React, { useState, useEffect } from "react";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import {
  Button,
  TextField,
  CssBaseline,
  Container,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const theme = {
  spacing: 8,
};

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" style={{ textAlign: "center" }}>
        <form className={classes.root}>
          <Box pt={6}>
            <div
              style={{
                backgroundColor: "#a6b3fd",
                borderRadius: "100%",
                padding: "7px",
                width: "40px",
                margin: "0 auto",
              }}
            >
              <LockOpenIcon />
            </div>
          </Box>
          <Box mb={3}>
            <h1>Login</h1>
          </Box>
          <Box mb={3}>
            <TextField
              style={{ width: "100%", margin: "0" }}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
              label="Email address"
              variant="outlined"
            />
          </Box>
          <Box>
            <TextField
              style={{ width: "100%", margin: "0" }}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
              label="Password"
              variant="outlined"
            />
          </Box>
          <Box mt={7} mb={1}>
            <Button
              className="MuiButtonBase-root MuiButton-root MuiButton-contained jss4 MuiButton-containedPrimary MuiButton-fullWidth"
              variant="contained"
              color="primary"
              type="submit"
              onClick={submitForm}
            >
              Log in
            </Button>
          </Box>
          <Box className="MuiGrid-root MuiGrid-item">
            <Link
              className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-body2 MuiTypography-colorPrimary"
              to="/signup"
            >
              Don't have an account? Sign Up
            </Link>
          </Box>
        </form>
      </Container>
    </React.Fragment>
  );
}
