import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-10 py-16 text-center">
      
      {/* Breadcrumb */}
      <p className="text-sm text-left text-gray-500 mb-10">
        Home / 404 Error
      </p>

      {/* Title */}
      <h1 className="text-[80px] font-bold mb-6">
        404 Not Found
      </h1>

      {/* Description */}
      <p className="text-gray-500 mb-8">
        Your visited page not found. You may go home page.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-3 rounded">
          Back to home page
        </button>
      </Link>

    </div>
  );
}