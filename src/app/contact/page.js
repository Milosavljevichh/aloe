import FAQ from "@/components/FAQ"
import { BiLogoGmail, BiLogoInstagram, BiLogoFacebookCircle, BiLogoTiktok } from 'react-icons/bi';

export default function Contact() {
    return (
        <main className="bg-primary-white">
            <div className="bg-primary-white max-w-6xl mx-auto rounded-lg p-8 pt-18 grid md:grid-cols-2 gap-8">

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
                    <div>
                        <h3 className="text-gray-500">general inquiries</h3>
                        <p className="font-medium">work@horizonstudio.work</p>
                        <p>+7 911 296 92 17</p>
                    </div>
                    <div>
                        <h3 className="text-gray-500">careers</h3>
                        <p className="font-medium">hr@horizonstudio.work</p>
                    </div>
                    <div>
                        <h3 className="text-gray-500">collaborations</h3>
                        <p className="font-medium">n.karpova@horizonstudio.work</p>
                        <p>+7 931 212-16-07</p>
                    </div>
                    <div>
                        <h3 className="text-gray-500">address</h3>
                        <p>191189, St. Petersburg,</p>
                        <p>Moika River Embankment 67–69</p>
                    </div>

                    {/* Full width image */}
                    <div className="col-span-2">
                        <img
                            src="/aloe_product_cropped.png"
                            alt="Contact visual"
                            className="w-full h-56 object-cover object-center rounded-md"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}