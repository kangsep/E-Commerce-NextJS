import { Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="p-6 space-y-6">
      
      {/* Call */}
      <div className="flex gap-4 items-start">
        <div className="bg-red-500 p-3 rounded-full text-white">
          <Phone size={18} />
        </div>

        <div>
          <h3 className="font-semibold">Call To Us</h3>
          <p className="text-sm text-gray-500">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-sm mt-1">
            Phone: +8801611112222
          </p>
        </div>
      </div>

      <hr />

      {/* Email */}
      <div className="flex gap-4 items-start">
        <div className="bg-red-500 p-3 rounded-full text-white">
          <Mail size={18} />
        </div>

        <div>
          <h3 className="font-semibold">Write To US</h3>
          <p className="text-sm text-gray-500">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-sm mt-1">
            customer@exclusive.com
          </p>
          <p className="text-sm">
            support@exclusive.com
          </p>
        </div>
      </div>

    </div>
  );
}