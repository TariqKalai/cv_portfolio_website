import { type ReactNode } from "react";

export default function Page() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-10 text-center">Admin Panel</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {/* Projects */}
        <a
          href="./Edit/NewEntry"
          className="p-6 rounded-xl border border-gray-300 bg-white/30 backdrop-blur text-center hover:bg-white/50 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Add / Edit Entries</h2>
          <p className="text-sm text-gray-700">Create or edit new entry.</p>
        </a>

        {/* Experience */}
        <button className="p-6 rounded-xl border border-gray-300 bg-white/30 backdrop-blur hover:bg-white/50 transition">
          <h2 className="text-xl font-semibold mb-2">Add Experience</h2>
          <p className="text-sm text-gray-700">
            Add jobs, internships, responsibilities, dates.
          </p>
        </button>

        {/* Hero Section */}
        <button className="p-6 rounded-xl border border-gray-300 bg-white/30 backdrop-blur hover:bg-white/50 transition">
          <h2 className="text-xl font-semibold mb-2">Edit Hero Section</h2>
          <p className="text-sm text-gray-700">
            Change title, subtitle, intro text, and image.
          </p>
        </button>

        {/* Skills */}
        <button className="p-6 rounded-xl border border-gray-300 bg-white/30 backdrop-blur hover:bg-white/50 transition">
          <h2 className="text-xl font-semibold mb-2">Edit Skills</h2>
          <p className="text-sm text-gray-700">
            Add/remove skills or reorder them.
          </p>
        </button>

        {/* Contact Info */}
        <button className="p-6 rounded-xl border border-gray-300 bg-white/30 backdrop-blur hover:bg-white/50 transition">
          <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
          <p className="text-sm text-gray-700">
            Edit email, phone, GitHub, LinkedIn links.
          </p>
        </button>

        {/* Footer */}
        <button className="p-6 rounded-xl border border-gray-300 bg-white/30 backdrop-blur hover:bg-white/50 transition">
          <h2 className="text-xl font-semibold mb-2">Footer Settings</h2>
          <p className="text-sm text-gray-700">
            Edit copyright text or footer layout.
          </p>
        </button>
      </div>
    </div>
  );
}
