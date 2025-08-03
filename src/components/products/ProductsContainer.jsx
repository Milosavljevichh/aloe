import ProductCard from "./ProductCard";

export default function ProductsContainer({ products }) {
    
    return (
        <section className="w-full mt-18 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(products.length === 0) ? <p className="w-fit mx-auto col-span-3">Traženi proizvodi trenutno nisu u ponudi</p>
             : products.map(product => (
                <ProductCard
                    key={product.productName}
                    name={product.productName}
                    description={product.productDescription}
                    price={product.productPrice}
                    image={product.productImage}
                    category={product.productCategory}
                />
            ))}
        </section>
    );
}
