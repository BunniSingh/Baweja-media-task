import React from 'react'
import '.././App.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className="layout-container">
                <header className="layout-header">
                    <h1>Welcome to Baweja Media</h1>
                </header>
                <main className="layout-main">    
                    <Outlet />
                </main>
                <footer className="layout-footer">
                    <p>© 2023 Baweja Media</p>
                </footer>
            </div>
        </>
    )
}

export default Layout