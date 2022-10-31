import React from "react";
import Typography from "@mui/material/Typography";
import Card from "./UI/Card";

const Head = () => {
  return (
    <Card>
      <Typography variant="h4" sx={{ m: 4 }} textAlign="center">
        Exam Score Sheet
      </Typography>
      <Typography variant="body2" sx={{ m: 4 }} textAlign="center">
        This is the coding test for People Fluent. It is built with React,
        Material UI, and Formik. Cheers!
      </Typography>
    </Card>
  );
};

export default Head;
