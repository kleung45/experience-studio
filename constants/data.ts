/**
 * Data Constants
 * 
 * Performance optimization:
 * - Moving data outside components prevents object recreation on every render
 * - Allows for better memoization and comparison
 * - Makes data management more centralized
 * 
 * Usage:
 * import { SERVICES, PROCESS_STEPS, TESTIMONIALS } from '@/constants/data';
 */

// Services data
export const SERVICES = [
  {
    icon: "storefront",
    title: "Spatial Design",
    description: "Retail & Exhibition spaces that tell a story through immersive environments. We architect physical journeys that leave lasting impressions."
  },
  {
    icon: "devices_other",
    title: "Digital Integration",
    description: "Interactive technologies that bridge the physical gap for seamless engagement. From touchpoints to AR, we make spaces smart."
  },
  {
    icon: "view_in_ar",
    title: "Product Strategy",
    description: "Tangible product design rooted in deep user experience and innovation. We prototype and refine to ensure market fit."
  },
  {
    icon: "event",
    title: "Event Design",
    description: "Crafting memorable events with immersive setups and interactive elements. Experiences that resonate long after."
  },
  {
    icon: "lightbulb",
    title: "Innovation Lab",
    description: "Exploring emerging technologies to create bespoke solutions and future-proof designs for our clients."
  },
];

// Process steps data
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep to understand your brand, audience, and objectives. This phase is about collaborative workshops, market research, and defining a clear roadmap for success."
  },
  {
    number: "02",
    title: "Concept & Design",
    description: "Our creative team translates strategy into tangible concepts. We explore, sketch, and visualize the experience, focusing on innovative interactions and aesthetic excellence."
  },
  {
    number: "03",
    title: "Prototyping & Testing",
    description: "Ideas are brought to life through interactive prototypes. We rigorously test with users to refine usability, validate design choices, and ensure a seamless final product."
  },
  {
    number: "04",
    title: "Development & Build",
    description: "Our engineers and fabricators take over, building the digital and physical components. Precision, quality craftsmanship, and attention to detail are paramount."
  },
  {
    number: "05",
    title: "Launch & Iterate",
    description: "We manage the deployment and launch. Post-launch, we analyze performance data, gather feedback, and identify opportunities for ongoing improvement and evolution."
  },
];

// Testimonials data
export const TESTIMONIALS = [
  {
    quote: "The team at Yook transformed our retail space into a dynamic, interactive journey. Customer dwell time has doubled, and sales are up 40% year-over-year. Truly phenomenal.",
    author: "Alex Chen",
    title: "Marketing Director, Avant Garde",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    offset: false
  },
  {
    quote: "Their digital integration strategy for our exhibition was flawless. The seamless blend of physical and augmented reality elements created a buzz and significantly increased visitor engagement.",
    author: "Samantha Lee",
    title: "Curator, HK Modern Arts Pavilion",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    offset: true
  },
];

// Impact metrics data
export const IMPACT_METRICS = [
  {
    value: "35%",
    label: "Engagement",
    description: "Average increase in user dwell time"
  },
  {
    value: "2.5x",
    label: "Conversion",
    description: "Higher rates post-redesign"
  },
  {
    value: "98%",
    label: "Satisfaction",
    description: "Client retention & success rate"
  },
];

// Gallery images data
export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1441984904556-0ac8d9d0b10d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441986300352-7e3dee05ae6f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441984904556-0ac8d9d0b10d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441986300352-7e3dee05ae6f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441984904556-0ac8d9d0b10d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441986300352-7e3dee05ae6f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441984904556-0ac8d9d0b10d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441986300352-7e3dee05ae6f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441984904556-0ac8d9d0b10d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441986300352-7e3dee05ae6f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441984904556-0ac8d9d0b10d?q=80&w=800&auto=format&fit=crop",
];
