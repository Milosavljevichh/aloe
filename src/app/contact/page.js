import FAQ from "@/components/FAQ"
import { BiLogoGmail, BiLogoInstagram, BiLogoFacebookCircle, BiLogoTiktok } from 'react-icons/bi';
import CallCTA from "@/components/CallCTA";

export default function Contact() {
    return (
        <main className="bg-primary-white">
            <div className="bg-primary-white max-w-6xl px-4 mx-auto rounded-lg p-8 pt-18 grid md:grid-cols-2 gap-8">

                {/* Left side - Title + Socials */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-5xl font-semibold mb-4 font-header">Contact us</h1>
                        <p className="text-gray-700 mb-12 font-text">Get in touch with us for any enquiries and questions</p>
                        <FAQ />
                    </div>

                </div>

                {/* Right side - Info blocks */}
                <div className="grid grid-cols-2 gap-6 text-sm">
                    <div className="flex flex-col w-full h-full justify-end">
                        <h3 className="text-gray-500">general inquiries</h3>
                        <p className="font-medium">work@horizonstudio.work</p>
                    </div>
                    <div className="flex flex-col w-full h-full justify-end items-end">
                        <h3 className="text-gray-500">careers</h3>
                        <p className="font-medium">hr@horizonstudio.work</p>
                    </div>

                    {/* Full width image */}
                    <div className="col-span-2 flex items-center">
                        <img
                            src="/aloe_product_cropped.png"
                            alt="Contact visual"
                            className="w-full h-56 object-cover object-center rounded-md"
                        />
                    </div>
                    <div className="flex w-full h-full items-start">
                        <CallCTA bg="bg-primary-grey hover:bg-primary-grey" border="border-0" />
                    </div>
                    <div className="flex w-full h-full items-start justify-end">

                        <div className="flex gap-4 text-2xl text-primary-grey pt-3">
                            <BiLogoInstagram className="hover:text-primary-orange hover:cursor-pointer transition" />
                            <BiLogoFacebookCircle className="hover:text-primary-orange hover:cursor-pointer transition" />
                            <BiLogoTiktok className="hover:text-primary-orange hover:cursor-pointer transition" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}