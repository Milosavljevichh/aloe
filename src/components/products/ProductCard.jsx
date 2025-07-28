export default function ProductCard({name, description, category, image, price}){
    return (
        
            <div className="card w-full  bg-primary-white border border-gray-300 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        // src={image}
                        className="border border-b-gray-300"
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-header">
                        {name}
                    </h2>
                    <p className="font-text">{description}</p>
                    <div className="card-actions justify-between items-center mt-2">
                        <div className="border border-primary-orange rounded-sm px-4 text-primary-orange font-medium">{category}</div>
                        <div className="text-primary-orange font-bold text-lg">{price}</div>
                    </div>
                </div>
            </div>
    )
}