import React from 'react';
import Navbar from '../components/NavBar';
import ProductGrid from "../components/ProductGrid";



const ShopLayouts = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <ProductGrid></ProductGrid>
            </main>
        </div>
    );
};

export default ShopLayouts;