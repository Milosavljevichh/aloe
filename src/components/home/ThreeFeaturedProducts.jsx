import products from "@/data/featuredProducts.json"

export default function ThreeFeaturedProducts() {
    return (
        <section id="deals" className="min-h-[80vh] max-w-6xl mx-auto  my-20">
            <div className="flex items-center justify-center gap-6 flex-wrap">
                <h2 className="text-6xl whitespace-nowrap font-regular font-header opacity-95">Naša Preporuka</h2>
                <hr className="flex-1 h-0.5 bg-black opacity-15 mt-4" />
            </div>
            <h2 className="text-xl font-medium font-text pb-2 opacity-75 w-fit max-w-lg mt-10">
                Pažljivo smo birali proizvode koji mogu biti potrebni svakome, bilo kada, bilo gde.
            </h2>

            <div className="w-full mt-15 grid grid-cols-3 gap-6">
                {products.map((product, idx) => (
                    <a
                        key={idx}
                        href={product.href}
                        className="relative overflow-hidden rounded-sm group aspect-[6/7] flex shadow-xl"
                    >
                        <img
                            src={`/products/${product.image}`}
                            alt={product.name}
                            className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-5 min-w-11/12 left-1/2 -translate-x-1/2 rounded-md bg-white/60 px-4 py-3 text-sm font-medium font-text text-black backdrop-blur-sm">
                            <div className="flex justify-between items-center">
                                <span className="uppercase font-bold">{product.name}</span>
                                <span className="text-xs opacity-80">od {product.price} RSD</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
