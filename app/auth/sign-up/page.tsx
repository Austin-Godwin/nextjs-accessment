"use client"

import backgroundImage from '@/public/background5.jpg'
import { roboto } from '@/app/ui/fonts'
import Background from "@/app/ui/background";
import NavLinks from '@/app/ui/nav-links';
import { Box, Button } from "@mui/material";
import { useState } from 'react';

import * as yup from "yup";
import { useFormik} from "formik";
import CustomTextField from '@/app/ui/customTextField';

export default function SignUp() {

  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object({
    username: yup.string().min(3, "Username must be at least 3 characters").max(20, "Username name must not exceed 20 characters").required("Username is required"),
    email: yup.string().email(({value})=>`${value} is not a valid email`).required('Email is required'),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Background Image */}
      <Background backgroundImage={backgroundImage} />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative z-10">
        {/* <div className="mx-auto z-10 flex flex-col items-center justify-center h-full text-white text-center space-y-6"></div> */}

        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`${roboto.className} mb-3 text-4xl text-gray-700`}>
            Sign up
          </h1>
          <p className={`text-gray-600 mb-3`}>Enter your details below to create your account and get started</p>
          <Box component="form" onSubmit={formik.handleSubmit} className="grid grid-cols md:grid-cols lg:grid-cols w-full">

            {/* <TextField
              hiddenLabel
              id='email'
              type='email'
              name='email'
              placeholder='example@gmail.com'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            /> */}

            <CustomTextField
              label="Username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.username}
              touched={formik.touched.username}
            />

            <CustomTextField
              label="Email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              touched={formik.touched.email}
            />

            <CustomTextField
              label="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.password}
              touched={formik.touched.password}
              showPasswordToggle
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword((prev) => !prev)}
            />

            {/* <Button buttonText='Confirm'/> */}
            
            <Button color='primary' type="submit" variant="contained" size='large'>Continue</Button>
              
            {/* <div className="flex h-8 items-end space-x-1"> */}
            {/* Add form errors here */}
            {/* </div> */}
          </Box>
          <div className='justify-items-center mt-5'>
            <p className='text-gray-800'>
              Already have an account? <NavLinks key='login'
                href="/auth/login" >login</NavLinks>
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}