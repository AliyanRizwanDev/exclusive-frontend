import React, { useState } from "react"; 
import { InputField } from "../../components/common/InputField";

export const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const handleInputVal = () => {
    if (!formValues.email || !formValues.password) {
      alert("Input fields are Empty !");
      return;
    }
    const formattedValues = Object.entries(formValues)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    console.log("Input Values:\n" + formattedValues);
    setFormValues({
      email: "",
      password: "",
    });
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
                Log in to Exclusive
              </h1>
              <h1 className="text-base font-normal">
                Enter your details below
              </h1>
            </div>
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
            <div className="w-full h-fit flex items-center justify-between">
              <button
                onClick={handleInputVal} 
                className="border py-3 px-10 rounded-md transition-all duration-300 ease-in-out text-white font-medium text-sm bg-[#DB4444] hover:bg-red-400"
              >
                Log in
              </button>
              <h1 className="font-normal text-sm text-[#DB4444] cursor-pointer hover:text-red-400">
                Forgot Password?
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
