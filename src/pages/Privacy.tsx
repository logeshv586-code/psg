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
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            We’re aligning this page content with the official Privacy Policy
            used on psgbiz.com. If you share the exact Privacy text or source
            file, I’ll mirror it 1:1.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
