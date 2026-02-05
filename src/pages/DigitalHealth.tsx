import { useState } from "react";
import GlobalMapSection from "@/components/shared/GlobalMapSection";
import { FileText, ClipboardList, Code2, FileCheck } from "lucide-react";
import GlobalMapSection from "@/components/shared/GlobalMapSection";

const DigitalHealth = () => {
  const [activeTab, setActiveTab] = useState("scribing");

  const tabs = [
    { id: "scribing", label: "Virtual Medical Scribing", icon: FileText },
    { id: "transcription", label: "Medical Transcription", icon: ClipboardList },
    { id: "coding", label: "Medical Coding", icon: Code2 },
    { id: "summarization", label: "Medical Summarization", icon: FileCheck },
  ];

  const features = [
    {
      title: "Accurate Documentation",
      description: "Free your physicians from charting. Our scribes document patient data swiftly, letting doctors focus on patient care.",
    },
    {
      title: "Streamlined Chart Management",
      description: "Enhance efficiency with prompt and organized charting, thanks to our expert virtual scribes.",
    },
    {
      title: "Administrative Support",
      description: "Our scribes go beyond charting, handling various administrative tasks with proficiency in medical terminology.",
    },
    {
      title: "Seamless EHR Integration",
      description: "Our scribes integrate effortlessly with your EHR systems, reducing errors and enhancing documentation quality.",
    },
  ];

  const benefits = [
    {
      title: "Cost-effective",
      description: "Our scribes go beyond charting, handling various administrative tasks with proficiency in medical terminology.",
    },
    {
      title: "Non-intrusive",
      description: "Our scribes go beyond charting, handling various administrative tasks with proficiency in medical terminology.",
    },
    {
      title: "Accessible for Remote Practices",
      description: "Our scribes go beyond charting, handling various administrative tasks with proficiency in medical terminology.",
    },
    {
      title: "24/7 Availability",
      description: "Around-the-clock support ensures your practice runs smoothly.",
    },
    {
      title: "Scalable Solutions",
      description: "Grow your team without financial risk, adapting to your practice's needs.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')",
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Digital Health</h1>
          <p className="text-xl md:text-2xl mb-4 italic">
            "Great things in business are never done by one person, they're done by a team of people"
          </p>
          <p className="text-lg">– Unknown</p>
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
              Streamlined and Accurate<br />
              Healthcare Documentation Services
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Prime source Global, we offer a range of specialized healthcare documentation services designed to streamline your medical practice and improve operational efficiency. Our team of experts brings industry-leading skills and in-depth knowledge of medical terminology, compliance standards, and patient care to help you maintain a smooth, accurate, and cost-effective workflow.
            </p>
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

      {/* Virtual Medical Scribing Content */}
      {activeTab === "scribing" && (
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Virtual Medical Scribing</h2>
              <p className="text-xl mb-4 font-semibold">
                Introducing Prime Source Global's Virtual Scribe Services: Precision and Efficiency in Healthcare Documentation!
              </p>
              <p className="text-lg text-gray-700 mb-12">
                Virtual medical scribes are revolutionizing healthcare across the U.S. Unlike traditional in-person scribes, Prime Source Global's virtual scribes offer unparalleled flexibility, serving practices from anywhere in the world.
              </p>

              <h3 className="text-2xl font-bold mb-8">Here's how they can elevate your practice:</h3>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-8">Benefits:</h3>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Medical Transcription Content */}
      {activeTab === "transcription" && (
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Medical Transcription</h2>
              <p className="text-lg text-gray-700">
                Professional medical transcription services converting audio recordings into accurate written documents. Our experienced transcriptionists ensure precision and confidentiality.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Medical Coding Content */}
      {activeTab === "coding" && (
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Medical Coding</h2>
              <p className="text-lg text-gray-700">
                Expert medical coding services ensuring accurate billing and compliance. Our certified coders stay updated with the latest ICD-10, CPT, and HCPCS codes.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Medical Summarization Content */}
      {activeTab === "summarization" && (
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Medical Summarization</h2>
              <p className="text-lg text-gray-700">
                Comprehensive medical record summarization services for legal, insurance, and healthcare providers. Clear, concise summaries that highlight key medical information.
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

export default DigitalHealth;
