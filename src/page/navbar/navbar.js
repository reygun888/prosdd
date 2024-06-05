import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar() {
    document.addEventListener('DOMContentLoaded', () => {
        const toggler = document.querySelector('.navbar-toggler');
        const container = document.querySelector('.container');
      
        toggler.addEventListener('click', () => {
          container.classNameList.toggle('dark-background');
        });
      });

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 0) {
        setIsScrolled(true);
        } else {
        setIsScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);
    
    const openCv = () => {
        window.open(`${process.env.PUBLIC_URL}/file/cv2.pdf`, '_blank');
    };
    const location = useLocation();
    // Vérifiez si la page actuelle est la page /cv
    const isCvPage = location.pathname === '/cv';
    const isQrPage = location.pathname === '/qr';
    const isCVisitePage = location.pathname === '/cVisite'
    return (
        <div>
        <nav className={`navbar navbar-expand-lg ${isScrolled ? 'dark-background' : ''}`}>
            <div className="container-fluid">
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="dark-background collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-center">
                        <Link to='/prosdd' className="nav-link" href="#home"><i className="fa-solid fa-house"></i></Link>
                        {!isCvPage && !isQrPage && !isCVisitePage &&(
                            <>
                        <hr className='navtr'></hr>
                        <a className="nav-link" href="#about">Qui suis-je</a>
                        <hr className='navtr'></hr>
                        <a className="nav-link" href="#competences">Mes compétences</a>
                        <hr className='navtr'></hr>
                        <a className="nav-link" href="#realisation">Mes réalisations</a>
                        <hr className='navtr'></hr>
                        <a className="nav-link" href="#contact">Contact</a>
                        <hr className='navtr'></hr>
                        <button className="nav-link" onClick={openCv} style={{ cursor: 'pointer' }}>Mon CV</button>
                            </>
                        )}  
                    </div>
                </div>
            </div>
        </nav>
        </div>
    
    );
}

export default Navbar;