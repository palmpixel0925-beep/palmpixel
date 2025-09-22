export default function Gallery() {
  const galleryItems = [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 text-center mb-10">
          Visual Gallery
        </h1>
        <p className="text-gray-300 text-center max-w-xl mx-auto mb-12">
          Showcase of digital marketing projects: website mockups, social media
          carousels, and bold, engaging ad campaigns.{" "}
        </p>

        <div className="flex justify-center items-center flex-wrap gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-lg border border-yellow-400 transform hover:scale-105 transition"
            >
              <img
                src={item}
                alt={`Mockup ${idx + 1}`}
                className="w-full h-54 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
