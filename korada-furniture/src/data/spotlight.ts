export type SpotlightSlide = {
  id: string
  title: string
  subtitle: string
  href: string
  exploreLabel: string
  imageSrc: string
  imageAlt: string
}

/** Homepage hero carousel — swap Unsplash URLs when real photography is ready. */
export const spotlightSlides: SpotlightSlide[] = [
  {
    id: 'cab-hero-1',
    title: 'Premium office cabinets',
    subtitle: 'Single door, double door, slimline and library storage — durable steel, clean lines.',
    href: '/products/office-cabinets',
    exploreLabel: 'Explore office cabinets',
    imageSrc:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Modern office workspace with storage cabinets',
  },
  {
    id: 'lock-hero-1',
    title: 'Secure locker systems',
    subtitle: 'Employee lockers, multi-door banks and custom layouts for schools and offices.',
    href: '/products/lockers',
    exploreLabel: 'Explore lockers',
    imageSrc:
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Row of metal storage lockers',
  },
  {
    id: 'cab-hero-2',
    title: 'Filing & archive storage',
    subtitle: 'High-capacity filing solutions that keep documents organised and accessible.',
    href: '/products/office-cabinets',
    exploreLabel: 'View cabinet range',
    imageSrc:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Minimal office cabinet and desk setup',
  },
  {
    id: 'lock-hero-2',
    title: 'Built for everyday use',
    subtitle: 'Powder-coated finishes, ventilated options, and robust locking hardware.',
    href: '/products/lockers',
    exploreLabel: 'Shop lockers',
    imageSrc:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Steel locker doors in a corridor',
  },
]
