import { getEntries, createEntry, deleteEntry } from "@/lib/CV_entry";
import { ReactNode } from "react";

type DesignProps = {
  canEdit?: boolean;
};

export async function Entry_design({ canEdit = false }: DesignProps) {
  const entries = await getEntries();

  let buttoncolor =
    "p-1 rounded-xl border border-white bg-white/40 backdrop-blur text-center hover:bg-white/5 transition";
  return (
    <>
      {entries.map((entry) => (
        <div className="flex justify-center w-full my-8" key={entry.id}>
          {/*  ## Error Message Each child in a list should have a unique "key" prop. So the key is entry id*/}
          {/* The Entry Container: Soft Glassmorphism Card */}
          <div
            className="max-w-4xl w-full p-8 rounded-2xl 
                  bg-white/30 backdrop-blur-md border border-white/40 
                  shadow-lg transition hover:shadow-xl"
          >
            {/* Header: Company/School & Dates (High contrast, bold hierarchy) */}
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-900">
                [Entry Title: {entry.title}]
              </h3>
              <span className="text-base text-gray-700 font-medium">
                [Date Range: {entry.date}]
              </span>
            </div>

            {/* Subheader: Location/Details (Subtle text) */}
            <p className="text-lg text-gray-800 italic mb-4">
              [Organization: ECAM Bruxelles] | [Role/Degree: Bachelier 3e année]
            </p>

            <hr className="my-4 border-white/50" />

            {/* Description / Bullet Points (Clean, readable text) */}
            <div className="text-gray-900 leading-relaxed">
              <p className="mb-4">{entry.entry}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  **Project:** [Brief description of the main project/task.]
                </li>
                <li>
                  **Skills Used:** [List of technologies or soft skills used,
                  e.g., AutoCAD, MATLAB, Gestion de projet.]
                </li>
              </ul>
            </div>
          </div>

          {canEdit && (
            <div className="flex flex-col">
              <form className="flex flex-col" action={deleteEntry}>
                <input type="hidden" name="id" value={entry.id} />
                <button type="submit" className={buttoncolor}>
                  Delete
                </button>
              </form>
              <button className={buttoncolor}>Modify</button>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
