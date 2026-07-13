import Portfolio from "@/components/Portfolio";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold">
          Kyle Gantz LLC
        </h1>

        <h2 className="mt-6 text-2xl md:text-4xl text-blue-400">
          Software Design • Development • Digital Solutions
        </h2>

        <p className="mt-8 text-lg text-gray-300 max-w-3xl">
          Kyle Gantz LLC helps businesses of all sizes bring their ideas to
          life through custom software development, modern websites, and
          innovative digital solutions. From small businesses to larger
          organizations, we create technology designed around your goals.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
          >
            Request a Consultation
          </a>

          <a
            href="#services"
            className="rounded-lg border border-gray-600 px-6 py-3 font-semibold hover:bg-gray-900"
          >
            Our Services
          </a>
        </div>
      </section>

      <section id="services" className="px-6 py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto">
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
                className="rounded-xl border border-gray-800 bg-black p-6"
              >
                <h3 className="text-xl font-semibold text-blue-400">
                  {service}
                </h3>
                <p className="mt-3 text-gray-400">
                  Professional digital solutions built to help your business grow.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
<Portfolio />
<section id="contact" className="px-6 py-20 bg-gray-950">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold">
      Let's Build Something Great
    </h2>

    <p className="mt-4 text-gray-300 max-w-2xl">
      Have a project idea, need a website, or looking for custom software
      solutions? Kyle Gantz LLC is ready to help turn your ideas into reality.
    </p>

    <div className="mt-8">

      <a
        href="mailto:kylegantzllc@gmail.com"
        className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-500"
      >
        Email Kyle Gantz LLC
      </a>

    </div>

    <div className="mt-6 text-gray-300">
      <p>Email: kylegantzllc@gmail.com</p>
      <p>Phone: (814) 424-4044</p>
    </div>

  </div>

</section>
        <h2 className="text-3xl font-bold">
          Contact Us
        </h2>

        <p className="mt-4 text-gray-300">
          Email: kylegantzllc@gmail.com
        </p>

        <p className="text-gray-300">
          Phone: (814) 424-4044
        </p>
      </section>
    </main>
  );
}
