
import heroConstruction from "@/assets/new images/Construction Industry.png";
import type { TradingContent } from "@/types/trading";

type TradingKeys = "overview" | "pipes" | "industrial" | "logistics";

export const generalTradingData: Record<TradingKeys, TradingContent> = {
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
  },
  industrial: {
    id: "industrial",
    label: "Industrial Supplies",
    title: "Industrial Supplies",
    subtitle: "Comprehensive Industrial Solutions",
    description: "We provide a wide range of industrial supplies including tools, equipment, and materials essential for manufacturing and construction operations. Our industrial solutions are designed to meet the highest quality standards.",
    image: heroConstruction,
    cta: "View Supplies",
    sections: [
      {
        title: "Industrial Equipment",
        description: "High-quality industrial equipment and tools for various manufacturing and construction applications.",
        products: [
          { name: "Power Tools", image: heroConstruction, category: "Tools" },
          { name: "Safety Equipment", image: heroConstruction, category: "Safety" },
          { name: "Measuring Instruments", image: heroConstruction, category: "Instruments" },
          { name: "Welding Equipment", image: heroConstruction, category: "Equipment" },
          { name: "Hydraulic Tools", image: heroConstruction, category: "Tools" },
        ]
      }
    ]
  },
  logistics: {
    id: "logistics",
    label: "Logistics",
    title: "Logistics Solutions",
    subtitle: "Global Supply Chain Management",
    description: "Our comprehensive logistics solutions ensure timely delivery and efficient supply chain management. We handle transportation, warehousing, and distribution with precision and reliability.",
    image: heroConstruction,
    cta: "Learn More",
    features: [
      "Global Shipping",
      "Warehousing Services",
      "Supply Chain Management",
      "Customs Clearance",
      "Last Mile Delivery"
    ]
  }
};
