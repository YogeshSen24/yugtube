import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    uname: {
      type: String,
      required: true,
    },
    uemail: {
      type: String,
      required: true,
    },
    upassword: {
      type: String,
      required: true,
    },
    uprofilePic: {
      type: String,
      required: true,
    },
    uposts: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    refreshToken: {
      type: String,
      reqired: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("upassword")) {
    return next();
  }
  this.upassword = bcrypt.hash(this.upassword, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (upassword) {
  return await bcrypt.compare(upassword, this.upassword);
};

userSchema.methods.generateAccessToken = function () {
  jwt.sign(
    {
      _id: this._id,
      uname: this.uname,
      uemail: this.uemail,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
userSchema.methods.generateRefreshToken = function () {
  jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};
userSchema.methods.generateRefreshToken = async function () {};

export const User = model("User", userSchema);
