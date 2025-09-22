import { BsWhatsapp } from "react-icons/bs";

export default function Whatsapp() {
  // Pre-filled message (URL encoded)
  const message = encodeURIComponent(
    "Hi! Ready to elevate your Dubai brand? Let’s chat."
  );

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href={`https://wa.me/919039353000?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white 
          rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <BsWhatsapp className="text-3xl" />
      </a>
    </div>
  );
}
