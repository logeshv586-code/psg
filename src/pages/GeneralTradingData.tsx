
import heroConstruction from "@/assets/new images/Construction Industry.png";

export const generalTradingData = {
  overview: {
    id: "overview",
    label: "Overview",
    title: "General Trading",
    subtitle: "Comprehensive Trading Solutions",
    description: "PSG offers a wide range of general trading products to meet diverse industrial and commercial needs. We are committed to sourcing and delivering high-quality materials to support your projects.",
    features: [
      "High-Quality Steel Pipes",
      "Industrial Supplies",
      "Reliable Sourcing",
      "Global Logistics",
      "Competitive Pricing"
    ],
    image: heroConstruction,
    cta: "Explore Products"
  },
  pipes: {
    id: "pipes",
    label: "Steel Pipes",
    title: "Steel Pipes",
    subtitle: "Durable & High-Quality Pipes",
    description: "We supply premium quality steel pipes for various industrial applications including construction, oil & gas, and infrastructure projects. Our pipes are sourced from reputable manufacturers to ensure durability and compliance with international standards.",
    image: heroConstruction,
    cta: "View Pipes",
    sections: [
      {
        title: "Steel Pipes Collection",
        description: "Our range of steel pipes includes seamless, welded, and galvanized options suitable for high-pressure and structural applications.",
        products: [
          { name: "Seamless Steel Pipes", image: heroConstruction, category: "Pipes" },
          { name: "Welded Steel Pipes", image: heroConstruction, category: "Pipes" },
          { name: "Galvanized Steel Pipes", image: heroConstruction, category: "Pipes" },
          { name: "Carbon Steel Pipes", image: heroConstruction, category: "Pipes" },
          { name: "Stainless Steel Pipes", image: heroConstruction, category: "Pipes" },
        ]
      }
    ]
  }
};
