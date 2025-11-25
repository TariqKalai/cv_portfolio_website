import { getEntries, createEntry } from '@/lib/CV_entry'

export default async function CV_Entry() {
  const entries = await getEntries()

  return (
    <>
      {/* CREATE NEW ENTRY */}
      <form action={createEntry}>
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

      <hr />

      {/* UPDATE EXISTING ENTRIES */}
      {entries.map((entry) => (
        <form action={createEntry} key={entry.id} style={{ marginBottom: "1rem" }}>
          <h3>Edit Entry</h3>

          {/* hidden ID to link with server action */}
          <input type="hidden" name="id" value={entry.id} />

          <label>
            Title:
            <input name="title" value={entry.title} />
          </label>

          <label>
            Date:
            <input name="date" value={entry.date} />
          </label>

          <label>
            Content:
            <textarea name="entry" value={entry.entry}></textarea>
          </label>

          <button type="submit">Save</button>
        </form>
      ))}

      <hr />

      {/* SIMPLE LIST */}
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>{entry.title}</li>
        ))}
      </ul>
    </>
  )
}
