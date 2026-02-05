import { useState } from "react";
import GlobalMapSection from "@/components/shared/GlobalMapSection";
import { Building2, TreeDeciduous, Layers, Wrench, Zap } from "lucide-react";
import GlobalMapSection from "@/components/shared/GlobalMapSection";

const Construction = () => {
  const [activeTab, setActiveTab] = useState("timber");
  const [activeSubTab, setActiveSubTab] = useState("interiors");

  const tabs = [
    { id: "timber", label: "Timber", icon: TreeDeciduous },
    { id: "plywood", label: "Plywood", icon: Layers },
    { id: "mdf", label: "MDF & Chip board", icon: Layers },
    { id: "hardwares", label: "Hardwares", icon: Wrench },
    { id: "mep", label: "MEP", icon: Zap },
  ];

  const woodTypes = [
    "Teak Wood",
    "Meranti",
    "Iroko",
    "Mahogany",
    "Dabema",
    "Oak",
    "okume",
    "merbau",
    "balau",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80')",
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            CONSTRUCTION &<br />
            INTERIOR SUPPLIES
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted source for high-quality construction and interior supplies to elevate every project
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 py-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-accent text-slate-900"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timber Content */}
      {activeTab === "timber" && (
        <section className="py-16 bg-[#f5f0e8]">
          <div className="container mx-auto px-4">
            {/* Sub Tabs */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveSubTab("interiors")}
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  activeSubTab === "interiors"
                    ? "bg-accent text-slate-900"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Timber for Interiors
              </button>
              <button
                onClick={() => setActiveSubTab("construction")}
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  activeSubTab === "construction"
                    ? "bg-accent text-slate-900"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Timber for Construction
              </button>
            </div>

            {/* Timber for Interiors Content */}
            {activeSubTab === "interiors" && (
              <div>
                <h2 className="text-4xl font-bold text-center mb-8">
                  TIMBER FOR INTERIORS
                </h2>
                <div className="max-w-4xl mx-auto mb-12 text-lg text-gray-700 space-y-4">
                  <p>
                    Wood is an incredibly popular product that is often used by architects and designers to decorate the interiors of our buildings. This is because wood is durable, economical, easy to work with, long-lasting, and combines effortlessly with other textures to create a striking, inspiring aesthetic. As the most sustainable building material available, wood also brings with it additional benefits such as noise absorption and rapid heating and cooling.
                  </p>
                  <p>
                    The use of solid wood in interiors has increased significantly in recent years ranging from wooden doors, door frames to interior designing and wooden flooring. From hardwood from east to medium and soft woods till west, PSG offers wide range of sawn timber species across the globe.
                  </p>
                </div>

                {/* Wood Types Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                  {woodTypes.map((wood, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-200 to-amber-600 mb-4 shadow-lg"></div>
                      <h3 className="text-lg font-semibold text-center">{wood}</h3>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Timber for Construction Content */}
            {activeSubTab === "construction" && (
              <div>
                <h2 className="text-4xl font-bold text-center mb-8">
                  TIMBER FOR CONSTRUCTION
                </h2>
                <div className="max-w-4xl mx-auto text-lg text-gray-700 text-center">
                  <p>
                    High-quality construction timber for structural applications, scaffolding, formwork, and building projects. Our construction-grade timber meets international standards for strength and durability.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Plywood Content */}
      {activeTab === "plywood" && (
        <section className="py-16 bg-[#f5f0e8]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">PLYWOOD</h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 text-center">
              <p>
                Premium quality plywood for various applications including furniture, cabinetry, flooring, and construction. Available in multiple grades and thicknesses.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* MDF & Chip Board Content */}
      {activeTab === "mdf" && (
        <section className="py-16 bg-[#f5f0e8]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">
              MDF & CHIP BOARD
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 text-center">
              <p>
                High-density MDF and chip board products for furniture manufacturing, interior design, and construction applications. Smooth finish and excellent workability.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Hardwares Content */}
      {activeTab === "hardwares" && (
        <section className="py-16 bg-[#f5f0e8]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">HARDWARES</h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 text-center">
              <p>
                Complete range of construction and interior hardware including door fittings, locks, hinges, handles, and accessories from leading brands.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* MEP Content */}
      {activeTab === "mep" && (
        <section className="py-16 bg-[#f5f0e8]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">
              MEP (MECHANICAL, ELECTRICAL & PLUMBING)
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 text-center">
              <p>
                Comprehensive MEP solutions and supplies for residential and commercial projects. Quality products for HVAC, electrical systems, and plumbing installations.
              </p>
            </div>
          </div>
        </section>
      )}

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

export default Construction;
