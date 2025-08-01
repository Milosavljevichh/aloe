import products from '@/data/allProducts.json'; // ili kako već uvoziš

export default function ProductPage({ params }) {
    const { slug } = params;

    const product = products.find(p =>
        p.productName.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (!product) {
    return <div>Proizvod nije pronađen.</div>;
  }

    return (
        <main className="max-w-6xl mx-auto px-6 pt-16">
            <div className="flex flex-col md:flex-row items-center gap-12 min-h-[500px] h-fit">

                {/* Slika proizvoda */}
                <div className="w-full h-full flex items-center justify-center md:w-1/2">
                    <img
                        src={product.productImage}
                        alt={product.productName}
                        className="w-full max-h-full object-contain rounded-xl shadow-md"
                    />
                </div>

                {/* Info blok */}
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    {/* Naziv */}
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                        {product.productName}
                    </h1>

                    {/* Cena */}
                    <p className="text-xl text-primary-orange font-semibold">
                        {product.productPrice.toLocaleString()} RSD
                    </p>

                    {/* Opis */}
                    <p className="text-gray-700 leading-relaxed text-base">
                        {product.productDescription}
                    </p>

                    {/* Istaknute prednosti */}
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                        <li>Zamislite da rasečete list aloje i da konzumirate gel direktno iz biljke. Naš Forever Aloe Vera Gel je nešto najbliže originalu.</li>
                        <li>99.7% čistog aloe vera gela</li>
                        <li>Bez konzervansa</li>
                    </ul>

                    {/* CTA */}
                    <button
                        className="mt-4 bg-primary-orange text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-200 text-sm font-medium w-fit"
                    >
                        Dodaj u korpu
                    </button>
                </div>
            </div>
        </main>


    );
}
