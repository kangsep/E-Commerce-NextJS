import AccountSidebar from "@/components/account/AccountSidebar";
import ProfileForm from "@/components/account/ProfileForm";

export default function AccountPage() {
  return (
    <div className="px-10 py-10 space-y-6">
      
      {/* Breadcrumb */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Home / My Account
        </p>

        <p className="text-sm">
          Welcome! <span className="text-red-500">Seseorang</span>
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-4 gap-10">
        
        {/* Sidebar */}
        <AccountSidebar />

        {/* Form */}
        <div className="md:col-span-3">
          <ProfileForm />
        </div>

      </div>

    </div>
  );
}