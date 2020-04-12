import React from "react";
import MenuItem from "./MenuItem";

export default function LoggedOut() {
  return (
    <>
      <MenuItem path="/login" linkText="Login" />
      <MenuItem path="/signup" linkText="SignUp" />
    </>
  );
}
