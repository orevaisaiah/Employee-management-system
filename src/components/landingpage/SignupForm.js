import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import FileUpload from "./images/file-upload.png";

const SignupForm = () => {
    const companyCategory = [
        "Lorem 1",
        "Lorem 2",
        "Lorem 3",
        "Lorem 4",
        "Lorem 5",
        "Lorem 6",
        "Lorem 7",
    ];
    const validationSchema = Yup.object({
        companyCategory: Yup.string()
            .required(
                "Please Select your category of company from the listed options"
            )
            .oneOf(companyCategory),
        companyname: Yup.string().required(
            "Plase enter the name of your company"
        ),
        logoimage: Yup.string().required("Please upload your company logo"),
        firstname: Yup.string().required("Please enter your Firstname"),
        lastname: Yup.string().required("Please enter your Lastname"),
        email: Yup.string()
            .email("Email entered is invalid")
            .required("Email is required"),
        profileimage: Yup.string().required(
            "Please upload your profile picture"
        ),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        repassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "password must match")
            .required("Please confirm Password to proceed"),
        termscheck: Yup.bool()
            .oneOf([true], "Accept Terms & Privacy Policy to proceed")
            .required(),
    });
    const initialValues = {
            companyCategory: "",
            companyname: "",
            logoimage: "",
            firstname: "",
            lastname: "",
            email: "",
            profileimage: "",
            password: "",
            repassword: "",
            termscheck: false,
        },
        onSubmit = (values) => {
            alert(JSON.stringify(values, null, 2));
        };
    const companyCategoryOptions = companyCategory.map((category, index) => (
        <option value={category} key={index}>
            {category}
        </option>
    ));
    const renderError = (message) => (
        <p style={{ color: "red"}}>{message}</p>
    );
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
                await onSubmit(values);
                resetForm();
            }}
        >
            {({ touched, errors }) => (
                <Form action="">
                    <div style={{ width: "100%" }}>
                        <div
                            style={{ width: "85%", margin: "50px auto 0 0px" }}
                        >
                            <div>
                                <h2
                                    style={{
                                        fontFamily: '"Lato", sans-serif',
                                        fontSize: "1.67vw",
                                        fontWeight: "700",
                                        color: "#000000",
                                        lineHeight: "2vh",
                                        margin: "126px 0 16px 0"
                                    }}
                                >
                                    Register
                                </h2>
                            </div>
                            <div>
                                <p
                                    style={{
                                        width: "30.5vw",
                                        fontFamily: '"Lato", sans-serif',
                                        fontSize: "0.b33vw",
                                        fontWeight: "400",
                                        lineHeight: "2vh",
                                        color: "#000000",
                                        marginTop: "10px",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Enim eget justo, neque
                                    gravida nec at massa auctor.
                                </p>
                            </div>
                            <div>
                                <Field
                                    className={`form-select form-control ${
                                        touched.companyCategory &&
                                        errors.companyCategory &&
                                        "is-invalid"
                                    }`}
                                    name="companyCategory"
                                    as="select"
                                >
                                    <option className="form-option" value={""}>
                                        Select Category of Your Company
                                    </option>
                                    {companyCategoryOptions}
                                </Field>
                                <ErrorMessage
                                    name="companyCategory"
                                    render={renderError}
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    paddingBottom: "25px",
                                }}
                            >
                                <>
                                    <div>
                                        <div className="fieldcontainer">
                                            <Field
                                                className={`form-input form-control ${
                                                    touched.companyname &&
                                                    errors.companyname &&
                                                    "is-invalid"
                                                }`}
                                                type="text"
                                                name="companyname"
                                                placeholder="Company Name"
                                            />
                                        </div>
                                        <div className="fieldcontainer">
                                            <ErrorMessage
                                                name="companyname"
                                                render={renderError}
                                            />
                                        </div>
                                    </div>
                                </>
                                <>
                                    <div>
                                        <div className="fieldcontainer">
                                            <label htmlFor="logo-image">
                                                Upload Logo{" "}
                                                <span>
                                                    <img
                                                        src={FileUpload}
                                                        alt="upload icon"
                                                    />
                                                </span>
                                            </label>
                                            <Field
                                                className={` form-control${
                                                    touched.logoimage &&
                                                    errors.logoimage &&
                                                    "is-invalid"
                                                }`}
                                                type="file"
                                                id="logo-image"
                                                name="logoimage"
                                                style={{
                                                    display: "none",
                                                    visibility: "none",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </div>
                                        <div className="fieldcontainer">
                                            <ErrorMessage
                                                name="logoimage"
                                                render={renderError}
                                            />
                                        </div>
                                    </div>
                                </>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    paddingBottom: "20px",
                                }}
                            >
                                <>
                                    <div>
                                        <div className="fieldcontainer">
                                            <Field
                                                className={`form-input form-control ${
                                                    touched.firstname &&
                                                    errors.firstname &&
                                                    "is-invalid"
                                                }`}
                                                type="text"
                                                name="firstname"
                                                placeholder="First Name"
                                                style={{}}
                                            />
                                        </div>
                                        <div className="fieldcontainer">
                                            <ErrorMessage
                                                name="firstname"
                                                render={renderError}
                                            />
                                        </div>
                                    </div>
                                </>
                                <>
                                    <div>
                                        <div className="fieldcontainer">
                                            <Field
                                                className={`form-input form-control ${
                                                    touched.lastname &&
                                                    errors.lastname &&
                                                    "is-invalid"
                                                }`}
                                                type="text"
                                                name="lastname"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <div className="fieldcontainer">
                                            <ErrorMessage
                                                name="lastname"
                                                render={renderError}
                                            />
                                        </div>
                                    </div>
                                </>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    paddingBottom: "20px",
                                }}
                            >
                                <>
                                    <div>
                                        <div className="fieldcontainer">
                                            <Field
                                                className={`form-input form-control ${
                                                    touched.email &&
                                                    errors.email &&
                                                    "is-invalid"
                                                }`}
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                style={{}}
                                            />
                                        </div>
                                        <div className="fieldcontainer">
                                            <ErrorMessage
                                                name="email"
                                                render={renderError}
                                            />
                                        </div>
                                    </div>
                                </>
                                <>
                                    <div>
                                        <div className="fieldcontainer">
                                            <label htmlFor="profile-image">
                                                Upload Picture{" "}
                                                <span>
                                                    <img
                                                        src={FileUpload}
                                                        alt="upload icon"
                                                    />
                                                </span>
                                            </label>
                                            <Field
                                                className={` form-control ${
                                                    touched.profileimage &&
                                                    errors.profileimage &&
                                                    "is-invalid"
                                                }`}
                                                type="file"
                                                id="profile-image"
                                                name="profileimage"
                                                style={{
                                                    display: "none",
                                                    visibility: "none",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </div>
                                        <div className="fieldcontainer">
                                            <ErrorMessage
                                                name="profileimage"
                                                render={renderError}
                                            />
                                        </div>
                                    </div>
                                </>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    paddingBottom: "20px",
                                }}
                            >
                                <>
                                    <div>
                                        <div className="fieldcontainer">
                                            <Field
                                                className={`form-input form-control ${
                                                    touched.password &&
                                                    errors.password &&
                                                    "is-invalid"
                                                }`}
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                style={{}}
                                            />
                                        </div>
                                        <div className="fieldcontainer">
                                            <ErrorMessage
                                                name="password"
                                                render={renderError}
                                            />
                                        </div>
                                    </div>
                                </>
                                <>
                                    <div>
                                        <div className="fieldcontainer">
                                            <Field
                                                className={`form-input form-control ${
                                                    touched.repassword &&
                                                    errors.repassword &&
                                                    "is-invalid"
                                                }`}
                                                type="password"
                                                name="repassword"
                                                placeholder="Re-type Password"
                                            />
                                        </div>
                                        <div className="fieldcontainer">
                                            <ErrorMessage
                                                name="repassword"
                                                render={renderError}
                                            />
                                        </div>
                                    </div>
                                </>
                            </div>
                            <div style={{ paddingBottom: "20px" }}>
                                <Field
                                    className={ `form-check ${
                                        touched.password &&
                                        errors.password &&
                                        "is-invalid"
                                    }`}
                                    type="checkbox"
                                    name="termscheck"
                                    id="terms"
                                />

                                <label htmlFor="terms">
                                    <span>
                                        I agree to all{" "}
                                        <span>
                                            <a
                                                href="http://#"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                Terms{" "}
                                            </a>
                                        </span>
                                        and{" "}
                                        <span>
                                            <a
                                                href="http://#"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                Privacy Policy
                                            </a>
                                        </span>
                                    </span>
                                </label>
                                <ErrorMessage
                                    name="termscheck"
                                    render={renderError}
                                />
                            </div>
                            <button
                                style={{
                                    width: "150px",
                                    height: "45px",
                                    backgroundColor: "#3D50C7",
                                    color: "#F8F8F8",
                                    fontFamily: '"Lato", sans-serif',
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    border: "none",
                                    borderRadius: "5px",
                                    marginBottom: "30px",
                                }}
                                type="submit"
                            >
                                Create Account
                            </button>
                            <div>
                                <p>
                                    Already have an Account?{" "}
                                    <Link
                                        to="/login"
                                        style={{
                                            textDecoration: "none",
                                        }}
                                    >
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default SignupForm;
