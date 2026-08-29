import type { BookingInput } from "./booking-schema";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";
const SPREADSHEET_ID = "1eNDWek686SX1e6w_PxPwDeE8Yd3_Yix8x42Mi4eYj60";
const SHEET_RANGE = "'Заявки с сайта'!A:L";

export async function appendBookingRow(data: BookingInput): Promise<void> {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const connectionKey = process.env["GOOGLE_SHEETS_API_KEY"];
  if (!lovableKey || !connectionKey) {
    throw new Error("Google Sheets connection is not configured");
  }

  const submittedAt = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });
  const row = [
    submittedAt,
    data.firstName,
    data.lastName,
    data.country,
    data.city,
    data.phone,
    data.email,
    data.day,
    data.time,
    data.goal,
    data.personalDataConsent ? "Да" : "Нет",
    new Date().toISOString(),
  ];

  const response = await fetch(
    `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_RANGE}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": connectionKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
    },
  );

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Sheets append failed [${response.status}]: ${errorBody}`);
    throw new Error(`Sheets append failed [${response.status}]: ${errorBody}`);
  }
}
