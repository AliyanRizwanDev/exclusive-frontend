import React, { useState } from "react";
import { InputField } from "../../components/common/InputField";
import { Button } from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const navigateToLoginUp = () => {
    navigate("/login");
  };

  const handleInputChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://192.168.18.134:3000/api/signup", {
        name: formValues.name,
        email_phone: formValues.email,
        password: formValues.password,
      });

      if (response.status === 200 || response.status === 201) {
        alert("Account created successfully!");
        navigateToLoginUp();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Sign-up error:", error);
      alert("Failed to create an account. Please check your details or try again later.");
    }
  };

  const handleInputVal = () => {
    const nameRegex = /^[a-zA-Z ]{2,}$/;
    const emailOrPhoneRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^\+?[0-9]{10,15}$/;
    const passwordRegex = /^.{6,}$/;

    if (!formValues.name || !formValues.email || !formValues.password) {
      alert("All fields are required!");
      return;
    }

    if (!nameRegex.test(formValues.name)) {
      alert("Name must be at least 2 characters long and contain only letters and spaces!");
      return;
    }

    if (!emailOrPhoneRegex.test(formValues.email)) {
      alert("Please enter a valid email or phone number!");
      return;
    }

    if (!passwordRegex.test(formValues.password)) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    handleSignUp();
  };

  return (
    <div className="w-full h-fit py-10">
      <div className="w-full h-full flex flex-col lg:flex-row ">
        <div className="w-[55%] h-fit hidden lg:block">
          <img
            className="w-full h-[600px] object-cover"
            src="./assets/signup-Image/Side-Image.svg"
            alt="Signup"
          />
        </div>
        <div className="flex-1 justify-center h-fit lg:h-[600px] px-5 flex items-start lg:items-center">
          <div className="w-full max-w-[980px] lg:max-w-[420px] h-fit flex flex-col gap-y-7">
            <div className="w-full h-fit flex flex-col gap-y-2">
              <h1 className="text-2xl font-medium tracking-wider ">
                Create an account
              </h1>
              <h1 className="text-base font-normal">
                Enter your details below
              </h1>
            </div>
            <div className="w-full h-fit flex flex-col gap-y-7">
              <InputField
                label={"Name"}
                value={formValues.name}
                onChange={(value) => handleInputChange("name", value)}
              />
              <InputField
                label={"Email or Phone Number"}
                value={formValues.email}
                onChange={(value) => handleInputChange("email", value)}
              />
              <InputField
                label={"Password"}
                value={formValues.password}
                onChange={(value) => handleInputChange("password", value)}
              />
              <div className="flex flex-col gap-y-2 w-full">
                <Button
                  label={"Create Account"}
                  handleInputVal={handleInputVal}
                />
                <div className="w-full h-fit flex justify-center items-center gap-x-2">
                  <h1 className="font-normal text-gray-600 text-xs">
                    Already have an account?
                  </h1>
                  <h1
                    onClick={navigateToLoginUp}
                    className="font-semibold text-gray-600 text-xs cursor-pointer hover:underline"
                  >
                    Login
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
