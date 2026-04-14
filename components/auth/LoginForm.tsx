"use client";

import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md space-y-6">
      
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold">
          Log in to Exclusive
        </h1>
        <p className="text-gray-500 text-sm">
          Enter your details below
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        
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

      {/* Actions */}
      <div className="flex items-center justify-between">
        
        <button className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-2 rounded">
          Log In
        </button>

        <Link
          href="/forgot-password"
          className="text-red-500 text-sm"
        >
          Forget Password?
        </Link>

      </div>

    </div>
  );
}