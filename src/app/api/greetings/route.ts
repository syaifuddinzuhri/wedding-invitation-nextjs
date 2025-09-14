import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { Greeting } from "@/types/sheet";
import { NextRequest } from "next/server";

const filePath = path.join(process.cwd(), "data/greetings.json");

export async function GET(request: Request) {
  try {
    const fileData = fs.existsSync(filePath)
      ? fs.readFileSync(filePath, "utf8")
      : "[]";
    const greetings: Greeting[] = JSON.parse(fileData);
    return Response.json({
      data: greetings,
    });
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newGreeting: Greeting = body;
    let greetings: Greeting[] = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8").trim();
      greetings = fileData ? JSON.parse(fileData) : [];
    }
    greetings.push(newGreeting);
    fs.writeFileSync(filePath, JSON.stringify(greetings, null, 2));
    return Response.json({
      data: body,
    });
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
