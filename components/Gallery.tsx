import Image from "next/image";
import FadeIn from "./FadeIn";

const galleryItems = [
  {
    src: "/images/project1.jpg",
    alt: "Custom metal sign",
  },
  {
    src: "/images/project2.jpg",
    alt: "Intricate metal artwork",
  },
  {
    src: "/images/project3.jpg",
    alt: "Industrial metal component",
  },
  {
    src: "/images/project1.jpg",
    alt: "Decorative metal panel",
  },
  {
    src: "/images/project2.jpg",
    alt: "Precision-cut metal part",
  },
  {
    src: "/images/project3.jpg",
    alt: "Artistic metal sculpture",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Our Work
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition duration-300 ease-in-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-white text-lg font-semibold">{item.alt}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
