"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function SignupForm() {
  return (
    <div className="w-full max-w-md space-y-6">
      
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold">
          Create an account
        </h1>
        <p className="text-gray-500 text-sm">
          Enter your details below
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        
        <input
          type="text"
          placeholder="Name"
          className="w-full border-b py-2 outline-none focus:border-black"
        />

        <input
          type="text"
          placeholder="Email or Phone Number"
          className="w-full border-b py-2 outline-none focus:border-black"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border-b py-2 outline-none focus:border-black"
        />

      </div>

      {/* Create Account */}
      <button className="w-full bg-red-500 hover:bg-red-600 transition text-white py-3 rounded">
        Create Account
      </button>

      {/* Google */}
      <button className="w-full border py-3 rounded flex items-center justify-center gap-2 hover:bg-gray-50">
        <FcGoogle/>
        Sign up with Google
      </button>

      {/* Login */}
      <p className="text-sm text-center">
        Already have account?{" "}
        <Link href="/login" className="underline">
          Log in
        </Link>
      </p>

    </div>
  );
}