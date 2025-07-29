'use client'
import { useState } from 'react';
import products from '../../data/allProducts.json';
import Dashboard from '@/components/products/Dashboard';
import ProductsContainer from '@/components/products/ProductsContainer';

export default function Products() {

    const [selectedCategory, setSelectedCategory] = useState("");
    const [filter, setFilter] = useState("");
    const [priceRange, setPriceRange] = useState([])
    const maxRange = 10000;

    //izdvajanje svake kategorije samo jednom
    const categories = Array.from(new Set(products.map(product => product.productCategory)));

    let categorizedProducts;

    //prikazujemo samo proizvode iz izabrane kategorije
    if (selectedCategory) {
        categorizedProducts = products.filter(product => product.productCategory === selectedCategory)
    } else {
        categorizedProducts = products;
    }

    //vadimo samo broj iz cene
    function parsePrice(priceStr) {
        const cleanStr = priceStr.replace(/[^\d.]/g, '').replace(/,/g, '');
        return parseFloat(cleanStr);
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

    return (
        <main className="max-w-6xl bg-primary-white relative mx-auto flex gap-4 min-h-full">
            <Dashboard maxRange={maxRange} categories={categories} selectCategory={selectCategory} selectFilter={selectFilter} selectedCategory={selectedCategory} changePriceRange={changePriceRange} />
            <ProductsContainer products={categorizedProducts} />
        </main>
    )
}