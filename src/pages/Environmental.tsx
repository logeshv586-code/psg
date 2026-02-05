import { useState } from "react";
import GlobalMapSection from "@/components/shared/GlobalMapSection";
import { Leaf, ChevronDown, ChevronUp } from "lucide-react";
import GlobalMapSection from "@/components/shared/GlobalMapSection";

const Environmental = () => {
  const [openSection, setOpenSection] = useState<string | null>("management");

  const services = [
    {
      id: "management",
      title: "ENVIRONMENTAL MANAGEMENT SUPPORT",
      items: [
        "Preparation of EIA/ESIA Reports",
        "Modeling of Air Emissions, Soil, Groundwater Spills and Leaks, Marine Discharges and Noise",
        "Preparation of Emission Inventories",
        "Best Available Technology Evaluations",
        "Preparation of Environmental Basis of Design Documents",
        "Preparation of Emergency Response Manuals and Procedures",
      ],
    },
    {
      id: "sustainability",
      title: "SUSTAINABILITY MANAGEMENT REPORT",
      items: [
        "Preparation of Sustainability Reports following GRI Standards",
        "Preparation of Greenhouse Gas Emission Inventories",
        "Assessment for Ecological Footprint",
        "Identifying, Aligning and Registering projects under Clean Development Mechanism (CDM)",
      ],
    },
    {
      id: "technologies",
      title: "INNOVATIVE TECHNOLOGIES FOR SUSTAINABILITY",
      items: [
        "Identify and promote unique and innovative technologies that achieves healthy disruption of conventional market dynamics",
        "Help our Clients think out of the box and contribute to Sustainable Development",
        "Establish robust business models for promoting Sustainable Development Technologies",
      ],
    },
    {
      id: "preparedness",
      title: "ORGANIZATIONAL PREPAREDNESS",
      items: [
        "Developing and Implementing management systems following international standards",
        "Help our Clients think out of the box and contribute to Sustainable Development",
      ],
    },
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-teal-800 to-blue-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80')",
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Environmental<br />
            consultancy and Studies
          </h1>
          <p className="text-xl md:text-2xl mb-4 italic">
            "What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another"
          </p>
          <p className="text-lg">– Mahatma</p>
          <button className="mt-8 bg-accent text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all">
            Scroll Down ↓
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-accent text-slate-900 px-4 py-2 rounded-full font-semibold mb-6">
              SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Shaping a Sustainable<br />
              Future Together
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At PSG, we provide expert environmental consulting services designed to help businesses implement sustainable practices, minimize their environmental footprint, and comply with global sustainability standards. Our comprehensive solutions guide organizations toward long-term sustainability, ensuring a positive impact on the planet and future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Accordion Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-green-100"
                >
                  <button
                    onClick={() => toggleSection(service.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-green-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Leaf className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-bold text-left">{service.title}</h3>
                    </div>
                    {openSection === service.id ? (
                      <ChevronUp className="w-6 h-6 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-600" />
                    )}
                  </button>
                  {openSection === service.id && (
                    <div className="px-6 py-4 bg-green-50/50 border-t border-green-100">
                      <ul className="space-y-3">
                        {service.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                alt="Environmental Sustainability"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    Protecting Our Planet
                  </h3>
                  <p className="text-lg">
                    Sustainable solutions for a better tomorrow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-slate-900 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-accent/10 backdrop-blur-sm p-12 rounded-2xl border border-accent/20">
            <h2 className="text-4xl font-bold mb-6">
              Innovating for a<br />
              Sustainable Future<br />
              Worldwide
            </h2>
            <button className="bg-accent text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all">
              Learn More →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Environmental;
