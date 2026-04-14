import SignupForm from "@/components/auth/SignupForm";
import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="grid md:grid-cols-2 min-h-[80vh]">
      
      {/* Left Image */}
      <div className="relative hidden md:block">
        <Image
          src="/placeholder/signup.png"
          alt="signup"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="flex items-center justify-center px-10">
        <SignupForm />
      </div>

    </div>
  );
}