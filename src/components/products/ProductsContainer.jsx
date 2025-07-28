export default function ProductsContainer({products}){
    return (
        <section className="w-full mt-16">
            {
                products.map(product => (
                    <div className="mb-10">
                        <p>{product.productName}</p>
                        <p>{product.productDescription}</p>
                        <p>{product.productCategory}</p>
                        <p>{product.productPrice}</p>
                    </div>
                ))
            }
        </section>
    )
}