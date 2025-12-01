"use client";

import {
  getEntries,
  createEntry,
  deleteEntry,
  editEntry,
} from "@/lib/CV_entry";
import { ReactNode, useState } from "react";
// Define the shape of a single Entry object
type Entry = {
  // Matches Drizzle uuid().defaultRandom().primaryKey()
  id: string;
  title: string;
  startDate: string;
  endDate: string | null;
  entry: string;
  organisation: string;
  role: string;
  skills: string;
};
type DesignProps = {
  canEdit?: boolean;
  entries: Entry[];
};

export function Entry_design({ canEdit = false, entries }: DesignProps) {
  const [openEditMenu, setOpenEditMenu] = useState(false);

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
                {entry.title}
              </h3>
              <span className="text-base text-gray-700 font-medium">
                {entry.startDate} - {entry.endDate}
              </span>
            </div>

            {/* Subheader: Location/Details (Subtle text) */}
            <p className="text-lg text-gray-800 italic mb-4">
              Organization:{entry.organisation} | Role: {entry.role}
            </p>

            <hr className="my-4 border-white/50" />

            {/* Description / Bullet Points (Clean, readable text) */}
            <div className="text-gray-900 leading-relaxed">
              <p className="mb-4">{entry.entry}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <b>Skills Used:</b> [{entry.skills}]
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
              <button
                onClick={() => setOpenEditMenu(true)}
                className={buttoncolor}
              >
                Modify
              </button>
              {openEditMenu && <Formulary entres={entries} />}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

type FormularyProps = {
  entres: Entry[];
};
function Formulary({ entres }: FormularyProps) {
  const inputClasses = "bg-white p-2 rounded border border-gray-300 w-full";
  const labelClasses = "flex flex-col text-sm font-medium w-full max-w-sm";
  const buttonClass =
    "p-2 rounded-xl border border-blue-500 bg-blue-500/80 text-white hover:bg-blue-600 transition";

  return (
    <>
      {entres.map((entry) => (
        <form
          action={editEntry}
          className="flex flex-col items-center gap-4 p-4 bg-white/20 rounded-lg"
          key={entry.id}
        >
          <input type="hidden" name="id" value={entry.id} />
          <h2 className="text-2xl font-bold">Create New Entry</h2>

          <label className={labelClasses}>
            Title:
            <input
              name="title"
              defaultValue={entry.title}
              className={inputClasses}
              required
            />
          </label>

          <div className="flex gap-4 w-full max-w-sm">
            <label className={labelClasses}>
              Start Date:
              <input
                type="date"
                name="start"
                defaultValue={entry.startDate}
                className={inputClasses}
                required
              />
            </label>
            <label className={labelClasses}>
              End Date:
              <input type="date" name="end" className={inputClasses} />
            </label>
          </div>

          <label className={labelClasses}>
            Organisation:
            <input
              name="organisation"
              defaultValue={entry.organisation}
              className={inputClasses}
              required
            />
          </label>

          <label className={labelClasses}>
            Role:
            <input
              name="role"
              defaultValue={entry.role}
              className={inputClasses}
              required
            />
          </label>

          <label className={labelClasses}>
            Content:
            <textarea
              name="entry"
              defaultValue={entry.entry}
              className={inputClasses}
              required
            ></textarea>
          </label>

          <label className={labelClasses}>
            Skills:
            <input
              name="skills"
              defaultValue={entry.skills}
              className={inputClasses}
              required
            />
          </label>

          <button type="submit" className={buttonClass}>
            Modify Entry
          </button>
        </form>
      ))}
    </>
  );
}
