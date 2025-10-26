'use client'
import { useState, useEffect } from 'react';
import products from '../../data/allProducts.json';
import Dashboard from '@/components/products/Dashboard';
import ProductsContainer from '@/components/products/ProductsContainer';

export default function Products() {

    const [selectedCategory, setSelectedCategory] = useState("");
    const [filter, setFilter] = useState("");
    const [priceRange, setPriceRange] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [minRange, setMinRange] = useState(Infinity);
    const [maxRange, setMaxRange] = useState(0);


    //izdvajanje svake kategorije samo jednom
    const categories = Array.from(new Set(products.map(product => product.productCategory)));

    let categorizedProducts;

    useEffect(() => {
        modifyAllowedPriceRange(categorizedProducts);
    }, [selectedCategory]);
    //prikazujemo samo proizvode iz izabrane kategorije
    if (selectedCategory) {
        categorizedProducts = products.filter(product => product.productCategory === selectedCategory)
    } else {
        categorizedProducts = products;
    }

    // pretraga po nazivu / opisu (case-insensitive, bez dijakritika)
    const normalize = (s = "") => s
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    const q = normalize(searchQuery).trim();
    if (q) {
        categorizedProducts = categorizedProducts.filter(p => {
            const name = normalize(p.productName);
            const desc = normalize(p.productDescription || "");
            return name.includes(q) || desc.includes(q);
        });
    }

    function modifyAllowedPriceRange(productsList = products) {
        let tempMin = Infinity;
        let tempMax = 0;
        console.log(productsList)
        productsList.filter(product => {
            if (parsePrice(product.productPrice) > tempMax) {
                tempMax = parsePrice(product.productPrice)
            }
            if (parsePrice(product.productPrice) < tempMin) {
                tempMin = parsePrice(product.productPrice)
            }
        });
        setMinRange(tempMin)
        setMaxRange(tempMax)
    }
    //vadimo samo broj iz cene
    // Podržava formate poput: "4,848,13RSD", "3,364RSD", "1375,54RSD", kao i kombinacije sa tačkama.
    function parsePrice(priceStr = '') {
        if (typeof priceStr !== 'string') return NaN;
        // Zadrži samo cifre, zarez i tačku (ukloni RSD i razmake)
        const raw = priceStr.replace(/[^\d.,]/g, '');
        if (!raw) return NaN;

        const lastComma = raw.lastIndexOf(',');
        const lastDot = raw.lastIndexOf('.');

        // Odredi decimalni separator (ako postoji) – pretpostavi da poslednji separator deli decimale (2 cifre)
        let decimalSep = null;
        if (lastComma !== -1 && lastDot !== -1) {
            // Ako postoje oba, poslednji separator pobedjuje
            decimalSep = lastComma > lastDot ? ',' : '.';
        } else if (lastComma !== -1) {
            const decimalsLen = raw.length - lastComma - 1;
            if (decimalsLen === 2) decimalSep = ',';
        } else if (lastDot !== -1) {
            const decimalsLen = raw.length - lastDot - 1;
            if (decimalsLen === 2) decimalSep = '.';
        }

        // Ukloni sve separatore da dobijemo samo cifre
        const digits = raw.replace(/[.,]/g, '');
        if (!digits) return NaN;

        // Ako imamo decimale (2 cifre), podeli poslednje 2 cifre kao decimale
        if (decimalSep) {
            const intPart = digits.slice(0, -2) || '0';
            const decPart = digits.slice(-2);
            return parseFloat(intPart) + parseFloat(decPart) / 100;
        }

        // Nema decimala – tretiraj kao ceo broj
        return parseInt(digits, 10);
    }

    if (priceRange.length === 2) {
        const [min, max] = priceRange;
        categorizedProducts = categorizedProducts.filter(product => {
            const price = parsePrice(product.productPrice);
            if (max === maxRange && price >= maxRange) {
                return true
            } else return price >= min && price <= max;
        });
    }

    //sortiramo proizvode po ceni, rastucoj ili opadajucoj tj. filtriramo
    if (filter) {
        if (filter === "ASC") {
            categorizedProducts = [...categorizedProducts].sort((a, b) => parsePrice(a.productPrice) - parsePrice(b.productPrice));
        } else if (filter === "DESC") {
            categorizedProducts = [...categorizedProducts].sort((a, b) => parsePrice(b.productPrice) - parsePrice(a.productPrice));
        }
    }

    const selectCategory = (category) => {
        if (category !== selectedCategory) {
            setSelectedCategory(category)
        } else { setSelectedCategory("") }
    }

    const selectFilter = (filter) => {
        setFilter(filter)
    }

    const changePriceRange = (range) => {
        setPriceRange(range)
    }

    const resetFilters = () => {
        setSelectedCategory("")
        setFilter("")
        setPriceRange([])
    }
    
    return (
        <main className="max-w-6xl px-4 bg-primary-white relative mx-auto flex gap-4 min-h-full">
            <button
                className="md:hidden absolute top-4 right-4 z-50 bg-primary-orange text-white px-3 py-2 rounded"
                onClick={() => setIsDashboardOpen(!isDashboardOpen)}
            >
                ☰ Filteri
            </button>

            <Dashboard
                selectedFilter={filter}
                resetFilters={resetFilters}
                minRange={minRange}
                maxRange={maxRange}
                categories={categories}
                selectCategory={selectCategory}
                selectFilter={selectFilter}
                selectedCategory={selectedCategory}
                changePriceRange={changePriceRange}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                isOpen={isDashboardOpen}
                setIsOpen={setIsDashboardOpen}
            />
            <ProductsContainer products={categorizedProducts} />
        </main>
    )
}