import React from 'react';
import Navbar from '../components/NavBar';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import DetailsSection from '../components/ProductDetails/DetailsSection';
import ReviewsSection from '../components/ProductDetails/ReviewsSection';
import UserReviewsSection from '../components/ProductDetails/UserReviewsSection';
import DiscountProducts from '../components/DiscountProducts';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom'

const ProductDetailsLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <section>
                    <ProductDetails></ProductDetails>
                </section>
                <section>
                    <DetailsSection></DetailsSection>
                </section>
                <section>
                    <ReviewsSection></ReviewsSection>
                </section>
                <section>
                    <UserReviewsSection></UserReviewsSection>
                </section>
                <section>
                    <DiscountProducts></DiscountProducts>
                </section>
                <footer>
                    <Footer></Footer>
                </footer>
            </main>
        </div>
    );
};

export default ProductDetailsLayout;