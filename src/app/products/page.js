'use client'
import { useState } from 'react';
import products from '../../data/allProducts.json';
import Dashboard from '@/components/products/Dashboard';
import ProductsContainer from '@/components/products/ProductsContainer';

export default function Products(){

    const [selectedCategory, setSelectedCategory] = useState("");

    let categories = [];
    let filteredProducts;

    products.forEach(product => {
        if (categories.find((category) => category == product.productCategory)) {
            return;
        }
        categories.push(product.productCategory)
    });

    if (selectedCategory) {
        filteredProducts = products.filter(product => product.productCategory === selectedCategory)
    }

    const selectCategory = (category) => {
        if (category !== selectCategory) {
            setSelectedCategory(category)
        } else {setSelectedCategory("")}
    }

    return(
        <main className="max-w-6xl bg-primary-white relative mx-auto">
            <Dashboard categories={categories} selectCategory={selectCategory} />
            <ProductsContainer products={selectedCategory ? filteredProducts : products} />
        </main>
    )
}