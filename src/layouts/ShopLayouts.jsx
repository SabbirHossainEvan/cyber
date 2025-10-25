import React from 'react';
import Navbar from '../components/NavBar';
import SidebarFilter from '../components/ShopLayout/SidebarFilter';
import ProductGrid from '../components/ShopLayout/ProductGrid';
import Footer from '../components/Footer';




const ShopLayouts = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <div className='grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto px-4'>
                    <div className='col-span-1 mt-20 hidden md:block sticky top-0 h-fit'>
                        <SidebarFilter></SidebarFilter>
                    </div>
                    <div className='col-span-3 mt-20'>
                        <ProductGrid></ProductGrid>
                    </div>
                </div>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ShopLayouts;