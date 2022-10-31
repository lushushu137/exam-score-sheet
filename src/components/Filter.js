import React, { useState, useImperativeHandle, forwardRef } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { Checkbox } from "@mui/material";
import { AddBoxSharp } from "@material-ui/icons";
import { useFormik, Field } from "formik";
import * as Yup from "yup";

const Filter = (props, ref) => {
  const { onFilterChange } = props;

  const formik = useFormik({
    initialValues: {
      from: "",
      to: "",
      classes: [],
    },

    validationSchema: Yup.object({
      from: Yup.number(),
      score: Yup.number(),
      classes: Yup.array(),
    }),
    onSubmit: (values) => {
      console.log("values: ", values);
      onFilterChange(values);
    },
  });

  useImperativeHandle(
    ref,
    () => ({
      clearFilter: formik.resetForm,
    }),
    []
  );

  const handleCheckboxesChange = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      formik.setFieldValue("classes", [...formik.values.classes, name]);
    } else {
      formik.setFieldValue(
        "classes",
        formik.values.classes.filter((v) => v !== name)
      );
    }
  };
  const clearFilter = () => {
    formik.resetForm();
    onFilterChange({
      from: "",
      to: "",
      classes: [],
    });
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        width: "100%",
        bgcolor: "aliceblue",
      }}
    >
      <Box sx={{ m: 2 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid display="flex" alignItems="center" flexWrap="wrap" gap={1}>
            <Grid
              item
              xs={12}
              sm={3}
              gap={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FormLabel name="score">Score: </FormLabel>
              <TextField
                size="small"
                type="number"
                name="from"
                label="From"
                onChange={formik.handleChange}
                value={formik.values.from}
                style={{ width: 80 }}
              />
              -
              <TextField
                size="small"
                type="number"
                name="to"
                label="To"
                onChange={formik.handleChange}
                value={formik.values.to}
                style={{ width: 80 }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              gap={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FormLabel name="classes">Classes: </FormLabel>
              <FormControlLabel
                label="A"
                control={
                  <Checkbox
                    name="A"
                    checked={formik.values.classes.includes("A")}
                    onChange={handleCheckboxesChange}
                  />
                }
              />
              <FormControlLabel
                label="B"
                control={
                  <Checkbox
                    name="B"
                    checked={formik.values.classes.includes("B")}
                    onChange={handleCheckboxesChange}
                  />
                }
              />
              <FormControlLabel
                label="C"
                control={
                  <Checkbox
                    name="C"
                    checked={formik.values.classes.includes("C")}
                    onChange={handleCheckboxesChange}
                  />
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              gap={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button variant="outlined" type="submit" size="small">
                Filter
              </Button>
              <Button variant="text" onClick={clearFilter} size="small">
                Clear Filter
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default forwardRef(Filter);
