export default function ContactForm() {
  return (
    <div className=" p-6 space-y-6">
      
      {/* Top inputs */}
      <div className="grid md:grid-cols-3 gap-4">
        
        <input
          type="text"
          placeholder="Your Name *"
          className="bg-gray-200 px-4 py-3 outline-none"
        />

        <input
          type="email"
          placeholder="Your Email *"
          className="bg-gray-200 px-4 py-3 outline-none"
        />

        <input
          type="text"
          placeholder="Your Phone *"
          className="bg-gray-200 px-4 py-3 outline-none"
        />

      </div>

      {/* Message */}
      <textarea
        placeholder="Your Message"
        rows={6}
        className="w-full bg-gray-200 px-4 py-3 outline-none"
      />

      {/* Button */}
      <div className="flex justify-end">
        <button className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-3 rounded">
          Send Message
        </button>
      </div>

    </div>
  );
}