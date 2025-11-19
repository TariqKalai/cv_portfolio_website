import { Children, type ReactNode } from 'react'


export default function Cleanbar(){
    return (
        
        <nav className="fixed top-6  left-1/2 -translate-x-1/2
                        w-[75%] max-w-120
                        rounded-3xl shadow-2xl 
                        bg-white/5 dark:bg-white/5 backdrop-blur-sm
                        text-white
                         ">


            <ul className = "flex justify-between w-full text-white font-medium px-10  py-2">
                <li> <Link href='.'>Home</Link>  </li>
                <li> <Link href='./About'>About</Link>  </li>
                <li> <Link href='.'>Portfolio</Link>  </li>
                <li> <Link href='.'>Contact</Link>  </li>
            </ul>

        </nav>

    )
}


type LinkProps = 
{   children : ReactNode
    href : string       }

function Link(props: LinkProps){
    return(
        <a href={props.href} className ="text-[16px]">
            {props.children}
        </a>
    )
}



