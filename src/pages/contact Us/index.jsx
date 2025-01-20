import React, { useState } from "react";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { ContactUsDetail } from "../../utils/data";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      alert("All fields are required. Please fill out every field.");
      return;
    }

    console.log("Form Data:", formData);
    alert("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="w-full h-fit px-5 md:px-20 ">
      <div className="w-full h-fit py-5 flex flex-col gap-y-16 pb-28">
        <div className="w-fit flex gap-x-6">
          <h1 className="text-sm text-gray-400 font-normal">Home</h1>
          <h1 className="text-sm text-gray-400 font-normal">/</h1>
          <h1 className="text-sm text-black font-normal">Contact</h1>
        </div>

        <div className="w-full h-fit flex flex-wrap gap-6">
          <div className="w-full max[900px]:w-1/2 lg:w-1/3 h-[575px] py-14 bg-white shadow-xl px-8 rounded-sm flex flex-col gap-y-12">
            <div className="w-full flex flex-col gap-y-5">
              <div className="flex gap-x-3 items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-[#DB4444] rounded-full">
                  <MdCall className="text-white text-xl" />
                </div>
                <h1 className="text-base font-medium">Call To Us</h1>
              </div>
              <div className="flex flex-col gap-y-5">
                <h1 className="text-base font-normal">
                  {ContactUsDetail.detail}
                </h1>
                <div className="flex gap-x-2 items-center">
                  <h1 className="text-base font-medium">Phone:</h1>
                  <h1 className="text-base font-normal">
                    {ContactUsDetail.number}
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-5">
              <div className="flex gap-x-3 items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-[#DB4444] rounded-full">
                  <CiMail className="text-white text-2xl" />
                </div>
                <h1 className="text-base font-medium">Write To Us</h1>
              </div>
              <div className="flex flex-col gap-y-5">
                <h1 className="text-base font-normal">
                  {ContactUsDetail.detail2}
                </h1>
                <div className="flex gap-x-2 items-center">
                  <h1 className="text-base font-medium">Email:</h1>
                  <h1 className="text-base font-normal">
                    {ContactUsDetail.email1}
                  </h1>
                </div>
                <div className="flex gap-x-2 items-center">
                  <h1 className="text-base font-medium">Email:</h1>
                  <h1 className="text-base font-normal">
                    {ContactUsDetail.email2}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 h-fit py-8 pb-12 flex flex-col gap-y-5 px-6 rounded-sm bg-white shadow-xl">
            <div className="flex flex-wrap gap-4">
              <input
                className="w-full bg-[#F5F5F5] font-normal text-base text-gray-400 px-4 py-3 rounded-md outline-none placeholder:text-gray-400"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                className="w-full bg-[#F5F5F5] font-normal text-base text-gray-400 px-4 py-3 rounded-md outline-none placeholder:text-gray-400"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                className="w-full bg-[#F5F5F5] font-normal text-base text-gray-400 px-4 py-3 rounded-md outline-none placeholder:text-gray-400"
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full h-fit flex items-center md:items-end flex-col gap-y-5">
              <textarea
                className="w-full h-56 bg-[#F5F5F5] font-normal text-base text-gray-400 px-4 py-3 rounded-md outline-none placeholder:text-gray-400"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
              />
              <button
                className="w-full sm:w-52 h-14 px-5 bg-[#DB4444] outline-none text-white font-normal transition-all duration-300 rounded-md hover:bg-red-400"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
