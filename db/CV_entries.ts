import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const entryTable = pgTable('entry', {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  date: text("date").notNull(),
  entry : text("entry").notNull(),
})