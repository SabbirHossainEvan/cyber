import React from 'react';
import Navbar from '../components/NavBar';
import ShoppingCartList from '../components/ShopingCart/ShoppingCartList';
import OrderSummary from '../components/ShopingCart/OrderSummary';
import Footer from '../components/Footer';

const ShoppingCart = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto px-4 mb-10'>
                <section className='mt-20'>
                    <ShoppingCartList></ShoppingCartList>
                </section>
                <section className='mt-0 md:mt-30'>
                    <OrderSummary></OrderSummary>
                </section>
            </div>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default ShoppingCart;