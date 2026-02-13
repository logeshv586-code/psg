import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import careerImage from "@/assets/html-css-collage-concept-with-person-1-768x512.jpg.jpeg";

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
    "w-full h-11 md:h-9 px-3 text-[15px] md:text-sm border border-[#8a8a8a] bg-[#eaf6e6] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a8a8a]";
  const labelClassName = "block text-[12px] text-[#2c4d64] mb-1";

  return (
    <Layout>
      <section className="bg-gradient-to-b from-[#d9eef4] to-[#e8f5df]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="py-10 lg:py-14 text-center">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              Join with us
            </h1>
            <p className="mt-3 text-sm text-foreground/80 max-w-xl mx-auto leading-relaxed">
              Take the first step toward an exciting career with us! Fill out
              the form and email your resume to{" "}
              <a
                href="mailto:Sales@psgbiz.com"
                className="text-foreground underline underline-offset-2"
              >
                Sales@psgbiz.com
              </a>
            </p>
          </div>

          <div className="pb-16 lg:pb-20">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 justify-center items-stretch lg:items-start">
              <div className="w-full max-w-[440px] lg:w-[440px] mx-auto lg:mx-0">
                <div className="rounded-2xl overflow-hidden bg-white/40 shadow-soft">
                  <img
                    src={careerImage}
                    alt="Join with us"
                    className="w-full h-full object-cover aspect-[4/3]"
                    draggable={false}
                  />
                </div>
              </div>

              <form
                onSubmit={onSubmit}
                className="w-full max-w-[440px] lg:max-w-[420px] mx-auto lg:mx-0 space-y-4 md:space-y-3"
              >
                <div>
                  <label htmlFor="firstName" className={labelClassName}>
                    Your first name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    placeholder="enter your first name"
                    className={inputClassName}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClassName}>
                    Your last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    placeholder="enter your last name"
                    className={inputClassName}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClassName}>
                    Your email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="enter your email address"
                    className={inputClassName}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClassName}>
                    Your phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="enter your phone number"
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
                    placeholder="enter your Nationality"
                    className={inputClassName}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="countryOfResidence"
                    className={labelClassName}
                  >
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
                    placeholder="enter Country of Residence"
                    className={inputClassName}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="degree" className={labelClassName}>
                    Your Degree
                  </label>
                  <input
                    id="degree"
                    name="degree"
                    type="text"
                    value={formData.degree}
                    onChange={(e) =>
                      setFormData({ ...formData, degree: e.target.value })
                    }
                    placeholder="enter Your Degree"
                    className={inputClassName}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="major" className={labelClassName}>
                    Your Major
                  </label>
                  <input
                    id="major"
                    name="major"
                    type="text"
                    value={formData.major}
                    onChange={(e) =>
                      setFormData({ ...formData, major: e.target.value })
                    }
                    placeholder="enter your Major"
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
                    placeholder="enter your graduation year"
                    className={inputClassName}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="experienceLevel" className={labelClassName}>
                    Level of Experience
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
                    placeholder="enter your experience"
                    className={inputClassName}
                    required
                  />
                </div>

                <div className="pt-2">
                  <label htmlFor="resume" className={labelClassName}>
                    Upload Your Resume (PDF Only)
                  </label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                    className="block w-full text-[15px] md:text-sm file:mr-3 file:rounded-sm file:border file:border-[#8a8a8a] file:bg-white/80 file:px-3 file:py-2 file:text-sm file:font-medium"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto border border-[#d44b4b] text-[#d44b4b] bg-transparent px-6 py-2 text-sm rounded-none active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Enquire now"}
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
