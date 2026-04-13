interface WhatsAppMessageOptions {
  number: string; name?: string; service?: string; date?: string; time?: string; customMessage?: string;
}

export function buildWhatsAppURL(options: WhatsAppMessageOptions): string {
  const { number, name, service, date, time, customMessage } = options;
  let message: string;
  if (customMessage) { message = customMessage; }
  else {
    const parts = ["Hola, me gustaría agendar una cita en Crenter Dental."];
    if (name) parts.push(`Mi nombre es ${name}.`);
    if (service) parts.push(`Estoy interesado/a en: ${service}.`);
    if (date) parts.push(`Fecha preferida: ${date}.`);
    if (time) parts.push(`Hora preferida: ${time}.`);
    parts.push("¿Podrían confirmarme disponibilidad? Gracias.");
    message = parts.join("\n");
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(options: WhatsAppMessageOptions): void {
  window.open(buildWhatsAppURL(options), "_blank", "noopener,noreferrer");
}
