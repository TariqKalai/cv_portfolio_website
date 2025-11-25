import { getEntries, createEntry, deleteEntry } from '@/lib/CV_entry'

export default async function CV_Entry() {
  const Entry = await getEntries()

  return (
    <>
      <form action={createEntry}>
        <label>
          New Entry: <input name="title" />
        </label>
        <button>Submit</button>
      </form>

      <ul>
        {Entry.map((Entry, id) => (
          <form action={deleteEntry.bind(null, id)} key={id}>
            <li>{Entry.title}</li>
            <button>
              Delete Entry
            </button>
          </form>
        ))}
      </ul>
    </>
  )
}
