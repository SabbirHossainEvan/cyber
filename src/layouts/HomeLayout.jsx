import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet>
                    <section>
                        
                    </section>
                </Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;