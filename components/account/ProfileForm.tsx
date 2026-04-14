export default function ProfileForm() {
  return (
    <div className="border rounded p-6 space-y-6">
      
      <h2 className="text-red-500 font-semibold">
        Edit Your Profile
      </h2>

      {/* Row 1 */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          defaultValue=""
          placeholder="First Name"
          className="bg-gray-100 px-4 py-3 outline-none"
        />
        <input
          type="text"
          defaultValue=""
          placeholder="Last Name"
          className="bg-gray-100 px-4 py-3 outline-none"
        />
      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="email"
          defaultValue=""
          placeholder="Email"
          className="bg-gray-100 px-4 py-3 outline-none"
        />
        <input
          type="text"
          defaultValue=""
          placeholder="Address"
          className="bg-gray-100 px-4 py-3 outline-none"
        />
      </div>

      {/* Password */}
      <div className="space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          className="bg-gray-100 px-4 py-3 w-full outline-none"
        />
        <input
          type="password"
          placeholder="New Password"
          className="bg-gray-100 px-4 py-3 w-full outline-none"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="bg-gray-100 px-4 py-3 w-full outline-none"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4 items-center">
        <button className="text-gray-500">
          Cancel
        </button>
        <button className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-2 rounded">
          Save Changes
        </button>
      </div>

    </div>
  );
}