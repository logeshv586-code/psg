import { useState } from "react";
import GlobalMapSection from "@/components/shared/GlobalMapSection";
import { Plane, MapPin, Users, Heart, Globe } from "lucide-react";
import GlobalMapSection from "@/components/shared/GlobalMapSection";

const Tourism = () => {
  const [activeTab, setActiveTab] = useState("uae");

  const tabs = [
    { id: "uae", label: "UAE Tourism", icon: MapPin },
    { id: "saudi", label: "Saudi Tourism", icon: MapPin },
    { id: "solo", label: "Solo Travelers & Backpackers", icon: Users },
    { id: "honeymoon", label: "Romantic Honeymoon Packages", icon: Heart },
    { id: "group", label: "Group Tours with a Personal Touch", icon: Globe },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80')",
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Tourism</h1>
          <p className="text-xl md:text-2xl mb-4 italic">
            "Traveling, It leaves you speechless, then turns you into a storyteller"
          </p>
          <p className="text-lg mb-8">– Ibn Battuta</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-accent text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all">
              Get in touch
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/30">
              Scroll Down ↓
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore the World<br />
              with PSG Tourism
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start planning your dream getaway today and create memories that will last forever.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At PSG Tourism, we focus on creating custom travel experiences for all types of travellers. Whether you're seeking adventure through trekking and hiking, looking to Indulge in a Romantic Honeymoon, or Planning a memorable Group Tour, we offer the perfect package for you. Our carefully crafted itineraries span destinations across the globe, offering something for every type of explorer.
            </p>
          </div>
        </div>
      </section>

      {/* Tourism Images Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80"
                alt="Skydiving"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80"
                alt="Burj Khalifa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80"
                alt="Dubai Marina"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&q=80"
                alt="Desert Safari"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80"
                alt="Ferrari World"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80"
                alt="Couple Travel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Effortless Travel Solutions */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-accent text-slate-900 px-4 py-2 rounded-full font-semibold mb-6">
              WHY CHOOSE PSG
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Effortless Travel<br />
              Solutions with PSG
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                At PSG Tourism, we focus on creating custom travel experiences for all types of travellers. Whether you're seeking adventure through trekking and hiking, looking to Indulge in a Romantic Honeymoon, or Planning a memorable Group Tour, we offer the perfect package for you. Our carefully crafted itineraries span destinations across the globe, offering something for every type of explorer.
              </p>
              <p>
                In addition to visa services, PSG provides affordable, tailored tourism packages designed to meet the needs of both leisure and business travelers. Our solutions are crafted to deliver exceptional experiences without exceeding your budget.
              </p>
              <p>
                Choose PSG for hassle-free travel planning, expert guidance, and seamless support every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISA Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-accent text-slate-900 px-4 py-2 rounded-full font-semibold mb-6">
              WHAT WE DO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">VISA Services</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
              <p>
                At PSG, we offer comprehensive end-to-end visa consultation services for GCC countries, ensuring a smooth and efficient application process.
              </p>
              <p>
                Our expert team simplifies the visa procedure with minimal documentation requirements saving your valuable time and effort.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Preparation of Dubai Visas</h3>
                <p className="text-gray-700">Fast and reliable Dubai visa processing</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Preparation of Saudi Arabia Visas</h3>
                <p className="text-gray-700">Expert Saudi visa consultation and processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tourism Packages Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block bg-accent text-slate-900 px-4 py-2 rounded-full font-semibold mb-6">
              WHAT WE DO
            </span>
            <h2 className="text-4xl font-bold mb-8">PSG Tourism</h2>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-accent text-slate-900"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* UAE Tourism Content */}
            {activeTab === "uae" && (
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-3xl font-bold mb-4">UAE Tourism</h3>
                <p className="text-lg text-gray-700">
                  At PSG, we are delighted to offer an exclusive selection of customized tour packages tailored to help you explore the most Iconic and Breathtaking attractions across the UAE. Whether you're seeking an adventure, relaxation or cultural discovery we ensure every experience is unforgettable.
                </p>
              </div>
            )}

            {/* Other tabs content */}
            {activeTab !== "uae" && (
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-3xl font-bold mb-4">{tabs.find(t => t.id === activeTab)?.label}</h3>
                <p className="text-lg text-gray-700">
                  Customized travel experiences tailored to your preferences. Contact us to learn more about our exclusive packages.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Souvenir Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">A Thoughtful Souvenir</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                We believe the memories of your travel should live on long after you return home.
              </p>
              <p>
                As a token of appreciation for choosing PSG, we present our valued customers with a special gift at the end of every tour.
              </p>
              <p>
                These keepsakes are our way of saying thank you and ensuring that PSG will always be a part of your travel story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-accent text-slate-900 px-4 py-2 rounded-full font-semibold mb-6">
              ENQUIRE NOW
            </span>
            <h2 className="text-4xl font-bold mb-8">
              Let PSG Tourism Craft<br />
              Your Next Adventure
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              At PSG Tourism, we believe that travel is more than just a trip. It's an opportunity to create meaningful & life-changing experiences. We are here to help the travellers to Craft an unforgettable journey that resonates long after the journey ends.
            </p>

            <div className="bg-purple-50 p-8 rounded-xl">
              <form className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your first name"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="text"
                  placeholder="Your last name"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="date"
                  placeholder="Your date"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="text"
                  placeholder="Your destination"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="number"
                  placeholder="Number of guests"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent md:col-span-2"
                />
                <button
                  type="submit"
                  className="md:col-span-2 bg-accent text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all"
                >
                  Enquire now
                </button>
              </form>
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

export default Tourism;
