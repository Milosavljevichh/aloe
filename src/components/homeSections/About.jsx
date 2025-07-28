import { Button } from "../ui/button"
import CallCTA from "../CallCTA"

export default function About() {
    return (
        <section id="workOpportunity" className="max-w-6xl mx-auto pb-20">

            <div className="flex items-end justify-center gap-6 flex-wrap">
                <h2 className="text-6xl whitespace-nowrap font-regular font-header opacity-95">Posao iz fotelje?</h2>
                <hr className="flex-1 h-0.5 bg-black opacity-30 mb-1" />
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium font-text pb-2 opacity-75 w-fit max-w-lg my-10">
                    Radite na razvoju sopstvenog posla i stvorite nešto što može trajati celog života, postanite <b>saradnik</b>
                </h2>
                <div className="max-w-2/5 flex justify-start w-full">
                    <CallCTA />
                </div>
            </div>

            <div className="w-full h-full flex items-start justify-between flex-row-reverse  gap-10">
                <div className="max-w-2/5">
                    <p className="font-text text-lg">
                        Zamisli situaciju u kojoj ne moraš da ideš na posao od 9 do 5 i u kojoj samom sebi određuješ kada ćeš raditi, koliko ćeš raditi i odakle.. Uz dobro postavljen biznis, to je itekako moguće!<br />
                        Ako ti i dalje sve ovo zvuči nerealno, pročitaj detaljnije tekst ispod:<br /><br />
                        Podizanje biznisa od nule je uvek teško, a poslovanje u Srbiji predstavlja poseban izazov – međutim, jedna kompanija se u tome veoma istakla i uvek su joj potrebni poslovni saradnici!<br />
                        Da, dobro si pročitao/la – ne krećeš od 0, i ne, nisi zaposlen već si poslovni saradnik od samog starta svog poslovnog puta.
                    </p>
                    <div className="flex items-center justify-start gap-4 mt-10">
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
                <div className="max-w-1/2 relative w-full h-[60vh]  max-h-[525px]">
                    <img className="absolute border-2 border-solid border-primary-white left-1/2 top-7/12 -translate-x-1/2 -translate-y-5/12 h-96 aspect-square object-cover rounded-sm z-10" src="/pictures/work_from_home.jpg" alt="" />
                    <img className="absolute top-0 left-0 h-96 aspect-square object-cover rounded-sm" src="/pictures/work_from_home2.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}