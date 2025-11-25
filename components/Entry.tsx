import { getEntries, createEntry } from '@/lib/CV_entry'

export default async function CV_Entry() {
  const entries = await getEntries()

  return (
    <>
      {/* CREATE NEW ENTRY */}
      <form action={createEntry} className='flex flex-col'>
        <h2>Create Entry</h2>

        <label>
          Title:
          <input name="title" />
        </label>

        <label>
          Date:
          <input name="date"  />
        </label>

        <label>
          Content:
          <textarea name="entry"></textarea>
        </label>

        <button type="submit">Create</button>
      </form>

      

      {/* SIMPLE LIST */}
        {entries.map((entry) => (
          
       <ul className='flex gap-3' key={entry.id} >
          <li>{entry.title}</li>
          <li>{entry.date}</li>
          <li>{entry.entry}</li>
        
      </ul>
        ))}
    </>
  )
}
