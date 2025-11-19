import { Children, type ReactNode } from 'react'



export default function Footer(){
    return (
    <footer className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-xl text-white">
    


          <div className="flex items-center gap-2  font-medium">
            <span>© 2025 Kalaï Tariq</span>
          </div>



          <div className='text-center '>
            <h3 className="font-semibold  mb-3">Elsewhere</h3>
            <ul className="space-y-2 " >
              <li><Link href='https://github.com/TariqKalai'> Github  </Link> </li>
              <li><Link href='.'> CV  </Link> </li>
              <li><Link href='https://www.linkedin.com/in/tariq-kala%C3%AF'> LinkedIn  </Link> </li>
            </ul>
          </div>




    </footer>

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



