import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="bg-secondary py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-muted-foreground">HOME &gt; PRIVACY POLICY</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Privacy Policy
          </h1>
          <div className="max-w-3xl text-muted-foreground leading-relaxed space-y-6">
            <p>
              This Privacy Policy explains how the Site collects, uses, stores, and protects
              your personal information when you visit or interact with the Site.
            </p>

            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p>
              This Privacy Policy explains how the Site collects, uses, stores, and protects
              your personal information when you visit or interact with the Site.
            </p>

            <h2 className="text-xl font-semibold">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Personal Data:</span> Name, email address, phone
                number, and any other data you voluntarily provide, such as through a contact
                form.
              </li>
              <li>
                <span className="font-medium">Usage Data:</span> IP address, browser type,
                pages visited, date and time of visit, and other technical log data that is
                collected automatically.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
            <p>We may use collected data to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to your inquiries and provide services.</li>
              <li>Improve Site features and user experience.</li>
              <li>Send updates, newsletters, or marketing communications, only with consent.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2 className="text-xl font-semibold">4. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to analyze Site usage, remember
              preferences, and improve functionality. Most browsers allow you to control cookie
              settings.
            </p>

            <h2 className="text-xl font-semibold">5. Data Sharing</h2>
            <p>We will not sell or rent your personal data to third parties. We may share information with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Service providers that support the Site, such as hosting and analytics.</li>
              <li>Legal authorities, if required by law or to protect rights.</li>
            </ul>

            <h2 className="text-xl font-semibold">6. Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect personal
              data from unauthorized access, loss, or misuse.
            </p>

            <h2 className="text-xl font-semibold">7. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data. You
              can also opt out of marketing communications.
            </p>

            <h2 className="text-xl font-semibold">8. Children’s Privacy</h2>
            <p>
              The Site is not intended for children under 13. We do not knowingly collect
              personal data from minors.
            </p>

            <h2 className="text-xl font-semibold">9. Changes to Policy</h2>
            <p>
              We may update this Privacy Policy periodically. The updated date will be
              indicated at the top of the policy, and your continued use of the Site
              constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-xl font-semibold">10. Contact Us</h2>
            <p>For questions or requests regarding this Privacy Policy, contact:</p>
            <p>
              Email: Sales@psgbiz.com
              <br />
              Address: Compass Building - Al Shuhada' Rd
Al Hamra Industrial Free Zone
Ras Al Khaimah - UAE
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
