import express from "express";
import UserModel from "../models/Userjs";

const signUp = async (request, response) => {
  const { fullName, email, password } = request.body;

  if (!fullName || !email || !password) {
    return response.json({
      messsage: "Required fields are missing",
      body: null,
      status: false,
    });
  }

  const userAlreadyExists = await UserModel.findOne({ email });

  if (userAlreadyExists) {
    return response.json({
      message: "Email Already Exists",
      body: null,
      status: false,
    });
  }

  const hashPass = await bcrypt.hash(password, 10);

  const userObj = {
    fullName,
    email,
    password: hashPass,
  };

  await UserModel.create(userObj);
};
