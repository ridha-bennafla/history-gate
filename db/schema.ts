import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

// Single table for all event types (events, births, deaths).
// Category column used instead of 3 separate tables.
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  date: text("date").notNull(),
  year: integer("year").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
