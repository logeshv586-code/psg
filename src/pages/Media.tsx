import Layout from "@/components/layout/Layout";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Helper type for imported modules
type ImgModule = { default: string };

// Dynamic imports using import.meta.glob
const newImages = import.meta.glob<ImgModule>('@/assets/new images/*.{png,jpg,jpeg,webp}', { eager: true });
const scrapedImages = import.meta.glob<ImgModule>('@/assets/scraped/*.{png,jpg,jpeg,webp}', { eager: true });
// We'll skip root assets for the gallery to avoid logos mixed in, unless specific ones are needed.
// Instead, let's include some high quality ones from tourism if relevant, or just stick to the professional ones.
const tourismImages = import.meta.glob<ImgModule>('@/assets/tourism_images/*.{png,jpg,jpeg,webp}', { eager: true });



// Combine and process images
const rawImages = [
  ...Object.entries(newImages),
  ...Object.entries(scrapedImages),
  ...Object.entries(tourismImages)
];

// Filter and format images
const galleryImages = rawImages
  .map(([path, module], index) => {
    let src = module.default;
    const filename = path.split('/').pop()?.split('.')[0] || "";


    // Filter out logos, small icons, and non-photo assets based on filename
    const lowerFilename = filename.toLowerCase();
    const excludePatterns = [
      'logo', 'icon', 'group', 'vector', 'mask', 'frame',
      'xmlid', 'target', 'arrow', 'qr-code', 'qr code',
      'common-logo', '150x150', '300x', 'global network',
      '174613dbe', 'scaled', 'softwareai', 'hero-', 'sustainability concept'
    ];

    if (excludePatterns.some(pattern => lowerFilename.includes(pattern))) return null;

    // Create a display title
    let title = filename
      .replace(/[-_]/g, ' ')
      .replace(/Enhanced/gi, '')
      .replace(/min/gi, '')
      .replace(/scaled/gi, '')
      .replace(/copy/gi, '')
      .replace(/\./g, '')
      .replace(/\d+/g, ' ') // Replace numbers with space to avoid "Image 1" looking like "Image1"
      .trim();

    // Capitalize first letter of each word
    title = title.replace(/\b\w/g, c => c.toUpperCase()).trim();

    // Assign category based on source path
    let category = "Business";
    if (path.includes("tourism")) category = "Tourism";
    else if (path.includes("scraped")) category = "Projects";

    return {
      id: index,
      src,
      alt: title || "Gallery Image",
      title: title || "Project Image",
      category
    };
  })
  .filter((img): img is NonNullable<typeof img> => img !== null)
  // Remove duplicates based on title to handle different extensions
  .filter((img, index, self) => index === self.findIndex((t) => t.title === img.title))
  // Sort slightly to mix them or keep them grouped? Grouped by category might be nice, but random mix is more dynamic.
  // Let's keep them somewhat sorted by category for now.
  .sort((a, b) => a.category.localeCompare(b.category));

const Media = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];

  const filteredImages = useMemo(() => {
    if (filter === "All") return galleryImages;
    return galleryImages.filter(img => img.category === filter);
  }, [filter]);

  const activeIndex = useMemo(() => {
    if (activeId === null) return -1;
    return galleryImages.findIndex((img) => img.id === activeId);
  }, [activeId]);

  const activeImage = activeIndex >= 0 ? galleryImages[activeIndex] : null;

  const openImage = (id: number) => setActiveId(id);
  const closeImage = () => setActiveId(null);

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeIndex < 0) return;
    // Find previous index in the *full* list to ensure navigation works even if filtered? 
    // Usually navigation should be within filtered context, but for simplicity let's navigate the full list
    // or the filtered list. Let's stick to full list for continuity in modal.
    const prevIndex = (activeIndex - 1 + galleryImages.length) % galleryImages.length;
    setActiveId(galleryImages[prevIndex].id);
  };

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeIndex < 0) return;
    const nextIndex = (activeIndex + 1) % galleryImages.length;
    setActiveId(galleryImages[nextIndex].id);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={newImages['/src/assets/new images/Future Smart City.webp']?.default || rawImages[0]?.[1]?.default}
            alt="Media Hero"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
              Exploring the intersection of innovation, construction, and sustainable development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header & Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-2">Lets Talk Business</h2>
              <p className="text-muted-foreground">Visualizing our expertise and global reach.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={filter === cat ? "default" : "outline"}
                  onClick={() => setFilter(cat)}
                  className="rounded-full px-6 transition-all duration-300"
                  size="sm"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-card cursor-pointer"
                  onClick={() => openImage(image.id)}
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                      <span className="inline-flex items-center text-xs text-primary-foreground bg-primary/20 backdrop-blur-sm border border-primary/30 px-3 py-1 rounded-full">
                        <ZoomIn className="w-3 h-3 mr-1" /> View
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No images found in this category.
            </div>
          )}

          {/* Footer Note */}
          <div className="mt-16 text-center border-t pt-8 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm">
              Our portfolio spans across timber sourcing, construction materials, and large-scale MEP installations.
              We are committed to delivering excellence in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={activeId !== null} onOpenChange={(open) => (!open ? closeImage() : undefined)}>
        <DialogContent className="max-w-[95vw] h-[90vh] md:h-auto md:max-w-[90vw] lg:max-w-[1200px] p-0 bg-black/95 border-none shadow-2xl focus:outline-none flex items-center justify-center">
          {activeImage && (
            <div className="relative w-full h-full flex items-center justify-center outline-none">
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              />



              <button
                type="button"
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white transition-all hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Media;
