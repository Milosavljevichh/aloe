export default function FeaturedProducts() {
    return (
        <section className="min-h-[80vh] max-w-6xl mx-auto py-20">
            <div className="flex items-center justify-center gap-14">
                <hr className="relative w-full z-9 h-0.5 bg-black max-w-50 opacity-80" />
                <h2 className="capitalize text-4xl max-w-fit font-medium font-header pb-2">Danas Izdvajamo</h2>
                <hr className="relative w-full z-9 h-0.5 bg-black max-w-50 opacity-80" />
            </div>

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