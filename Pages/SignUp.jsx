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
  let [showIcon, setShowIcon] = useState(true);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  let handleName = (e) => {
    setName(e.target.value);
    setNameErr("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  let handleSignUpbtn = () => {
    if (!name) {
      setNameErr("name is required");
    }
    if (!email) {
      setEmailErr("email is required");
    }
    if (!Password) {
      setPasswordErr("password is required");
    }
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
                className="w-[368px] h-[81px]  border border-[#A0A0A0] border-1px rounded-[9px] pl-[50px]"
                type="text"
                placeholder="Enter your Email"
                value={email}
              />
              {emailErr && <p className="text-red-300">{emailErr} </p>}
            </div>
            <div className=" mt-[61px] relative">
              <label className="text-[13px] font-semibold leading-[7.5px] text-[#A0A0A0] absolute  top-[-15px] left-[46px] p-3 bg-white   ">
                Ful name
              </label>

              <input
                onChange={handleName}
                className="w-[368px] h-[81px]  border border-[#A0A0A0] border-1px rounded-[9px] pl-[50px]"
                type="text"
                placeholder="Enter your Name"
                value={name}
              />
              {nameErr && <p className="text-red-300">{nameErr} </p>}
            </div>
            <div className=" mt-[61px] relative">
              <label className="text-[13px] font-semibold leading-[7.5px] text-[#A0A0A0] absolute  top-[-15px] left-[46px] p-3 bg-white   ">
                Password
              </label>

              <input
                onChange={handlePassword}
                className="w-[368px] h-[81px]  border border-[#A0A0A0] border-1px rounded-[9px] pl-[50px]"
                type={showIcon ? "password" : "text"}
                placeholder="******"
              />
              {showIcon ? (
                <LuEyeClosed
                  onClick={() => setShowIcon(false)}
                  className="absolute top-1/2 translate-y-[-50%] right-25 text-[20px] cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={() => setShowIcon(true)}
                  className="absolute top-1/2 translate-y-[-50%] right-25 text-[20px]"
                />
              )}
              {PasswordErr && <p className="text-red-300">{PasswordErr} </p>}
            </div>
            <div>
              <button
                onClick={handleSignUpbtn}
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
