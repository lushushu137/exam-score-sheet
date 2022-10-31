import React from "react";
import { Paper } from "@mui/material";

const Card = ({ children }) => {
  return (
    <Paper
      sx={{
        width: { xs: "70%", sm: "60%" },
        p: { xs: 2, sm: 5 },
        m: 2,
        boxShadow: "0 8px 16px 0 #BDC9D7",
        borderRadius: 5,
      }}
    >
      {children}
    </Paper>
  );
};

export default Card;
