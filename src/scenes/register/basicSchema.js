import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Please create a stronger password" })
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .min(5)
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
});