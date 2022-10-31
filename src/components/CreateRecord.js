import React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import Card from "./UI/Card";
import * as Yup from "yup";
const CreateRecord = (props) => {
  const { handleSubmit } = props;
  const formik = useFormik({
    initialValues: {
      name: "",
      score: "",
      class: "A",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      score: Yup.number()
        .max(100, "Score must be less than 100.")
        .required("Score is required")
        .integer("Score must be integer"),
      class: Yup.string().required("Class is required"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 4 }} textAlign="center">
          Create a Record
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
              xs={12}
              sm={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <TextField
                required
                name="name"
                label="Student Name"
                error={formik.touched.name && formik.errors.name ? true : false}
                helperText={
                  formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : ""
                }
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <TextField
                required
                type="number"
                name="score"
                label="Score"
                error={formik.touched.score && !!formik.errors.score}
                helperText={
                  formik.touched.score && formik.errors.score
                    ? formik.errors.score
                    : ""
                }
                onChange={formik.handleChange}
                value={formik.values.score}
                onBlur={formik.handleBlur}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FormLabel name="class" sx={{ mr: 2 }}>
                Class
              </FormLabel>
              <RadioGroup
                row
                required
                name="class"
                onChange={formik.handleChange}
                value={formik.values.class}
                onBlur={formik.handleBlur}
              >
                <FormControlLabel value="A" control={<Radio />} label="A" />
                <FormControlLabel value="B" control={<Radio />} label="B" />
                <FormControlLabel value="C" control={<Radio />} label="C" />
              </RadioGroup>
            </Grid>

            <Grid
              item
              xs={12}
              sm={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="outlined"
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Card>
  );
};

export default CreateRecord;
