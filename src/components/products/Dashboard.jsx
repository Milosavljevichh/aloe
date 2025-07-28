export default function Dashboard({ categories, selectCategory }) {
    return (
        <aside className="max-w-44 bg-primary-white border border-gray-200 shadow-sm sticky top-16 self-start h-fit">
            <ul className="divide-y divide-gray-200">
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => selectCategory(category)}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
