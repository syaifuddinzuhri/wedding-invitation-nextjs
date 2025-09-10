import { google } from "googleapis";
import credentials from "@/config/credentials.json";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sheetId = searchParams.get("sheetId") || "";
    const sheetName = searchParams.get("sheetName") || "";

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: sheetName,
    });

    return Response.json({
      data: response.data.values,
    });
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
