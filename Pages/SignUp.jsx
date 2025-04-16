import React, { useState } from "react";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

const SignUp = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [Password, setPassword] = useState("");
  let [nameErr, setNameErr] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [PasswordErr, setPasswordErr] = useState("");
  let [signup, setSignUp] = useState("");

  let handleEmail = (e) => {
    console.log(e.target.value);
  };
  let handleName = (e) => {
    console.log(e.target.value);
  };
  let handlePassword = (e) => {
    console.log(e.target.value);
  };
  let handleSignUp = () => {
    console.log("first");
  };

  return (
    <div className="flex w-full h-screen font-nunito">
      <div className="w-1/2 h-full ">
        <div className="flex justify-center mt-[105px]">
          <div>
            <h1 className="text-1st text-[35px] font-bold">
              Get started with easily register
            </h1>
            <p className="text-[20px] text-[#A0A0A0] font-medium mb-[39px]">
              Free register and you can enjoy it
            </p>
            <div className=" mt-[61px] relative">
              <label className="text-[13px] font-semibold leading-[7.5px] text-[#A0A0A0] absolute  top-[-15px] left-[46px] p-3 bg-white   ">
                Email Address
              </label>

              <input
                onChange={handleEmail}
                className="w-[368px] h-[104px]  border border-[#A0A0A0] border-1px rounded-[9px] pl-[50px]"
                type="text"
                placeholder="Enter your Email"
              />
            </div>
            <div className=" mt-[61px] relative">
              <label className="text-[13px] font-semibold leading-[7.5px] text-[#A0A0A0] absolute  top-[-15px] left-[46px] p-3 bg-white   ">
                Ful name
              </label>

              <input
                onChange={handleName}
                className="w-[368px] h-[104px]  border border-[#A0A0A0] border-1px rounded-[9px] pl-[50px]"
                type="text"
                placeholder="Enter your Name"
              />
            </div>
            <div className=" mt-[61px] relative">
              <label className="text-[13px] font-semibold leading-[7.5px] text-[#A0A0A0] absolute  top-[-15px] left-[46px] p-3 bg-white   ">
                Password
              </label>

              <input
                onChange={handlePassword}
                className="w-[368px] h-[104px]  border border-[#A0A0A0] border-1px rounded-[9px] pl-[50px]"
                type="text"
                placeholder="******"
              />
            </div>
            <div>
              <button
                onClick={handleSignUp}
                className=" text-white bg-2nd text-[20px] font-semibold px-[158px] py-[20px] mt-[52px] rounded-[60px]"
              >
                Sign up
              </button>
              <p className=" mt-[35px] ml-[75px]">
                Already have an account ?
                <Link className="text-[#EA6C00]">Sign In</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full ">
        <img
          className="ml-auto w-full h-full object-cover"
          src="signUp.png.png"
          alt="signUp"
        />
      </div>
    </div>
  );
};

export default SignUp;
