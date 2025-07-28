export default function ProductCard({name, description, category, image, price}){
    return (
        
            <div className="card w-full  bg-primary-white border border-gray-200 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-between items-end mt-2">
                        <div className="border border-gray-400 rounded-xl px-4">{category}</div>
                        <div className="text-primary-orange font-bold text-xl">{price}</div>
                    </div>
                </div>
            </div>
    )
}