'use server'


import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { entryTable } from '../db/CV_entries'
import { db } from '.'


export async function getEntries() {
  return db.select().from(entryTable)

}
export async function createEntry(form: FormData) {
  await db.insert(entryTable).values({
    title: String(form.get('title')),
    date: String(form.get('date')),
    entry: String(form.get('entry')),
  })
  redirect((await headers()).get('referer') ?? '/')
}

export async function editEntry(form : FormData){

    await db 
        .update(entryTable)
        .set({
            title: String(form.get('title')),
            date: String(form.get('date')),
            entry: String(form.get('entry')),
          }).where(eq(entryTable.id, String(form.get('id'))))
    redirect((await headers()).get('referer') ?? '/')
}

export async function deleteEntry(id: string) {
  await db.delete(entryTable).where(eq(entryTable.id, id))
  redirect((await headers()).get('referer') ?? '/')
}