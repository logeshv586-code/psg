import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="bg-secondary py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-muted-foreground">HOME &gt; TERMS OF SERVICE</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Terms of Service
          </h1>
          <div className="max-w-3xl text-muted-foreground leading-relaxed space-y-6">
            <p>
              By accessing or using this website (the “Site”), you agree to be bound by these
              Terms of Service (“Terms”). If you do not agree with any part of these Terms, do
              not use the Site.
            </p>

            <h2 className="text-xl font-semibold">1. Agreement to Terms</h2>
            <p>
              By accessing or using this website (the “Site”), you agree to be bound by these
              Terms. If you do not agree with any part of these Terms, do not use the Site.
            </p>

            <h2 className="text-xl font-semibold">2. Use of the Site</h2>
            <p>
              You agree to use the Site only for lawful purposes and in a way that does not
              infringe the rights of, restrict, or inhibit others from using the Site.
              Prohibited uses include transmitting harmful content or disrupting Site
              functionality.
            </p>

            <h2 className="text-xl font-semibold">3. Intellectual Property</h2>
            <p>
              All content, logos, text, graphics, and designs available on the Site are the
              property of the Site owners or licensed to them and are protected by intellectual
              property laws. You may not reproduce, distribute, or create derivative works
              without written permission.
            </p>

            <h2 className="text-xl font-semibold">4. User Content</h2>
            <p>
              If you submit any content, including comments, messages, or uploads, you grant
              the Site a worldwide, non-exclusive, royalty-free license to use, copy, modify,
              publish, and distribute that content.
            </p>

            <h2 className="text-xl font-semibold">5. Links to Third-Party Sites</h2>
            <p>
              The Site may contain links to third-party websites. These links are provided for
              convenience only. The Site does not endorse and is not responsible for the
              content or practices of linked sites.
            </p>

            <h2 className="text-xl font-semibold">6. Disclaimers</h2>
            <p>
              The Site is provided “as is” without warranties of any kind. The Site does not
              guarantee accuracy, completeness, or fitness for a particular purpose.
            </p>

            <h2 className="text-xl font-semibold">7. Limitation of Liability</h2>
            <p>
              Under no circumstances shall the Site or its owners be liable for any direct,
              indirect, incidental, or consequential damages arising from your use of the Site.
            </p>

            <h2 className="text-xl font-semibold">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the jurisdiction where the Site’s owners
              are established. Any disputes will be resolved in the appropriate courts of that
              jurisdiction.
            </p>

            <h2 className="text-xl font-semibold">9. Changes to Terms</h2>
            <p>
              The Site may modify these Terms at any time. Modified terms become effective
              when posted. Continued use of the Site constitutes acceptance of the updated
              Terms.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
