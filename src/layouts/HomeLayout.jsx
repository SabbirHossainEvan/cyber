import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import CategorySection from '../components/CategorySection';
import NewArrivalSection from '../components/NewArrivalSection';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main>

                <section>
                    <Hero></Hero>
                </section>
                <section>
                    {/* <Display></Display> */}
                    <ProductShowcase></ProductShowcase>
                </section>
                <section>
                    <CategorySection></CategorySection>
                </section>\
                <section>
                    <NewArrivalSection></NewArrivalSection>
                </section>
            </main>
            <footer>
                {/* <Footer></Footer> */}
            </footer>
        </div>
    );
};

export default HomeLayout;