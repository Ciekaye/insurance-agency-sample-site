/**
 * Central content for the Wexford Insurance replica.
 * Editing copy / navigation / coverage lists here updates the whole site.
 */

export const company = {
  name: "Wexford Insurance",
  tagline: "An Independent Insurance Agency",
  phone: "317-942-0549",
  phoneHref: "tel:+13179420549",
  email: "info@wexfordins.com",
  address: {
    line1: "107 N State Road 135, STE 304",
    line2: "Greenwood, IN 46142",
  },
  statesCount: 48,
};

export const nav: { label: string; href: string }[] = [
  { label: "Business", href: "/business" },
  { label: "Personal", href: "/personal" },
  { label: "Life + Health", href: "/life-health" },
  { label: "Contractors", href: "/contractors" },
  { label: "Trucking", href: "/trucking" },
  { label: "Specialty", href: "/specialty" },
  { label: "Bonds", href: "/bonds" },
  { label: "Our People", href: "/our-people" },
  { label: "Acquisitions", href: "/acquisitions" },
  { label: "Blog", href: "/blog" },
];

export const businessCoverages = [
  { title: "General Liability", body: "Protects your business against third-party claims of bodily injury and property damage." },
  { title: "Commercial Property", body: "Covers your buildings, equipment, and inventory against fire, theft, and disaster." },
  { title: "Workers Compensation", body: "Medical care and wage replacement for employees injured on the job." },
  { title: "Business Auto", body: "Liability and physical-damage coverage for vehicles owned or used by your business." },
  { title: "Employment Practices Liability", body: "Defense against claims of wrongful termination, discrimination, and harassment." },
  { title: "Cyber Insurance", body: "Response and recovery coverage for data breaches and cyber attacks." },
  { title: "Directors & Officers Liability", body: "Shields leadership from personal liability for management decisions." },
  { title: "Professional Liability", body: "Errors & omissions coverage for the advice and services you provide." },
];

export const personalCoverages = [
  { title: "Home Insurance", body: "Protect your home and belongings, with liability coverage for the unexpected." },
  { title: "Auto Insurance", body: "Coverage tailored to how you drive, from liability to full physical damage." },
  { title: "Umbrella Insurance", body: "An extra layer of liability protection above your home and auto limits." },
  { title: "Valuable Articles", body: "Scheduled coverage for jewelry, art, collectibles, and other prized possessions." },
];

export const lifeHealthCoverages = [
  { title: "Small Business Group Health", body: "Competitive group medical plans designed for small teams." },
  { title: "Large Business Group Health", body: "Scalable benefits programs for larger workforces." },
  { title: "Term & Whole Life", body: "Income protection and legacy planning for the people who depend on you." },
  { title: "Individual Health", body: "Marketplace and private health plans matched to your needs and budget." },
];

export const contractorTrades = [
  "Plumbing", "Electrical", "HVAC", "Roofing", "Landscaping", "Excavating",
  "Painting", "Drywall", "Concrete", "Flooring", "Carpentry", "Masonry",
  "General Contractors", "Remodeling", "Framing", "Siding", "Demolition",
  "Paving", "Welding", "Glass & Glazing", "Insulation", "Fencing",
  "Tile", "Septic", "Solar", "Tree Service",
];

export const truckingCoverages = [
  { title: "Auto Liability", body: "Required coverage protecting against injury and damage you cause to others." },
  { title: "Bobtail Insurance", body: "Coverage while operating without a trailer or between dispatches." },
  { title: "Dump Truck Insurance", body: "Specialized protection for dump and aggregate-hauling operations." },
  { title: "Motor Truck Cargo", body: "Covers the freight you haul against loss, theft, and damage." },
  { title: "Hazmat Insurance", body: "Higher-limit coverage for carriers transporting hazardous materials." },
  { title: "Tow Truck Insurance", body: "On-hook and garage-keepers coverage for towing and recovery." },
  { title: "New Venture Trucking", body: "Programs built for new-authority owner-operators getting started." },
  { title: "Physical Damage", body: "Repair or replacement coverage for your tractors and trailers." },
];

export const specialtyLines = [
  { title: "Environmental", body: "Pollution and contractor's environmental liability coverage." },
  { title: "Captive Insurance", body: "Alternative risk-transfer structures for qualifying businesses." },
  { title: "Aviation", body: "Hull and liability coverage for aircraft owners and operators." },
  { title: "Security Guard", body: "Liability programs for security and patrol service firms." },
  { title: "Medical Malpractice", body: "Professional liability for physicians, clinics, and allied health." },
  { title: "Short-Term Rental", body: "Coverage built for Airbnb, VRBO, and vacation-rental hosts." },
  { title: "Agriculture & Farm", body: "Protection for farms, equipment, livestock, and agribusiness." },
  { title: "Food Service", body: "Restaurant, catering, and food-truck programs." },
];

export const bondTypes = [
  { title: "Performance Bonds", body: "Guarantee a project is completed per the terms of the contract." },
  { title: "Payment Bonds", body: "Assure subcontractors and suppliers are paid on the job." },
  { title: "Contractor License Bonds", body: "Meet state and local licensing bond requirements." },
  { title: "Bid Bonds", body: "Back your bid and your ability to perform if awarded." },
  { title: "Fidelity Bonds", body: "Protect your business from employee dishonesty and theft." },
  { title: "Court & Probate Bonds", body: "Surety for fiduciaries, guardians, and court proceedings." },
];

export const specialtyDivisions = [
  "Contractors", "Environmental", "Transportation & Trucking", "Agriculture",
  "Food Service", "Security Guard", "Aviation", "Medical Malpractice",
  "Short-Term Rental", "Captive Programs", "Bonds & Surety", "Workers Comp",
  "Excavating", "Cyber", "Manufacturing", "Habitational",
];

export const relatedCompanies = [
  { name: "Wexford Insurance", body: "The parent agency, representing dozens of carriers across personal and commercial lines." },
  { name: "Excavating Insurance Partners", body: "A dedicated program for excavating and earth-moving contractors." },
  { name: "Total Work Comp", body: "Workers compensation specialists for hard-to-place and high-mod accounts." },
  { name: "One Hampton Insurance", body: "Boutique coverage and white-glove service for select clients." },
];

export const stats = [
  { value: "48+", label: "States we operate in" },
  { value: "40+", label: "Carrier relationships" },
  { value: "16", label: "Specialty divisions" },
  { value: "100%", label: "Independent advice" },
];

export const usStates = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
  "New Hampshire","New Jersey","New Mexico","New York","North Carolina",
  "North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
  "South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
];
