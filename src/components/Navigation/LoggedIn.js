import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
import { Button } from "@material-ui/core";
import { motion, Variants } from "framer-motion";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const variant = {
    open: {
      y: 0,
      opacity: 1,
      zIndex: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      zIndex: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <>
      <motion.li
        variants={variant}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => dispatch(logOut())}
          className="MuiButtonBase-root MuiButton-root MuiButton-contained jss4 MuiButton-fullWidth"
          variant="contained"
          // color="primary"
        >
          Logout
        </Button>
      </motion.li>
    </>
  );
}
