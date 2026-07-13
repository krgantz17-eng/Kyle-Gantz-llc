import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold">
          Kyle Gantz LLC
        </h1>

        <h2 className="mt-6 text-2xl md:text-4xl text-blue-400">
          Software Design • Development • Digital Solutions
        </h2>

        <p className="mt-8 text-lg text-gray-300 max-w-3xl">
          Helping businesses transform ideas into powerful digital experiences
          through custom software, modern websites, and innovative technology
          solutions.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
          >
            Get Started
          </a>

          <a
            href="#services"
            className="rounded-lg border border-gray-700 px-6 py-3 font-semibold hover:bg-gray-900"
          >
            Services
          </a>
        </div>
      </section>


      <section id="about" className="px-6 py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold">
            About Kyle Gantz LLC
          </h2>

          <p className="mt-6 text-gray-300 max-w-4xl">
            Kyle Gantz LLC is a software design and development company
            specializing in helping businesses of all sizes establish and
            improve their digital presence. We create custom solutions that
            combine creativity, technology, and functionality to help clients
            achieve their goals.

            Whether you are a small business looking to build your first
            online presence or a larger company needing custom technology
            solutions, Kyle Gantz LLC provides reliable freelance development
            and software services tailored to your needs.
          </p>

        </div>
      </section>


      <section id="services" className="px-6 py-20 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-8">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Custom Software Development",
            "Website Design & Development",
            "Web Applications",
            "UI/UX Design",
            "Business Automation",
            "Freelance Development"
          ].map((service) => (

            <div
              key={service}
              className="rounded-xl border border-gray-800 bg-gray-950 p-6"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {service}
              </h3>

              <p className="mt-3 text-gray-400">
                Professional technology solutions designed around your business goals.
              </p>

            </div>

          ))}

        </div>

      </section>


      <section id="contact" className="px-6 py-20 bg-gray-950">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold">
            Contact
          </h2>

          <p className="mt-4 text-gray-300">
            Email: kylegantzllc@gmail.com
          </p>

          <p className="text-gray-300">
            Phone: (814) 424-4044
          </p>

        </div>

      </section>


      <Footer />

    </main>
  );
}
