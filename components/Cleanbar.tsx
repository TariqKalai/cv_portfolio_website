"use client";

import { useState, type ReactNode } from "react";
import LoginPopup from "./LoginPopup";
import { getSession } from "@/lib/session";

export default async function Cleanbar() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = await getSession();

  return (
    <>
      <nav
        className="fixed top-6 
                        left-1/2 -translate-x-1/2
                        w-[95%] sm:w-[75%] max-w-120
                        rounded-3xl shadow-2lg
                        bg-white/20  backdrop-blur-sm border border-white/40
                        text-[#3D3D3D] dark:text-slate-300
                        transiton-all duration-500 z-10000
                         "
      >
        <ul className="flex justify-between items-center w-full font-medium px-5 sm:px-10 py-2 ">
          <li>
            {" "}
            <Link href="..">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="../About">About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="..">Portfolio</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="..">Contact</Link>{" "}
          </li>
          {!isLoggedIn && (
            <li>
              {" "}
              <button
                className="
                    block                           /* augmente la hitbox */
                    px-1 py-1 sm:px-2 sm:py-2 md:px-3 md:py-3                       /* padding confortable */
                    rounded-3xl                      /* arrondi visible */
                    text-[12px]  min-[400px]:text-[16px]
                    hover:bg-white/10 hover:text-[18px] hover:[&>img]:h-7     /* hover propre */
                    transition-all duration-200     /* smooth */"
                onClick={() => setOpen(true)}
              >
                <img src="/login.svg" alt="login" className="h-6" />
              </button>
            </li>
          )}
        </ul>
      </nav>

      <LoginPopup open={open} onClose={() => setOpen(false)} />
    </>
  );
}

type LinkProps = { children: ReactNode; href: string };

function Link(props: LinkProps) {
  return (
    <a
      href={props.href}
      className="
            block                           /* augmente la hitbox */
            px-1 py-1 sm:px-2 sm:py-2 md:px-3 md:py-3                       /* padding confortable */
            rounded-3xl                      /* arrondi visible */
            text-[12px]  min-[400px]:text-[16px]
            hover:bg-white/5 hover:text-[18px] hover:[&>img]:h-7     /* hover propre */
            transition-all duration-200     /* smooth */
          "
    >
      {props.children}
    </a>
  );
}
