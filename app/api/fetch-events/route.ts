import { db } from "@/db/index";
import { events } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const res = await fetch(
    `https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/${month}/${day}`,
  );

  const data = await res.json();

  const toInsert = [
    ...data.events.map((e: any) => ({
      date: `${month}-${day}`,
      year: e.year,
      description: e.text,
      category: "event",
    })),
    ...data.births.map((e: any) => ({
      date: `${month}-${day}`,
      year: e.year,
      description: e.text,
      category: "birth",
    })),
    ...data.deaths.map((e: any) => ({
      date: `${month}-${day}`,
      year: e.year,
      description: e.text,
      category: "death",
    })),
  ];

  await db.insert(events).values(toInsert);

  return NextResponse.json({ inserted: toInsert.length });
}
