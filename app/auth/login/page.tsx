"use client"

import Background from "@/app/ui/background";
import backgroundImage from "@/public/background5.jpg"
import { roboto } from "@/app/ui/fonts";
import NavLinks from "@/app/ui/nav-links";
// import MaterialTextField from "@/app/ui/material-text-field";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import * as yup from 'yup';
import { useFormik } from "formik";
import CustomTextField from "@/app/ui/customTextField";
// import { Password } from "@mui/icons-material";

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);

    const validationSchema = yup.object({
        email: yup.string().email("Enter a valid email address").required("Email Address is required"),
        password: yup.string().min(6, "Password must not be at least 6 characters").required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });



    return (
        <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {/* Background Image */}
            <Background backgroundImage={backgroundImage} />

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative z-10">
                {/* <div className="mx-auto z-10 flex flex-col items-center justify-center h-full text-white text-center space-y-6"></div> */}

                <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8 ">
                    <h1 className={`${roboto.className} mb-3 text-4xl text-gray-700`}>
                        Login
                    </h1>
                    <h2 className={`text-gray-600 text-2xl text-center`}>Welcome Back</h2>
                    <p className={`text-gray-600 mb-3`}>Enter your details  below to login into your account</p>
                    <Box component={"form"} onSubmit={formik.handleSubmit} className="grid grid-col md:grid-cols lg:grid-cols w-full">

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

                        <Button color='primary' type="submit" variant="contained" size='large'>Login</Button>

                        {/* <div className="flex h-8 items-end space-x-1"> */}
                        {/* Add form errors here */}
                        {/* </div> */}
                    </Box>
                    <div className='justify-items-center mt-5'>
                        <p className='text-gray-800'>
                            Don&#39;t have an account yet? <NavLinks key='Login' href="/auth/sign-up">sign up</NavLinks>
                        </p>
                    </div>
                </div>

            </main>
        </div>
    );
}