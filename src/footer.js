import React from "react";
import './footer.css';

function Footer(){
    const openCv = () => {
        const cvUrl = `${process.env.PUBLIC_URL}/file/cv2.pdf`;
        console.log('CV URL:', cvUrl);
        window.open(cvUrl, '_blank');
    };
    return(
        <section className="footer">
            <div className="links">
            <a className='' href="https://github.com/reygun888">
                <i className="fa-brands fa-github"></i>
            </a>
            <a className='' href="https://www.linkedin.com/in/david-sat-9b715a30b">
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