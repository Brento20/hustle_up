import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div>
        <ul className="nav nav-tabs">
        <li className="nav-item">
            <a
            href="#home"
            onClick={() => handlePageChange('Home')}

            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            id="boldheader"
            >
            RESUME
            </a>
        </li>
        <li className="nav-item">
            <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
            ABOUT
            </a>
        </li>
        <li className="nav-item">
            <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
            PROJECTS
            </a>
        </li>
        <li className="nav-item">
            <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
            CONTACT
            </a>
        </li>
        </ul>
        </div>
    );
}

export default NavTabs;
