import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/greetings.json");

export async function GET() {
  try {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));

    return NextResponse.json({ message: "Semua data ucapan berhasil dihapus" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat menghapus data" },
      { status: 500 }
    );
  }
}
