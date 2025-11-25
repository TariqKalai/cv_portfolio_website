'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const Entry: { title: string; date: string; entry:string;  }[] = []

export async function getEntries() {
  return Entry
}

export async function createEntry(form: FormData) {
  Entry.push({
    title: String(form.get('title')),
    date: String(form.get('date')),
    entry: String(form.get('entry'))
  })
  redirect((await headers()).get('referer') ?? '/')
}

export async function deleteEntry(id: number) {
  Entry.splice(id, 1)
  redirect((await headers()).get('referer') ?? '/')
}