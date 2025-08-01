import Select from "../PriceSelect";
import PriceSlider from "../PriceSlider";
import { Button } from '@/components/ui/button';

export default function Dashboard({ selectedFilter, categories, selectCategory, selectFilter, selectedCategory, changePriceRange, maxRange, resetFilters }) {

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
        <aside className="max-w-48 w-full bg-primary-white sticky top-16 self-start h-fit">
            <ul className="divide-y divide-gray-200 border border-gray-200  shadow-sm">
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => selectCategory(category)}
                            className={
                                "w-full text-left px-4 py-2 hover:cursor-pointer transition duration-200" +
                                (selectedCategory === category && " bg-primary-orange text-primary-white font-medium")
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
