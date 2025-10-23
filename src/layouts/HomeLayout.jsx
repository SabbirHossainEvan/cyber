import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;