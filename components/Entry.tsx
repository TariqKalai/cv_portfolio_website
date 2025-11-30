import { getEntries, createEntry, deleteEntry } from "@/lib/CV_entry";
import { ReactNode } from "react";
import { Entry_design } from "./Entry_design";

// type CV_Entry_props = {
//   open: boolean;
//   onClose: () => void;
// };

export default async function CV_Entry() {
  const entries = await getEntries();
  let buttoncolor =
    "p-1 rounded-xl border border-white bg-white/40 backdrop-blur text-center hover:bg-white/5 transition";
  return (
    <>
      {/* CREATE NEW ENTRY */}
      <button className="absolute top-3 right-3 text-gray-500 hover:text-black">
        ✕
      </button>

      <form action={createEntry} className="flex flex-col items-center gap-3">
        <h2 className="text-2xl">Create New Entry</h2>

        <label>
          Title:
          <input name="title" className="bg-white" />
        </label>

        <label>
          Date:
          <input name="date" className="bg-white" />
        </label>

        <label>
          Content:
          <textarea name="entry" className="bg-white"></textarea>
        </label>

        <button type="submit" className={buttoncolor}>
          Create
        </button>
      </form>

      <Entry_design canEdit={true} />
    </>
  );
}

type ModalProps = {
  children: ReactNode;
};

function Modal(props: ModalProps) {
  return (
    <div
      className="fixed inset-0
                      bg-black/40
                      items-center justify-center
                      backdrop-blur-xl
                      z-50
                      "
    >
      <div
        className="absolute left-1/2 -translate-1/2 top-1/2 
                            bg-white/50 border-white/80 text-black
                            rounded-xl 
                            p-6 w-64 shadow-xl"
      >
        <ul className="space-y-3">
          <li className="flex justify-center">
            {" "}
            <h2 className="text-lg font-bold mb-3">Login</h2>{" "}
          </li>

          <li className="w-full">{props.children}</li>
        </ul>
      </div>
    </div>
  );
}
