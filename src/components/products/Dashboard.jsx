export default function Dashboard({categories, selectCategory}){
    return (
        <aside className="max-w-44">
            <ul>
                {categories.map(category =>(
                    <li key={category}><button onClick={() => selectCategory(category)}>{category}</button></li>
                ))}
            </ul>
        </aside>
    )
}