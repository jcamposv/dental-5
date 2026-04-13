export const siteConfig = {
  name: "Crenter Dental",
  title: "Crenter Dental — Odontología Moderna para Toda la Familia",
  description: "Clínica dental moderna dedicada a crear sonrisas saludables y hermosas. Cuidado personalizado para toda la familia.",
  url: "https://crenter-dental.com",
};

export const booking = {
  whatsapp: { number: "15552345678", defaultMessage: "Hola, me gustaría agendar una cita en Crenter Dental." },
  googleCalendar: { enabled: false, calendarId: "primary" },
};

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

import heroImg from "../assets/images/hero.jpg";
import clinicaImg from "../assets/images/clinica.jpg";
import ortodonciaImg from "../assets/images/ortodoncia.jpg";
import radiografiaImg from "../assets/images/radiografia.jpg";
import doctor1Img from "../assets/images/doctor-1.jpg";
import doctorHombre1Img from "../assets/images/doctor-hombre-1.jpg";
import doctorHombre2Img from "../assets/images/doctor-hombre-2.jpg";

export const images = {
  hero: heroImg.src,
  about: [
    clinicaImg.src,
    radiografiaImg.src,
  ],
  team: [
    doctorHombre1Img.src,
    doctor1Img.src,
    doctorHombre2Img.src,
  ],
  services: [
    radiografiaImg.src,
    ortodonciaImg.src,
    clinicaImg.src,
    heroImg.src,
  ],
};

export const hero = {
  headline: "Odontología Moderna.",
  mission: {
    text: "Nuestra misión es hacer que tu sonrisa sea más hermosa.",
    description: "Ya sea monitoreando signos vitales, niveles de actividad o patrones de salud para tomar decisiones informadas hacia un estilo de vida más saludable.",
  },
  cta: "Agendar Cita",
};

export const about = {
  badge: "Introducción",
  headline: "Nos dedicamos a crear sonrisas saludables y hermosas.",
  headlineAccent: "Cuidado personalizado para toda la familia.",
  stats: [
    { value: "05+", label: "Años de Experiencia" },
    { value: "200K+", label: "Pacientes Satisfechos" },
  ],
  features: [
    { title: "Verdaderamente Personal", description: "Las emergencias dentales pueden ocurrir en cualquier momento. Brindamos atención rápida y efectiva cuando más la necesitas." },
  ],
};

export const services = [
  {
    title: "Endodoncia",
    description: "Ofrecemos tratamientos de conducto precisos y gentiles diseñados para aliviar el dolor y salvar tu diente natural — restaurando comodidad y función.",
    cta: "Explorar Servicio",
  },
  {
    title: "Ortodoncia",
    description: "Desde brackets tradicionales hasta alineadores invisibles, nuestras soluciones de ortodoncia te ayudan a lograr una sonrisa recta y saludable a cualquier edad.",
    cta: "Explorar Servicio",
  },
  {
    title: "Blanqueamiento Dental",
    description: "Tratamientos profesionales de blanqueamiento que eliminan manchas y devuelven el brillo natural a tus dientes de forma segura y efectiva.",
    cta: "Explorar Servicio",
  },
  {
    title: "Implantes Dentales",
    description: "Soluciones permanentes y naturales para reemplazar dientes perdidos. Nuestros implantes restauran tu sonrisa y la funcionalidad completa.",
    cta: "Explorar Servicio",
  },
];

export const team = [
  {
    name: "Dr. Carlos Mendoza",
    role: "Director Médico",
    specialty: "Implantología",
    email: "carlos@crenter.com",
    phone: "(55) 1234-5678",
    address: "Av. Reforma 245, CDMX",
  },
  {
    name: "Dra. María López",
    role: "Ortodoncista",
    specialty: "Ortodoncia",
    email: "maria@crenter.com",
    phone: "(55) 1234-5679",
    address: "Av. Reforma 245, CDMX",
  },
  {
    name: "Dr. Andrés Ruiz",
    role: "Endodoncista",
    specialty: "Endodoncia",
    email: "andres@crenter.com",
    phone: "(55) 1234-5680",
    address: "Av. Reforma 245, CDMX",
  },
];

export const testimonials = [
  { name: "Ana García", text: "Excelente atención. El Dr. Mendoza me explicó todo el proceso con mucha paciencia. Totalmente recomendado.", rating: 5 },
  { name: "Roberto Sánchez", text: "La mejor clínica dental que he visitado. Personal amable y instalaciones de primera. Mi familia entera se atiende aquí.", rating: 5 },
  { name: "Laura Martínez", text: "Me daba mucho miedo ir al dentista, pero el equipo de Crenter me hizo sentir muy cómoda. Gracias por cambiar mi percepción.", rating: 5 },
];

export const footer = {
  description: "Clínica dental moderna dedicada a crear sonrisas saludables con tecnología de punta y atención personalizada.",
  quickLinks: ["Inicio", "Nosotros", "Servicios", "Equipo"],
  services: ["Endodoncia", "Ortodoncia", "Blanqueamiento", "Implantes"],
  contact: {
    address: "Av. Reforma 245, Col. Juárez, CDMX",
    phone: "(55) 1234-5678",
    email: "info@crenter-dental.com",
    hours: "Lun - Vie: 9:00 - 18:00 | Sáb: 9:00 - 14:00",
  },
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};
