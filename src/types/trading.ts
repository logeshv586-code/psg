import type { ComponentType } from "react";

export interface TradingSection {
  title: string;
  description: string;
  products: {
    name: string;
    image: string;
    category: string;
    specifications?: string[];
  }[];
}

export interface TradingContent {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  features?: string[];
  sections?: TradingSection[];
  stats?: { label: string; value: string; icon: ComponentType<{ className?: string }> }[];
}

