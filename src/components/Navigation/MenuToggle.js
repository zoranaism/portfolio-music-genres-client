import * as React from "react";
import { motion } from "framer-motion";

export const MenuToggle = ({ toggle }) => (
  <button className="nav-button" onClick={toggle}>
    <svg width="23" height="18" viewBox="0 0 23 18">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1},
          open: { opacity: 0 },
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />{" "}
    </svg>
  </button>
);

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

// Finished code
// export const MenuToggle = ({ toggle }) => (
//   <button onClick={toggle}>
//     <svg width="23" height="23" viewBox="0 0 23 23">

//     </svg>
//   </button>
// );