import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <div className="px-10 py-10 space-y-16 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500">
            Home / Contact
        </p>

        <div className="grid md:grid-cols-2 gap-10 ">
            <ContactInfo />
            <ContactForm />
            
        </div>
    </div>
  );
}