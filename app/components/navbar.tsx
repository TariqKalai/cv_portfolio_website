import { Children, type ReactNode } from 'react'

type NavbarProps = { children? : ReactNode}

export default function Navbar({children} : NavbarProps) {
  return (
    <nav 
    className='dark:bg-slate-700 dark:text-slate-100 py-4 
    fixed top-0 left-0 w-full  bg-linear-to-b from-slate-300 to-slate-100
    text-slate-700 shadow-[0_5px_20px_rgba(0,0,0,0.25)] text-[clamp(1.2rem,4vw,2.5rem)] '>
        
        <ul className = "flex container gap-4 items-center ">
            <li className='flex  items-center'>
            <Logo 
             src="https://avatars.githubusercontent.com/u/201063997?v=4"
            />
            <Title>Tariq Kalai CV</Title>
            </li>
            <li className ="ml-auto justify-between px-3"> 
                <nav className ="flex gap-5 ">
                    <Link href="./About">About me</Link>
                    <Link href=".">Social medias</Link>
                    <Link href=".">Skills</Link>
                </nav>
            </li>

        </ul>
    </nav>
  )
}


type LogoProps = {
    src: string
 }

function Logo(props : LogoProps ){

    return(
        <a href=".">
            <img src={props.src} className="w-15 md:w-24"/>
        </a>
    )
}

type LinkProps = 
{   children : ReactNode
    href : string       }

function Link(props: LinkProps){
    return(
        <a href={props.href} className ="text-[0.7rem] md:text-[1.5rem]">
            {props.children}
        </a>
    )
}





type TitleProps = { children : ReactNode}
function Title( props : TitleProps){
    return( 
        <span className='font-[Poppins] text-[0.8rem] md:text-[2rem] ' > {props.children} </span>
    )
}