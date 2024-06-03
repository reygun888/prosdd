import React from "react";
import './footer.css';

function Footer(){
    const openCv = () => {
        const url = `${process.env.PUBLIC_URL}/file/cv.pdf`;
        console.log('PUBLIC_URL:', process.env.PUBLIC_URL);
        console.log('URL:', url);
        const windowFeatures = 'width=800,height=600,scrollbars=yes,resizable=yes';
        window.open(url, windowFeatures);
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