import { NextResponse } from "next/server";
import { User } from "../../../../models/UserModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { DbConnection } from "../../../../DbConnection/DbConnection";

export const POST = async (request) => {
  await DbConnection();

  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    console.log("checked");

    if (user) {
      return NextResponse.json(
        { success: false, error: "User already exists login..." },
        { status: 400 }
      );
    }

    const hashedpass = await bcrypt.hash(password, 10);

    const newuser = await User.create({ name, email, password: hashedpass });

    if (!newuser) {
      return NextResponse.json(
        { success: false, error: "Something went wrong..." },
        { status: 400 }
      );
    }

    const token = await jwt.sign({ id: newuser._id }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });

    const response = NextResponse.json({ success: true }, { status: 200 });

    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 10, // 10 days
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
};
