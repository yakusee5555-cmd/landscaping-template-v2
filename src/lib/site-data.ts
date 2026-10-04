export const business = {
  name: "Father & Son Landscaping",
  shortName: "Father & Son",
  phone: "(555) 234-5678",
  phoneHref: "tel:+15552345678",
  address: "Charlotte, NC",
  tagline: "Outdoor spaces, properly cared for.",
};

export const media = {
  lawn: "/images/lawn.jpg",
  hedge: "/images/hedge.jpg",
  shrub: "/images/shrub.jpg",
  trim: "/images/trim.jpg",
  whyChooseUs: "/images/why-choose-us.jpg",
  fence: "/images/fence.jpg",
  lawnInstall: "/images/lawn-install.jpg",
  cleanup: "/images/cleanup.jpg",
  lawnCare: "/images/lawn-care.webp",
  feeding: "/images/feeding.webp",
  brush: "/images/brush.webp",
  video: "/videos/hero.mp4",
};
export const services = [
  { title: "Lawn care", description: "Reliable mowing, edging, feeding and seasonal treatments for healthier turf.", image: media.lawnCare, price: "From $55" },
  { title: "Hedge & shrub care", description: "Thoughtful pruning that keeps plants dense, balanced and beautifully shaped.", image: media.hedge, price: "From $149" },
  { title: "Garden design", description: "Planting plans with year-round color, texture and practical maintenance in mind.", image: media.shrub, price: "From $499" },
  { title: "Grounds maintenance", description: "Scheduled visits that keep residential and commercial grounds consistently sharp.", image: media.brush, price: "From $299" },
  { title: "Hardscaping", description: "Paths, patios, fencing, edging and outdoor details built for daily life and lasting value.", image: media.fence, price: "From $1,499" },
  { title: "Seasonal cleanups", description: "Leaf clearance, bed preparation and property resets from spring through winter.", image: media.cleanup, price: "From $199" },
];
export const nav = [{to:"#home",label:"Home"},{to:"#services",label:"Services"},{to:"#plan-my-yard",label:"Plan My Yard"},{to:"#about",label:"About"},{to:"#contact",label:"Contact"}] as const;
export const whatsappUrl = "https://wa.me/15552345678?text=Hello%20Father%20%26%20Son%20Landscaping%2C%20I%27d%20like%20a%20free%20quote.";
