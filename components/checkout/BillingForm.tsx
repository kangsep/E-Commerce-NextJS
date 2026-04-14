export default function BillingForm() {
  return (
    <div className="space-y-4">
      
      {[
        "First Name*",
        "Company Name",
        "Street Address*",
        "Apartment, floor, etc. (optional)",
        "Town/City*",
        "Phone Number*",
        "Email Address*",
      ].map((label, i) => (
        <div key={i}>
          <label className="text-sm text-gray-500">
            {label}
          </label>
          <input
            type="text"
            className="w-full mt-1 border px-4 py-3 bg-gray-100 outline-none rounded"
          />
        </div>
      ))}

      {/* Checkbox */}
      <div className="flex items-center gap-2 mt-4">
        <input type="checkbox" defaultChecked />
        <span className="text-sm">
          Save this information for faster check-out next time
        </span>
      </div>

    </div>
  );
}