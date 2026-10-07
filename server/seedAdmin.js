import mongoose from "mongoose";
import argon2 from "argon2";
import dotenv from "dotenv";
import Owner from "./models/owner.model.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const adminExists = await Owner.findOne({ email: "admin@gmail.com" });
    if (adminExists) {
      console.log("Admin already exists!");
      process.exit(0);
    }

    const hashedPassword = await argon2.hash("admin123");

    const admin = new Owner({
      name: "Admin User",
      email: "admin@gmail.com",
      password: hashedPassword,
      phone: "1234567890",
      role: "admin",
    });

    await admin.save();
    console.log("Admin user created successfully!");
    console.log("Email: admin@gmail.com | Password: admin123");
    process.exit(0);
  } catch (err) {
    console.error("Error creating admin:", err);
    process.exit(1);
  }
};

seedAdmin();
