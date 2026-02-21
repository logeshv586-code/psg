
import heroTimber from "@/assets/scraped/hero-timber.jpg";
import heroConstruction from "@/assets/new images/Construction Industry.png";
import mepInstallationSite from "@/assets/new images/MEP Installation Site.png";

// Helper to get images from assets
type ImgModule = { default: string };
const scrapedImages = import.meta.glob<ImgModule>('@/assets/scraped_new/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const rootAssets = import.meta.glob<ImgModule>('@/assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const plywoodAssets = import.meta.glob<ImgModule>('@/assets/construction-plywood/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const hardwareAssets = import.meta.glob<ImgModule>('@/assets/hardware_Solution/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const mdfAssets = import.meta.glob<ImgModule>('@/assets/MDF & Chipboard/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const timberAssets = import.meta.glob<ImgModule>('@/assets/timber/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const getImg = (filename: string) => {
  // Check scraped_new
  for (const path in scrapedImages) {
    if (path.includes(filename)) {
      return scrapedImages[path].default;
    }
  }
  // Check plywood (construction-plywood)
  for (const path in plywoodAssets) {
    if (path.includes(filename)) {
      return plywoodAssets[path].default;
    }
  }
  // Check hardware solutions
  for (const path in hardwareAssets) {
    if (path.includes(filename)) {
      return hardwareAssets[path].default;
    }
  }
  // Check MDF & Chipboard
  for (const path in mdfAssets) {
    if (path.includes(filename)) {
      return mdfAssets[path].default;
    }
  }
  // Check timber
  for (const path in timberAssets) {
    if (path.includes(filename)) {
      return timberAssets[path].default;
    }
  }
  
  // Check root assets
  for (const path in rootAssets) {
    if (path.includes(filename)) {
      return rootAssets[path].default;
    }
  }

  return "";
};

export const constructionData = {
  overview: {
    id: "overview",
    label: "Overview",
    title: "Construction Excellence",
    subtitle: "Building Tomorrow's Infrastructure Today",
    description: "PSG delivers comprehensive construction solutions with high-quality materials including timber, plywood, MDF, and hardware. Our expertise spans residential, commercial, and industrial projects across the UAE and Saudi Arabia.",
    features: [
      "Premium Timber Solutions",
      "High-Quality Plywood & MDF",
      "Durable Construction Hardware",
      "Sustainable Building Materials",
      "Custom Interior Solutions",
      "Quality Assurance & Compliance"
    ],
    image: heroTimber,
    cta: "Explore Our Solutions"
  },
  timber: {
    id: "timber",
    label: "Timber",
    title: "Timber Solutions",
    subtitle: "Premium Wood for Interiors & Construction",
    description: "PSG offers a wide range of sawn timber species sourced from across the globe, perfect for both interior decoration and construction needs.",
    image: heroTimber,
    cta: "Explore Timber",
    sections: [
      {
        title: "Timber for Interiors",
        description: "Wood is an incredibly popular product that is often used by architects and designers to decorate the interiors of our buildings. This is because wood is durable, economical, easy to work with, long-lasting, and combines effortlessly with other textures to create a striking, inspiring aesthetic. As the most sustainable building material available, wood also brings with it additional benefits such as noise absorption and rapid heating and cooling.<br><br>The use of solid wood in interiors has increased significantly in recent years ranging from wooden doors, door frames to interior designing and wooden flooring. From hardwood from east to medium and soft woods till west, PSG offers wide range of sawn timber species across the globe.",
        products: [
          { name: "Teak Wood", image: getImg("Teak Wood.png"), category: "Interior" },
          { name: "Meranti", image: getImg("Meranti Wood.png"), category: "Interior" },
          { name: "Iroko", image: getImg("Iroko Wood.png"), category: "Interior" },
          { name: "Mahogany", image: getImg("Mahogany Wood.png"), category: "Interior" },
          { name: "Dabema", image: getImg("Dabema Wood.png"), category: "Interior" },
          { name: "Oak", image: getImg("Oak Wood.png"), category: "Interior" },
          { name: "Okume", image: getImg("Okume Wood.png"), category: "Interior" },
          { name: "Merbau", image: getImg("Merbau Wood.png"), category: "Interior" },
          { name: "Balau", image: getImg("Balau Wood.png"), category: "Interior" },
        ]
      },
      {
        title: "Timber for Construction",
        description: "Wood as shuttering is very common engineering tool for many reasons. For example, wood is light in weight as compared to metallic shuttering and easy to handle. Wood is less costly if compared with other shuttering material like steel and plastic etc. Wood can be cut and modified as per required sizes and shapes.<br><br>For this reason, the drawbacks of wood are neglected. Moreover, in areas where labour is not cheap, the depreciation cost of wood is preferred to that of labour. Wood is used in shuttering in many forms, like wooden logs (bally), wooden panels, wooden boards and wooden girders etc.<br><br>Pine wood, Spruce, SYP etc. are some of the species PSG offers for the construction field sourcing from European and American countries",
        products: [
          { name: "Pine", image: getImg("Pine Wood.png"), category: "Construction" },
          { name: "Spruce", image: getImg("Spruce Wood.png"), category: "Construction" },
          { name: "SYP Timber", image: getImg("SYP Timber.png"), category: "Construction" },
        ]
      }
    ]
  },
  plywood: {
    id: "plywood",
    label: "Plywood",
    title: "Plywood Solutions",
    subtitle: "Versatile & Durable Plywood",
    description: "From interior furniture to construction shuttering, our plywood range covers all your needs with high-quality sourcing.",
    image: heroTimber, // Reusing heroTimber for now
    cta: "View Plywood",
    sections: [
      {
        title: "Plywood for Interior",
        description: "An extremely versatile product, plywood is used for a wide range of interior applications such as Paneling, Cabinets, Furniture, walls, Ceilings and Interior decorations and timber furnishings.<br><br>PSG offers wide range for plywood products ranging from MR grade to Marine BWP grade extensively used in the Interior sector being sourced across Asian countries",
        products: [
          { name: "BWP", image: getImg("BWP Plywood.png"), category: "Interior" },
          { name: "MR Grade", image: getImg("MR Grade Plywood.png"), category: "Interior" },
        ]
      },
      {
        title: "Plywood for Construction",
        description: "Shuttering plywood is highly dense hardwood covered with a smooth coating of film on either side. It is primarily used in construction applications such as cement formworks and exterior applications.<br><br>They might be used up to 15-20 times before needing to be replaced. Brown and black are the two surface color options available for film-faced plywood. India, Indonesia, Malaysia and Vietnam are major countries from where PSG sources plywood used for construction",
        products: [
          { name: "Film Face Shutter", image: getImg("Film Face Shutter Plywood.png"), category: "Construction" },
        ]
      }
    ]
  },
  mdf: {
    id: "mdf",
    label: "MDF & Chipboard",
    title: "MDF & Chipboard",
    subtitle: "Engineered Wood Products",
    description: "High-quality MDF and Chipboard for furniture, cabinetry, and interior applications.",
    image: heroTimber,
    cta: "View Boards",
    sections: [
      {
        title: "MDF",
        description: "An extremely versatile product, MDF is used for a wide range of interior applications such as Paneling, Cabinets, Furniture, walls, Ceilings and Interior decorations and furnishings.<br><br>PSG offers wide range for MDF products ranging from MR grade to Marine BWP grade extensively used in the Interior sector being sourced across Asian countries",
        products: [
          { name: "MR Grade", image: getImg("MR Grade MDF.png"), category: "MDF" },
          { name: "HMR MDF", image: getImg("HMR MDF.png"), category: "MDF" },
          { name: "Laminated MDF", image: getImg("Laminated MDF.png"), category: "MDF" },
        ]
      },
      {
        title: "Chipboard",
        description: "Chipboard or Particle Board are made by mixing small wood particles with epoxy resin, which are pressed together under intense heat and pressure to produce a rigid board, typically with a smooth surface.<br><br>Chipboards are used for making furnitures, interior home accents, kitchen cabinets, Sound proofing, Building and flooring insulation, Packaging etc.<br><br>Based on the dense forming and resin used, chipboard varies in densities and finishes. PSG sources MDF and chipboard from Indonesia, Thailand, Vietnam, India and Malaysia.",
        products: [
          { name: "Laminated", image: getImg("Laminated Chipboard.png"), category: "Chipboard" },
          { name: "Plain", image: getImg("Plain Chipboard.png"), category: "Chipboard" },
        ]
      }
    ]
  },
  hardwares: {
    id: "hardwares",
    label: "Hardwares",
    title: "Hardware Solutions",
    subtitle: "Essential Fittings & Accessories",
    description: "Complete range of hardware for doors, furniture, and glass fittings.",
    image: heroConstruction,
    cta: "View Hardwares",
    sections: [
      {
        title: "Door Hardware",
        description: "Hardware (door) is a broad term used to group all items that are fitted or related to doors and includes hinges, pull handles, locks and latches, cylinder and keys, door controls, panic exit devices, bolts, hold-open devices, any part of an automatic closing device that is attached to the doorset, and all (door) furniture",
        products: [
          { name: "Handle", image: getImg("Door Handle.png"), category: "Door" },
          { name: "Pull Handles", image: getImg("Pull Handles Door.png"), category: "Door" },
          { name: "Locks", image: getImg("Door Locks.png"), category: "Door" },
          { name: "Cylinders and Key", image: getImg("Cylinders and Key.png"), category: "Door" },
          { name: "Hinges", image: getImg("Door Hinges.png"), category: "Door" },
          { name: "Panic Hardware", image: getImg("Panic Hardware.png"), category: "Door" },
          { name: "Accessories", image: getImg("Door Accessories.png"), category: "Door" },
        ]
      },
      {
        title: "Furniture Fittings",
        description: "Furniture fittings are the individual pieces needed to create a working, durable piece of furniture or cabinet.<br><br>Cabinet hinges, drawer runners, cabinet handles, cabinet knobs and accessories are some of the hardwares where PSG are expertise",
        products: [
          { name: "Hinges", image: getImg("Furniture Hinges.png"), category: "Furniture" },
          { name: "Runners", image: getImg("Drawer Runners.png"), category: "Furniture" },
          { name: "Handles", image: getImg("Furniture Handles.png"), category: "Furniture" },
          { name: "Cabinet Accessories", image: getImg("Cabinet Accessories.png"), category: "Furniture" },
          { name: "Cabinet Knobs", image: getImg("Cabinet Knobs.png"), category: "Furniture" },
        ]
      },
      {
        title: "Glass Fittings",
        description: "Glass fittings are essential components for glass doors and partitions. These include hinges, pivots, posts, handles, sliding door systems, shower fittings and so on.<br><br>In association with Hardware experts LOCKRON (UK), PSG offers wide range of complete hardwares related to Door, Furniture and Glass",
        products: [
          { name: "Spring", image: getImg("Glass Spring.png"), category: "Glass" },
          { name: "Patch Fittings", image: getImg("Patch Fittings.png"), category: "Glass" },
          { name: "Pull Handles", image: getImg("Glass Pull Handles.png"), category: "Glass" },
          { name: "Glass Door Locks", image: getImg("Glass Door Locks.png"), category: "Glass" },
          { name: "Hinges", image: getImg("Glass Hinges.png"), category: "Glass" },
          { name: "Shower Fittings", image: getImg("Shower Fittings.png"), category: "Glass" },
        ]
      }
    ]
  }
};
