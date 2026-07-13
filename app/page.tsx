import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kyle Gantz LLC | Software Design & Development",
  description: "Professional software design and development services by Kyle Gantz",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Software Solutions
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Custom design and development services tailored to your business needs.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Web Development
              </h3>
              <p className="text-gray-600">
                Building modern, responsive web applications using latest technologies and best practices.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                UI/UX Design
              </h3>
              <p className="text-gray-600">
                Creating beautiful and intuitive user interfaces that engage and delight your users.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Consulting
              </h3>
              <p className="text-gray-600">
                Expert guidance on technology selection, architecture, and implementation strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Project One</h3>
              <p className="text-gray-600 mb-4">
                Description of a recent project showcasing expertise in modern web technologies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Project Two</h3>
              <p className="text-gray-600 mb-4">
                Another successful project demonstrating design and development capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
