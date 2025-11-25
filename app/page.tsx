import CV_Entry from "@/components/Entry"
import Cleanbar from "../components/Cleanbar"
import Navbar from "../components/navbar"

let color = "text-emerald-200"

export default function Page() {
  return (
    <>
    <div>
        <h1 className={`text-3xl sm:text-6xl text-center
                      font-bold  mb-8 
                      leading-tight `}>
        Hello!
        </h1>

      <div className=" pt-19 grid grid-cols-1 md:grid-cols-2  ">
        <div className="justify-self-center color "><img src={"logo.svg"} alt="LOGO"/></div>
        <div>
                        
                        <h2 className={`text-2xl sm:text-4xl 
                                      text-center
                                      font-bold  mb-8 
                                      leading-tight `}>
                          Hello my name in japan
                        </h2>
                        <div>
                          Je suis étudiant en Sciences de l'Ingénieur
                          et qui implique 30 jours ouvrables 
                          au sein d’une entreprise où je pourrai 
                          réaliser un projet concret. 
                           Industriel, spécialité Génie Électrique, à l’ECAM Bruxelles. Je suis actuellement à la recherche d’un stage pour ma 3ᵉ année de bachelier, qui doit se dérouler entre le 7 avril 2026 et le 22 mai 2026, 
                        </div>

                      
        </div>
      </div>

    </div>
    </>
  )


}
