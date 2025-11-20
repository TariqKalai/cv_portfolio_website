import { Children, type ReactNode } from 'react'


export default function Cleanbar(){
    return (
        <div>
        <nav className="fixed top-6 
                        left-1/2 -translate-x-1/2
                        w-[95%] sm:w-[75%] max-w-120
                        rounded-3xl shadow-2xl 
                        bg-white/5 dark:bg-white/5 backdrop-blur-sm
                        text-white
                        transiton-all duration-500
                         ">


            <ul className = "flex justify-between w-full font-medium px-5 sm:px-10 py-2 ">
                <li> <Link href='.'>Home</Link>  </li>
                <li> <Link href='./About'>About</Link>  </li>
                <li> <Link href='.'>Portfolio</Link>  </li>
                <li> <Link href='.'>Contact</Link>  </li>
                <li><Link href='./Login'><img src="/login.svg" alt="login" className='h-6'></img></Link>  </li>
            </ul>

        </nav>
        </div>

    )
}


type LinkProps = 
{   children : ReactNode
    href : string       }

function Link(props: LinkProps){
    return(
        <a href={props.href} className="
            block                           /* augmente la hitbox */
            px-1 py-1 sm:px-2 sm:py-2 md:px-3 md:py-3                       /* padding confortable */
            rounded-3xl                      /* arrondi visible */
            sm:text-[16px]
            hover:bg-white/15               /* hover propre */
            transition-all duration-200     /* smooth */
          ">
            {props.children}
        </a>
    )
}



