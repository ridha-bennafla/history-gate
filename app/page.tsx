import { db } from "@/db/index";
import { events } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function Home() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const date = `${month}-${day}`;

  const allEvents = await db.select().from(events).where(eq(events.date, date));

  const historicalEvents = allEvents.filter((e) => e.category === "event");
  const births = allEvents.filter((e) => e.category === "birth");
  const deaths = allEvents.filter((e) => e.category === "death");

  return (
    <main>
      <h1>This Day in History — {date}</h1>

      <section>
        <h2>Events</h2>
        {historicalEvents.map((e) => (
          <div key={e.id}>
            <strong>{e.year}</strong> — {e.description}
          </div>
        ))}
      </section>

      <section>
        <h2>Births</h2>
        {births.map((e) => (
          <div key={e.id}>
            <strong>{e.year}</strong> — {e.description}
          </div>
        ))}
      </section>

      <section>
        <h2>Deaths</h2>
        {deaths.map((e) => (
          <div key={e.id}>
            <strong>{e.year}</strong> — {e.description}
          </div>
        ))}
      </section>
    </main>
  );
}
