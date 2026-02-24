import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import careerImage from "@/assets/career-hero.webp";
import sideImage from "@/assets/new images/Enhanced IT Professional.webp";

const Career = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    countryOfResidence: "",
    degree: "",
    major: "",
    graduationYear: "",
    experienceLevel: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (resumeFile && resumeFile.type !== "application/pdf") {
      toast({
        title: "Invalid resume file",
        description: "Please upload a PDF file only.",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    toast({
      title: "Enquiry received!",
      description: "Please also email your resume to Sales@psgbiz.com",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      nationality: "",
      countryOfResidence: "",
      degree: "",
      major: "",
      graduationYear: "",
      experienceLevel: "",
    });
    setResumeFile(null);
    setIsSubmitting(false);
  };

  const inputClassName =
    "w-full h-10 px-3 text-sm border border-[#8a8a8a] bg-[#eaf6e6] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a8a8a]";
  const labelClassName = "block text-xs text-[#2c4d64] mb-1 font-medium";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={careerImage}
            alt="Join with us"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center z-10 text-white">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Join with us
          </h1>
          <p className="text-lg max-w-xl mx-auto leading-relaxed text-white/90">
            Take the first step toward an exciting career with us! Fill out
            the form and email your resume to{" "}
            <a
              href="mailto:Sales@psgbiz.com"
              className="text-white underline underline-offset-2 hover:text-accent transition-colors"
            >
              Sales@psgbiz.com
            </a>
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gradient-to-b from-[#d9eef4] to-[#e8f5df]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Side: Side Image */}
            <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-full">
              <img
                src={sideImage}
                alt="Career opportunities"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Build Your Future</h3>
                <p className="text-white/90">
                  Join a team that values innovation, growth, and excellence. Your journey starts here.
                </p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-7/12 p-6 sm:p-8 lg:p-10 bg-white/40">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className={labelClassName}>
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      placeholder="Enter first name"
                      className={inputClassName}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className={labelClassName}>
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      placeholder="Enter last name"
                      className={inputClassName}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClassName}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Enter email address"
                      className={inputClassName}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClassName}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Enter phone number"
                      className={inputClassName}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="nationality" className={labelClassName}>
                      Nationality
                    </label>
                    <input
                      id="nationality"
                      name="nationality"
                      type="text"
                      value={formData.nationality}
                      onChange={(e) =>
                        setFormData({ ...formData, nationality: e.target.value })
                      }
                      placeholder="Enter nationality"
                      className={inputClassName}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="countryOfResidence" className={labelClassName}>
                      Country of Residence
                    </label>
                    <input
                      id="countryOfResidence"
                      name="countryOfResidence"
                      type="text"
                      value={formData.countryOfResidence}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          countryOfResidence: e.target.value,
                        })
                      }
                      placeholder="Enter country"
                      className={inputClassName}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="degree" className={labelClassName}>
                      Degree
                    </label>
                    <input
                      id="degree"
                      name="degree"
                      type="text"
                      value={formData.degree}
                      onChange={(e) =>
                        setFormData({ ...formData, degree: e.target.value })
                      }
                      placeholder="Enter degree"
                      className={inputClassName}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="major" className={labelClassName}>
                      Major
                    </label>
                    <input
                      id="major"
                      name="major"
                      type="text"
                      value={formData.major}
                      onChange={(e) =>
                        setFormData({ ...formData, major: e.target.value })
                      }
                      placeholder="Enter major"
                      className={inputClassName}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="graduationYear" className={labelClassName}>
                      Graduation Year
                    </label>
                    <input
                      id="graduationYear"
                      name="graduationYear"
                      type="text"
                      value={formData.graduationYear}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          graduationYear: e.target.value,
                        })
                      }
                      placeholder="Enter year"
                      className={inputClassName}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="experienceLevel" className={labelClassName}>
                      Experience Level
                    </label>
                    <input
                      id="experienceLevel"
                      name="experienceLevel"
                      type="text"
                      value={formData.experienceLevel}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          experienceLevel: e.target.value,
                        })
                      }
                      placeholder="Enter experience level"
                      className={inputClassName}
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label htmlFor="resume" className={labelClassName}>
                    Upload Resume (PDF Only)
                  </label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-[#d44b4b]/10 file:text-[#d44b4b] hover:file:bg-[#d44b4b]/20 transition-colors cursor-pointer"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#d44b4b] text-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-[#b83a3a] transition-all duration-300 shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed uppercase"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
