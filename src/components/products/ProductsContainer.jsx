export default function ProductsContainer({products}){
    return (
        <section>
            {
                products.map(product => (
                    <div>
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