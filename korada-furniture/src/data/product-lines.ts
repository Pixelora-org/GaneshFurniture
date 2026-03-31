export type ProductLineItem = {
  id: string
  name: string
  description: string
  highlights: string[]
  imageSrc: string
  imageAlt: string
}

export const officeCabinetVariants: ProductLineItem[] = [
  {
    id: 'single-door',
    name: 'Single door cabinets',
    description: 'Compact vertical storage for files, records and office supplies.',
    highlights: ['Adjustable shelves', 'Reinforced hinges', 'Lock-ready'],
    imageSrc:
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Single steel office cabinet',
  },
  {
    id: 'double-door',
    name: 'Double door cabinets',
    description: 'Wide opening access for bulk storage and shared team spaces.',
    highlights: ['Wide inner clearance', 'Heavy-duty frame', 'Multiple finishes'],
    imageSrc:
      'https://images.unsplash.com/photo-1586953208448-b95a79798f08?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Double door metal cabinet',
  },
  {
    id: 'slimline',
    name: 'Slimline cabinets',
    description: 'Narrow footprint for corridors and tight floor plans.',
    highlights: ['Space-saving depth', 'Full height options', 'Modular stacking'],
    imageSrc:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Tall slim storage in office hallway',
  },
  {
    id: 'library',
    name: 'Library cabinets',
    description: 'Open and closed shelf systems for libraries, archives and showrooms.',
    highlights: ['High shelf load', 'Optional glass panels', 'Custom widths'],
    imageSrc:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Library shelving with books',
  },
  {
    id: 'locker-cabinet',
    name: 'Locker-style cabinet banks',
    description: 'Integrated cabinet + locker combinations for staff rooms.',
    highlights: ['Per-door locks', 'Ventilated doors', 'Anchoring kits'],
    imageSrc:
      'https://images.unsplash.com/photo-1523419409543-0c1df022bddb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Row of lockers in a workplace',
  },
]

export const lockerVariants: ProductLineItem[] = [
  {
    id: 'single-tier',
    name: 'Single-tier lockers',
    description: 'Full-height compartment for uniforms, bags and personal gear.',
    highlights: ['Coat rail option', 'Base vents', 'Master key systems'],
    imageSrc:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Full height school lockers',
  },
  {
    id: 'multi-tier',
    name: 'Multi-tier lockers',
    description: 'Two, three or four stacked doors for high-density sites.',
    highlights: ['Numbered doors', 'Anti-tamper frames', 'Powder coat colours'],
    imageSrc:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Blue stacked lockers',
  },
  {
    id: 'staff-room',
    name: 'Staff & break-room lockers',
    description: 'Employee-focused layouts with mixed compartment sizes.',
    highlights: ['USB charging trays optional', 'Bench integration', 'Easy cleaning'],
    imageSrc:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Modern locker room seating',
  },
  {
    id: 'industrial',
    name: 'Industrial locker banks',
    description: 'Factories, warehouses and workshops — rugged build, high cycle life.',
    highlights: ['Reinforced doors', 'Galvanised options', 'Bulk order friendly'],
    imageSrc:
      'https://images.unsplash.com/photo-1589939705384-62e1c44a6fa0?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Industrial storage area',
  },
]
