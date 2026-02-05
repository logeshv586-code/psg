import { useState } from "react";
import GlobalMapSection from "@/components/shared/GlobalMapSection";
import { Smartphone, Code, Cloud, ShoppingCart, Lightbulb } from "lucide-react";
import GlobalMapSection from "@/components/shared/GlobalMapSection";

const Software = () => {
  const [activeTab, setActiveTab] = useState("app");

  const tabs = [
    { id: "app", label: "App Development", icon: Smartphone },
    { id: "consulting", label: "Technology Consulting", icon: Lightbulb },
    { id: "custom", label: "Customized Software", icon: Code },
    { id: "cloud", label: "Cloud Computing", icon: Cloud },
    { id: "commerce", label: "Sales and Commerce", icon: ShoppingCart },
  ];

  const appServices = [
    {
      title: "IOS App Development",
      description: "Develop customized, high-performance iOS apps tailored to your business needs",
      icon: "🍎",
    },
    {
      title: "Android App Development",
      description: "Craft Android apps that captivate users and drive business forward",
      icon: "🤖",
    },
    {
      title: "Web App Development",
      description: "Build dynamic web apps that engage users and boost your business",
      icon: "💻",
    },
    {
      title: "Blockchain Development",
      description: "Enhance security and transparency with distributed ledger technology",
      icon: "🔗",
    },
    {
      title: "Internet of Things (IOT)",
      description: "Simplify lives with interconnected technologies for a seamless experience",
      icon: "☁️",
    },
    {
      title: "Artificial Intelligence",
      description: "Boost efficiency and cut errors with advanced technology",
      icon: "⚛️",
    },
    {
      title: "Machine Learning",
      description: "Empower your business with intelligent machine learning solutions",
      icon: "🎯",
    },
    {
      title: "Chatbots",
      description: "Enhance customer engagement with smart, responsive chatbots",
      icon: "🤖",
    },
    {
      title: "Augmented Reality/ Virtual Reality",
      description: "Experience seamless interaction between digital and real-world objects",
      icon: "🥽",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Software & AI</h1>
          <p className="text-xl md:text-2xl mb-4 italic">
            "The future of healthcare is not just about technology; it's about how to combine technology with human touch"
          </p>
          <p className="text-lg mb-8">– Steve Jobs</p>
          <button className="bg-accent text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all">
            Scroll Down ↓
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-accent text-slate-900 px-4 py-2 rounded-full font-semibold mb-6">
              SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Innovation<br />
              with Tailored IT Solutions
            </h2>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-gray-50 border-y">
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
                      : "bg-white text-gray-700 hover:bg-gray-100"
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

      {/* App Development Content */}
      {activeTab === "app" && (
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-center">APP DEVELOPMENT</h2>
              <p className="text-xl text-center text-gray-700 mb-12">
                Build a secure, future-proof application through the latest technologies and enhance your user experience
              </p>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technology Consulting Content */}
      {activeTab === "consulting" && (
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">TECHNOLOGY CONSULTING</h2>
              <p className="text-lg text-gray-700">
                Expert technology consulting services to guide your digital transformation journey. Strategic planning, architecture design, and implementation support.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Customized Software Content */}
      {activeTab === "custom" && (
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">CUSTOMIZED SOFTWARE</h2>
              <p className="text-lg text-gray-700">
                Tailored software solutions designed specifically for your business needs. From enterprise applications to specialized tools, we build software that fits your workflow.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Cloud Computing Content */}
      {activeTab === "cloud" && (
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">CLOUD COMPUTING</h2>
              <p className="text-lg text-gray-700">
                Scalable cloud solutions for modern businesses. Cloud migration, infrastructure management, and cloud-native application development.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Sales and Commerce Content */}
      {activeTab === "commerce" && (
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">SALES AND COMMERCE</h2>
              <p className="text-lg text-gray-700">
                E-commerce platforms and sales automation solutions. Build powerful online stores and streamline your sales processes with cutting-edge technology.
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

export default Software;
