import { Search, Network, TrendingUp } from "lucide-react";
export const servicesData = [
  {
    id: 1,
    icon: Search,
    title: "Google Ads Audit",
    description:
      "Deep-dive technical audits to identify click-fraud, leakage, and untapped keyword opportunities.",
    bullets: ["Script Deployment", "Tracking Validation"],
  },
  {
    id: 2,
    icon: Network,
    title: "Campaign Architecture",
    description:
      "Building robust, scalable structures that leverage machine learning while maintaining human oversight.",
    bullets: ["Alpha/Beta Structures", "Dynamic Retargeting"],
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Conversion Lift",
    description:
      "CRO-focused landing page design and post-click optimization to ensure every dollar works twice as hard.",
    bullets: ["Multivariant Testing", "Speed Optimization"],
  },
];

export const OPTIMIZATION_MULTIPLIER = 3;
export const MAX_OPTIMIZED_RATE = 15;

export const currency = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export const compactCurrency = (n: number) => {
  if (n >= 1000) return `$${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return `$${Math.round(n)}`;
};
