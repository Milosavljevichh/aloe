export default function FeaturedProducts() {
    return (
        <section className="min-h-[80vh] max-w-6xl mx-auto py-20">
            <div className="flex items-center justify-center gap-6 flex-wrap">
                <hr className="flex-1 h-0.5 bg-black opacity-30" />
                <h2 className="text-4xl whitespace-nowrap font-medium font-header pb-2 opacity-95">Naša Preporuka</h2>
                <hr className="flex-1 h-0.5 bg-black opacity-30" />
            </div>
                <h2 className="text-xl whitespace-nowrap font-medium font-text pb-2 opacity-75 mx-auto w-fit">Pogledajte neke od pažljivo izabranih proizvoda</h2>


            <div className="w-full mt-20 flex gap-6">
                <div className="w-1/2 overflow-hidden flex flex-col gap-5">

                    <div className="flex gap-6">
                        <a href="" className="w-1/2 rounded-md overflow-hidden group">
                            <div className="aspect-square overflow-hidden rounded-md">
                                <img
                                    src="/products/dodatak1.jpg"
                                    alt="Forever Absorbent-C"
                                    className="w-full h-full object-cover object-center scale-110 transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <h6 className="mt-2 ml-2 text-base font-medium font-text">Forever Multi-Maca</h6>
                        </a>
                        <a href="" className="w-1/2 rounded-md overflow-hidden group">
                            <div className="aspect-square overflow-hidden rounded-md">
                                <img
                                    src="/products/dodatak2.jpg"
                                    alt="Forever Absorbent-C"
                                    className="w-full h-full object-cover object-center scale-110 transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <h6 className="mt-2 ml-2 text-base font-medium font-text">Forever Absorbent-C</h6>
                        </a>

                    </div>
                    <a href="" className="block rounded-md overflow-hidden group">
                        <div className="aspect-video overflow-hidden rounded-md">
                            <img
                                src="/products/argi.jpg"
                                alt="ARGI+"
                                className="w-full h-full object-cover object-center scale-110 transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <h6 className="mt-2 ml-2 text-base font-medium font-text">ARGI+ Voćni Napitak</h6>
                    </a>

                </div>
                <div className="w-1/2 overflow-hidden flex flex-col-reverse gap-6">

                    <div className="flex gap-6">
                        <a href="" className="w-1/2 rounded-md overflow-hidden group">
                            <div className="aspect-square overflow-hidden rounded-md">
                                <img
                                    src="/products/dezedorans.jpg"
                                    alt="Forever Absorbent-C"
                                    className="w-full h-full object-cover object-bottom scale-110 transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <h6 className="mt-2 ml-2 text-base font-medium font-text">Aloe Ever-Shield Deodorant</h6>
                        </a>
                        <a href="" className="w-1/2 rounded-md overflow-hidden group">
                            <div className="aspect-square overflow-hidden rounded-md">
                                <img
                                    src="/products/pasta.jpg"
                                    alt="Forever Absorbent-C"
                                    className="w-full h-full object-cover object-center scale-110 transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <h6 className="mt-2 ml-2 text-base font-medium font-text">Forever Bright Toothgel</h6>
                        </a>

                    </div>
                    <a href="" className="block rounded-md overflow-hidden group">
                        <div className="aspect-video overflow-hidden rounded-md">
                            <img
                                src="/products/logicSystem.jpg"
                                alt="ARGI+"
                                className="w-full h-full object-cover object-center scale-110 transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <h6 className="mt-2 ml-2 text-base font-medium font-text">Skin Care System</h6>
                    </a>

                </div>

            </div>
        </section>
    )
}