import Layout from "@/components/layout/Layout";
import GlobalMapSection from "@/components/shared/GlobalMapSection";

const Media = () => {
  // Placeholder images for gallery - in production, these would be actual gallery images
  const galleryImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/api/placeholder/400/300`,
    alt: `Gallery image ${i + 1}`,
  }));

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-secondary py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-muted-foreground">
            HOME &gt; GALLERY
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-center mb-12">
            Lets talk business
          </h1>

          {/* Masonry Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] bg-secondary">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Note about gallery */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Showcasing our timber, construction materials, and business operations
            </p>
          </div>
        </div>
      </section>

      {/* Global Map Section */}
      <GlobalMapSection />
    </Layout>
  );
};

export default Media;
