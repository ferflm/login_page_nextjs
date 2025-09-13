import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import user from "@/models/user";
import { connDatabase } from "@/lib/mongodb";

export async function POST(request) {
    const {name, email, password, confirmPassword} = await request.json();

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    if (!name || !email || !password || !confirmPassword) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
        return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }

    if (confirmPassword !== password) {
        return NextResponse.json({ message: "Password does not match" }, { status: 400 });
    }

    if (password.length < 6) {
        return NextResponse.json({ message: "Password must be at least 6 character long" }, { status: 400 });
    }

    try {
        await connDatabase();
        const existingUser = await user.findOne({ email });

        if (existingUser) {
            return NextResponse.json({ message: "User already exists"}, { status: 400 });
        }

        const hashed = await bcrypt.hash(password, 10);

        const newUser = new user({
            email,
            name,
            password: hashed,
        });

        await newUser.save();
        return NextResponse.json({ message: "User created" }, { status: 201});

    } catch(error) {
        console.error(error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}