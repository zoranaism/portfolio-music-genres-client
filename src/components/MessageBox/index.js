import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMessage } from "../../store/appState/selectors";
import { Alert } from "react-bootstrap";
import { clearMessage } from "../../store/appState/actions";
import Slide from "@material-ui/core/Slide";

export default function MessageBox() {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const showMessage = message !== null;
  if (!showMessage) return null;

  return (
    <Slide direction="left" in={showMessage} mountOnEnter unmountOnExit>
      <Alert
        show={showMessage}
        variant={message.variant}
        dismissible={message.dismissable}
        onClose={message.dismissable ? () => dispatch(clearMessage()) : null}
        style={{position: "absolute", left: "10px", bottom: "10px", zIndex: 100}}
      >
        {message.text}
      </Alert>
    </Slide>
  );
}
