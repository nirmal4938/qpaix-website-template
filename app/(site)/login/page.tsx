"use client";

import React from "react";
import { Metadata } from "next";
import LoginForm from "@/components/LoginForm";

const LoginPage: React.FC = () => {
 
  return (
<div className="pb-20 pt-40">
   <h1>Login Page</h1>
      <LoginForm  />
    </div>
  );
};

export default LoginPage;
