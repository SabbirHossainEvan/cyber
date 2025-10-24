import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Display from '../components/Display';

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
                    <Display></Display>
                </section>
            </main>
            <footer>
                {/* <Footer></Footer> */}
            </footer>
        </div>
    );
};

export default HomeLayout;