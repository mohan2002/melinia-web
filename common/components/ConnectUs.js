import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  query: Yup.string().required("Please enter your query"),
});

const ConnectUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      query: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <Box sx={{ marginTop: "80px", marginBottom: "50px" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" fontWeight="700" mb={1}>
          CONNECT WITH US
        </Typography>
        <Typography mb={4} color="#6A6A6A">
          Feel free to reach us incase of any queries.{" "}
        </Typography>
        <Box sx={{ width: "100%", maxWidth: {xs:"90%",md:"80%"} }}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              margin="normal"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              margin="normal"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
            />

            <TextField
              margin="normal"
              id="phone"
              name="phone"
              label="Phone Number"
              type="text"
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              margin="dense"
              id="query"
              name="query"
              label="Your Query"
              type="text"
              multiline
              rows={4}
              fullWidth
              value={formik.values.query}
              onChange={formik.handleChange}
              error={formik.touched.query && Boolean(formik.errors.query)}
              helperText={formik.touched.query && formik.errors.query}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={formik.isSubmitting}
              fullWidth
              sx={{ marginTop: "20px" }}
            >
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};
export default ConnectUs;
