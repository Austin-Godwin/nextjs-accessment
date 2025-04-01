"use client"

import { Formik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography, FormControl, FormHelperText } from "@mui/material";
import CustomTextField from "./ui/customTextField";
import { useState } from "react";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must not exceed 20 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form submitted", values);
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, errors, touched, handleChange, handleBlur, values, isSubmitting }) => (
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          sx={{ 
            maxWidth: 400, 
            mx: "auto", 
            p: 4, 
            boxShadow: 3, 
            borderRadius: 2, 
            bgcolor: "white" 
          }}
        >
          <Typography variant="h5" gutterBottom>
            Sign Up
          </Typography>

          {/* Username Field */}
          <FormControl fullWidth margin="normal" error={touched.username && Boolean(errors.username)}>

          <CustomTextField
            label="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
            showPasswordToggle
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword((prev) => !prev)}
          />
          
            <TextField
              label="Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.username && errors.username && (
              <FormHelperText>{errors.username}</FormHelperText>
            )}
          </FormControl>

          {/* Email Field */}
          <FormControl fullWidth margin="normal" error={touched.email && Boolean(errors.email)}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <FormHelperText>{errors.email}</FormHelperText>
            )}
          </FormControl>

          {/* Password Field */}
          <FormControl fullWidth margin="normal" error={touched.password && Boolean(errors.password)}>
            <TextField
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && (
              <FormHelperText>{errors.password}</FormHelperText>
            )}
          </FormControl>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default AuthForm;