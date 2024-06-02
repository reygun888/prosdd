import React from 'react';
import './carousel.css';
function carousel() {
return(

    <section className='carou' id='carou'>
    <div className="presentation-container">
        <div className='slogan'>
            <p>Bonjour, je m'appelle David</p>
            <p>Bienvenue sur ma page de profil</p>
            <h1>De développeur Web FullStack</h1>
                <div className='spec'>
                    <i className="sp fa-solid fa-code"></i><span> Front-End </span>
                    <i className="sp fa-solid fa-database"></i><span> Back-End </span>
                    <i className="sp fa-solid fa-circle-nodes"></i><span> Conception </span>
                </div>
        </div>
    <img src={`${process.env.PUBLIC_URL}/img/plan.jpeg`} className="presentation" alt="presentaton"/>
    </div>
    </section>

);
}
export default carousel;
