import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid md:grid-cols-2 min-h-[80vh]">
      
      {/* LEFT IMAGE */}
      <div className="relative hidden md:block">
        <Image
          src="/placeholder/signup.png"
          alt="login"
          fill
          className="object-cover"
        />
      </div>

      {/* kedowefjfbjbo  */}
      <div className="flex items-center justify-center px-10">
        <LoginForm />
      </div>

    </div>
  );
}