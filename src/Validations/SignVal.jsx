import * as yup from "yup";

const passwordRules = /^(?=.*d) (?=.*[a-z]) (?=.*A-Z).{5,}  $/;

export const SignSchema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup.string().email("please enter a valid email").required("required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "please enter a stronger password" })
    .required("required"),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("required"),
});
