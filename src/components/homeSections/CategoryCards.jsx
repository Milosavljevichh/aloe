import Image from "next/image";
import Link from "next/link";

export default function CategoryCards() {
    return (
        <section className="flex flex-col lg:flex-row gap-6 justify-between py-8 min-h-[40vh] max-w-6xl px-4 mx-auto mt-20">
            {/* Kartica 1, pretvoriti u komponentu */}
            <Link
                href="/products"
                className="border border-gray-300 shadow-lg transition overflow-hidden w-full lg:w-[48%] h-fit lg:h-48"
            >
                <div className=" flex flex-col lg:flex-row border-b-2 lg:border-b-0 border-t-2 border-t-solid border-green-600 h-full">
                    <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">FREE MANGO HYDRATION KIT</h3>
                        <p className="text-sm text-gray-600 mt-1">w/ Orders $50+*</p>
                        <p className="text-sm text-gray-600">Code: <strong>QUENCH</strong></p>
                    </div>
                        <span className="mt-4 text-green-600 font-medium text-sm">
                            SHOP NOW →
                        </span>
                    </div>
                    <div className="relative w-full lg:w-[40%] min-h-42 h-full lg:h-auto">
                        <Image
                            src="/products/argi.jpg"
                            alt="Refresh Spray"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Link>
            <Link
                href="/products"
                className="border border-gray-300 shadow-lg transition overflow-hidden w-full lg:w-[48%] h-fit lg:h-48"
            >
                <div className=" flex flex-col lg:flex-row border-b-2 lg:border-b-0 border-t-2 border-t-solid border-green-600 h-full">
                    <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">READY, SET, REFRESH </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                with plant-based ingredients that eliminate oil, dirt and odors for added volume
                            </p>
                        </div>
                        <span className="mt-4 text-green-600 font-medium text-sm">
                            SHOP NOW →
                        </span>
                    </div>
                    <div className="relative w-full lg:w-[40%] min-h-42 h-full lg:h-auto">
                        <Image
                            src="/products/pasta.jpg"
                            alt="Refresh Spray"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Link>
        </section>
    );
}
