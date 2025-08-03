import Select from "../PriceSelect";
import PriceSlider from "../PriceSlider";
import { Button } from '@/components/ui/button';

export default function Dashboard({ selectedFilter, categories, selectCategory, selectFilter, selectedCategory, changePriceRange, maxRange, resetFilters, isOpen, setIsOpen }) {

    const filterOptions = [{
        text: 'Bez filtera',
        value: '0'
    },
    {
        text: 'Rastuća cena',
        value: 'ASC'
    },
    {
        text: 'Opadajuća cena',
        value: 'DESC'
    }]

    return (
        <aside
            className={`
            bg-primary-white border md:border-none md:shadow-none z-40 
            fixed top-0 left-0 h-full w-64 p-4 transform transition-transform duration-300 
            ${isOpen ? 'translate-x-0 shadow-sm' : '-translate-x-full'} 
            md:translate-x-0 md:static md:top-16 md:h-fit md:w-48 md:p-0 md:transform-none md:sticky
        `}
        >
            <div className="flex justify-between items-center md:hidden mb-4">
                <h2 className="font-semibold text-lg">Filteri</h2>
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-black"
                >
                    ✕
                </button>
            </div>

            <ul className="divide-y divide-gray-200 border border-gray-200 shadow-sm mb-4">
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => {
                                selectCategory(category);
                                setIsOpen(false); // zatvori meni na mobilnom
                            }}
                            className={
                                "w-full text-left px-4 py-2 hover:cursor-pointer transition duration-200" +
                                (selectedCategory === category
                                    ? " bg-primary-orange text-primary-white font-medium"
                                    : "")
                            }
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>

            <Select setFilter={selectFilter} options={filterOptions} selectedFilter={selectedFilter} />
            <PriceSlider changePriceRange={changePriceRange} maxRange={maxRange} resetFilters={resetFilters} />
        </aside>

    );
}
