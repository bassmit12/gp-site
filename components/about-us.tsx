import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-mono text-white">
          About Me
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/gp.jpg"
                alt="Metal craftsman with safety equipment"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold font-mono text-white">
                Craftsmanship Meets Innovation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                As a solo contractor with a passion for metalworking, I&apos;ve
                taken my craft to the next level by designing and building my
                own CNC plasma cutter. This unique approach allows me to offer
                unmatched precision and customization in every project I
                undertake.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey began with a vision to create something extraordinary
                – not just metal parts, but precisely crafted solutions for my
                clients&apos; needs. By building my own CNC machine, I gained
                intimate knowledge of every aspect of the cutting process,
                ensuring the highest quality results for every project.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether you need custom parts, artistic metalwork, or industrial
                components, you&apos;re working directly with the craftsman who
                built the machine that will bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
