import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="bg-secondary py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-muted-foreground">HOME &gt; TERMS OF USE</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Terms of Use
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            We’re aligning this page content with the official Terms of Use used
            on psgbiz.com. If you have the exact Terms text or source file, drop
            it in and I’ll mirror it 1:1.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
