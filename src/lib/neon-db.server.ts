import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { Pool } from "pg";

export const bookings = pgTable("bookings", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id"),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  preferredDay: text("preferred_day").notNull(),
  preferredTime: text("preferred_time").notNull(),
  goal: text("goal"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL ?? process.env.DATABASE_URL,
  max: 5,
});

export const neonDb = drizzle(pool, { schema: { bookings } });
