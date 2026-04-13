export interface CalendarEventOptions {
  title: string;
  description?: string;
  startDateTime: string;
  durationMinutes?: number;
  location?: string;
}

export function buildGoogleCalendarURL(options: CalendarEventOptions): string {
  const { title, description = "", startDateTime, durationMinutes = 60, location = "" } = options;
  const start = new Date(startDateTime);
  const end = new Date(start.getTime() + durationMinutes * 60_000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const params = new URLSearchParams({ action: "TEMPLATE", text: title, dates: `${fmt(start)}/${fmt(end)}`, details: description, location });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function openGoogleCalendar(options: CalendarEventOptions): void {
  window.open(buildGoogleCalendarURL(options), "_blank", "noopener,noreferrer");
}

export async function createCalendarEvent(
  options: CalendarEventOptions & { patientName: string; patientPhone: string }
): Promise<{ success: boolean; eventId?: string; error?: string }> {
  try {
    const response = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(options) });
    if (!response.ok) { const error = await response.text(); return { success: false, error }; }
    const data = await response.json();
    return { success: true, eventId: data.eventId };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : "Error de conexión" };
  }
}
