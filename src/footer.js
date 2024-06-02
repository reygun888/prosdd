import React from "react";
import './footer.css';

function Footer(){
    const openCv = () => {
        window.open('file/cv.pdf');
    };
    return(
        <section className="footer">
            <div className="links">
            <a className='' href="https://github.com/reygun888">
                <i className="fa-brands fa-github"></i>
            </a>
            <a className='' href="https://github.com/reygun888">
                <i className="fa-brands fa-linkedin mx-3"></i>
            </a>
            <p className="print" onClick={openCv} style={{ cursor: 'pointer' }}>
                <i className="fa-solid fa-circle-user"></i>
            </p>
            </div>
            <div className="copyright">
                <p>David SAT © 2024</p>
                <br></br>
                <p>Tous droits réservés</p>
            </div>
        </section>
    );
}
export default Footer;