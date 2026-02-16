import Layout from "@/components/layout/Layout";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import heroImage from "@/assets/new images/Future Smart City.png";
import gallery1 from "@/assets/blog_1733819064.jpg.jpeg";
import gallery2 from "@/assets/7a54dfb0668a6bc8a82014168d836a97.jpg.jpeg";
import gallery3 from "@/assets/d6612fd275f0f4f34915416326106123-min.jpg.jpeg";
import gallery4 from "@/assets/489d79ce08e955d326d3131a4f044b2a-min.jpg.jpeg";
import gallery5 from "@/assets/092dee7be6e9c847cacfb1aa87a4b670-min.jpg.jpeg";
import gallery6 from "@/assets/307e015cdd77da97213ac844689139ff-2-min.jpg.jpeg";
import gallery7 from "@/assets/fd104e86cd5780d9456e5f4a34aa687e-1-1-scaled.jpg.jpeg";
import gallery8 from "@/assets/022595491cdca69d6dfc7e59d94c7ee2-1-1-scaled-r1cfy28wzznw7shiyk881j142jcoilys6gcmo3wcls.jpg.jpeg";
import gallery9 from "@/assets/e2464fb205dea9068331091ab83aebaf-3-min.jpg.jpeg";
import gallery10 from "@/assets/html-css-collage-concept-with-person-1-2048x1365.jpg.jpeg";
import gallery11 from "@/assets/05e8a2810fcbd7444725afc024cc2c65-1.png";
import gallery12 from "@/assets/Frame-29.png";

const galleryImages = [
  { id: 1, src: gallery1, alt: "Gallery image 1" },
  { id: 2, src: gallery2, alt: "Gallery image 2" },
  { id: 3, src: gallery3, alt: "Gallery image 3" },
  { id: 4, src: gallery4, alt: "Gallery image 4" },
  { id: 5, src: gallery5, alt: "Gallery image 5" },
  { id: 6, src: gallery6, alt: "Gallery image 6" },
  { id: 7, src: gallery7, alt: "Gallery image 7" },
  { id: 8, src: gallery8, alt: "Gallery image 8" },
  { id: 9, src: gallery9, alt: "Gallery image 9" },
  { id: 10, src: gallery10, alt: "Gallery image 10" },
  { id: 11, src: gallery11, alt: "Gallery image 11" },
  { id: 12, src: gallery12, alt: "Gallery image 12" },
];

const Media = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const activeIndex = useMemo(() => {
    if (activeId === null) return -1;
    return galleryImages.findIndex((img) => img.id === activeId);
  }, [activeId]);

  const activeImage = activeIndex >= 0 ? galleryImages[activeIndex] : null;

  const openImage = (id: number) => setActiveId(id);
  const closeImage = () => setActiveId(null);

  const showPrev = () => {
    if (activeIndex < 0) return;
    const prevIndex = (activeIndex - 1 + galleryImages.length) % galleryImages.length;
    setActiveId(galleryImages[prevIndex].id);
  };

  const showNext = () => {
    if (activeIndex < 0) return;
    const nextIndex = (activeIndex + 1) % galleryImages.length;
    setActiveId(galleryImages[nextIndex].id);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Media Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Media
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Explore our latest updates and gallery
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
              <button
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-transparent p-0 text-left"
                onClick={() => openImage(image.id)}
                type="button"
              >
                <div className="aspect-[4/3] bg-secondary">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
              </button>
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

      <Dialog open={activeId !== null} onOpenChange={(open) => (!open ? closeImage() : undefined)}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-[1100px] p-0 overflow-hidden bg-black border-none">
          {activeImage && (
            <div className="relative">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="w-full h-auto max-h-[85vh] object-contain bg-black"
                draggable={false}
              />

              <button
                type="button"
                onClick={showPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Media;
