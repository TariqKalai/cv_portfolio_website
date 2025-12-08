import { boolean, pgTable, text, uuid, date } from "drizzle-orm/pg-core";

export const entryTable = pgTable("entry", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  startDate: date("start").notNull(),
  endDate: date("end").notNull(),
  entry: text("entry").notNull(),
  organisation: text("organisation").notNull(),
  role: text("role").notNull(),
  skills: text("skills").notNull(),
});

export const portfolioTable = pgTable("portfolio", {});

export const usersTable = pgTable("users", {
  id: uuid().defaultRandom().primaryKey(),
  username: text().notNull().unique(),
  password: text().notNull(),
});
