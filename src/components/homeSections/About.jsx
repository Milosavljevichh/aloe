import { Button } from "../ui/button"
import CallCTA from "../CallCTA"

export default function About() {
    return (
        <section id="workOpportunity" className="max-w-6xl mx-auto pb-20">

            <div className="flex items-end justify-center gap-6 flex-wrap">
                <h2 className="text-4xl md:text-6xl whitespace-nowrap font-regular font-header opacity-95">Posao iz fotelje?</h2>
                <hr className="hidden md:block flex-1 h-0.5 bg-black opacity-30 mb-1" />
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
                <h2 className="text-lg md:text-xl text-center md:text-left px-2 md:px-0 font-medium font-text pb-2 opacity-75 w-fit max-w-lg my-10">
                    Radite na razvoju sopstvenog posla i stvorite nešto što može trajati celog života, postanite <b>saradnik</b>
                </h2>
                <div className="max-w-2/5 flex justify-center md:justify-start w-full">
                    <CallCTA />
                </div>
            </div>

            <div className="mt-10 md:mt-0 w-full h-full flex flex-col md:flex-row-reverse items-start justify-between  gap-10">
                <div className="max-w-none md:max-w-2/5 p-5">
                    <p className="font-text text-lg">
                        Zamisli situaciju u kojoj ne moraš da ideš na posao od 9 do 5 i u kojoj samom sebi određuješ kada ćeš raditi, koliko ćeš raditi i odakle.. Uz dobro postavljen biznis, to je itekako moguće!<br />
                        Ako ti i dalje sve ovo zvuči nerealno, pročitaj detaljnije tekst ispod:<br /><br />
                        Podizanje biznisa od nule je uvek teško, a poslovanje u Srbiji predstavlja poseban izazov – međutim, jedna kompanija se u tome veoma istakla i uvek su joj potrebni poslovni saradnici!<br />
                        Da, dobro si pročitao/la – ne krećeš od 0, i ne, nisi zaposlen već si poslovni saradnik od samog starta svog poslovnog puta.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4 mt-10">
                        <Button className={"border-1 border-solid border-primary-orange hover:border-primary-orange bg-primary-orange text-primary-white transition duration-500 hover:cursor-pointer"}>
                            <span className="flex items-baseline gap-2">
                                Saznaj više
                            </span>
                        </Button>
                        <Button className={"border-1 border-solid border-primary-orange hover:border-primary-orange bg-transparent hover:bg-primary-orange text-primary-orange hover:text-primary-white transition duration-500 hover:cursor-pointer"}>
                            <span className="flex items-baseline gap-2">
                                Kontakt
                            </span>
                        </Button>
                    </div>
                </div>
                <div className="max-w-none md:max-w-1/2 p-5 relative w-[90%] md:w-full h-[40vh] md:h-[60vh] mx-auto md:mx-0 max-h-[525px]">
                    <img className="hidden md:block absolute border-2 border-solid border-primary-white left-1/2 top-7/12 -translate-x-1/2 -translate-y-5/12 h-96 aspect-square object-cover rounded-sm z-10" src="/pictures/work_from_home.jpg" alt="" />
                    <img className="absolute top-0 left-0 h-96 aspect-square object-cover rounded-sm" src="/pictures/work_from_home2.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}