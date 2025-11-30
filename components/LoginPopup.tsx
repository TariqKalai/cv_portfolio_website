import React from "react";

type LoginPopup_props = {
  open: boolean;
  onClose: () => void;
};

export default function LoginPopup({ open, onClose }: LoginPopup_props) {
  if (!open) return null;
  return (
    <>
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

            <li className="w-full">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                ✕
              </button>

              <form className="flex flex-col gap-3">
                <input
                  className="w-full px-1 py-1 bg-white/40 border-slate-500
                                        rounded-md font-semibold shadow-md"
                  placeholder="Username"
                  type="text"
                  name="username"
                ></input>

                <input
                  className="w-full px-1 py-1 bg-white/40 border-slate-500
                                        rounded-md font-semibold shadow-md"
                  placeholder="Password"
                  type="password"
                  name="password"
                ></input>

                <button
                  className="mt-4 w-full py-2 bg-white/40
                                        text-black rounded-md font-semibold
                                        hover:bg-slate-400 transition-colors
                                            shadow-md"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
