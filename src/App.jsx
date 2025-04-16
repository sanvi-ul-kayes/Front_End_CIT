import React from "react";
import SignUp from "./../Pages/SignUp";
import SignIn from "./../Pages/SignIn";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default App;
