import { google } from "googleapis";
import credentials from "@/config/credentials.json";

export async function GET() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: "14lG4SV33sE9to0izsCNIslk9_yBluJoYTvYF4Jss7N4",
            range: "LIST",
        });

        return Response.json({
            data: response.data.values,
        });
    } catch (err: any) {
        return Response.json({ error: err.message }, { status: 500 });
    }
}
