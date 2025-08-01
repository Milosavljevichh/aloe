import Link from "next/link";
import { BiLogoGmail, BiLogoInstagram, BiLogoFacebookCircle, BiLogoTiktok } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import CallCTA from "./CallCTA";

const navigationLinks = [
    { href: "/", label: "Početna" },
    { href: "/products", label: "Products" },
    { href: "/#deals", label: "Deals" },
    { href: "/contact", label: "Kontakt" },
];

export default function Footer() {
    return (
        <footer className="bg-primary-grey text-primary-white py-14 mt-16">

            <div className="flex flex-col md:flex-row max-w-6xl mx-auto justify-between gap-10">

                {/* Logo + description */}
                <div>
                    <img src="/logo-white.svg" alt="Forever Living logo" className="mb-4 mx-auto md:mx-0" />
                    <p className="text-sm text-gray-300 max-w-sm  font-text text-center md:text-left ">
                        Internet prodavnica kompanije Forever Living Products doo Beograd je jedina zvanična prodavnica artikala sa obeležjima Forever Living Products International.
                    </p>
                </div>

                <div className="max-wnone md:max-w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-3 pt-4">

                    {/* Navigation links */}
                    <div className="mx-auto md:mx-0 order-3 md:order-none">
                        <h4 className="w-full font-header font-semibold text-lg mb-4 text-center md:text-left">Navigacija</h4>
                        <NavigationMenu className="w-fit md:w-full max-w-none md:max-w-fit">
                            <NavigationMenuList className="w-fit md:w-full gap-2 flex flex-row md:flex-col items-start">
                                {navigationLinks.map((link, index) => (
                                    <NavigationMenuItem key={index}>
                                        <NavigationMenuLink
                                            href={link.href}
                                            className=" p-0 text-center md:text-left text-primary-white hover:text-primary-orange hover:bg-transparent py-1.5 font-medium">
                                            {link.label}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Contact info */}
                    <div className="mx-auto md:mx-0 order-1 md:order-none">
                        <div className="mx-auto">
                            <h4 className="font-header font-semibold text-lg mb-4 text-center md:text-left">Kontakt</h4>
                            <div className="space-y-3 text-sm text-gray-300">
                                <CallCTA bg="bg-transparent" arrow={null} border="border-0 shadow-none" />
                                <div className="ml-4 flex items-center gap-2  font-text">
                                    <BiLogoGmail size={24} className="text-primary-white" />
                                    <a href="mailto:office@forever.com" className=" w-full">office@forever.com</a>
                                </div>
                                <div className="ml-4 flex items-start gap-2  font-text">
                                    <FaPhoneAlt size={24} className="mt-1 text-primary-white" />
                                    <p className=" w-full">
                                        +060-342-2057
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social icons */}
                    <div className="mx-auto md:mx-0 order-2 md:order-none">
                        <div className="w-fit mx-auto">
                            <h4 className="font-header font-semibold text-lg mb-4">Pratite nas</h4>
                            <div className="flex gap-4 text-2xl text-primary-white">
                                <BiLogoInstagram className="hover:text-primary-orange hover:cursor-pointer transition" />
                                <BiLogoFacebookCircle className="hover:text-primary-orange hover:cursor-pointer transition" />
                                <BiLogoTiktok className="hover:text-primary-orange hover:cursor-pointer transition" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400  font-text">
                <p>© 2025 Forever Living Products Shop – All rights reserved.</p>
                <p className="mt-6">Website by: Milosavljevich</p>
            </div>
        </footer>
    );
}
