import React from "react";
import './contact.css';

function Contact(){
    
    return(
        <section className="contacts" id="contact">
            <div className="">
                <h2>Contact</h2>
            </div>
            <br></br>
            <div className="argu">
                <p>Ma page de profil vous à plu ? Vous souhaitez me connaitre d'avantage ?</p>
                <h6>Alors n'hesitez pas à consulter mon CV pour plus de détails ou bien me contacter directement pour une mise en relation.</h6>
            </div>
            <div className="liaison my-5">
                <a className='rel1 btn btn-pill' href="tel:+33612131415">
                    <i className="fa-solid fa-mobile-screen-button"></i>
                    <p className=''>+33 6 14 82 50 09</p>
                </a>
                <a className='rel2 btn btn-pill' href="mailto:david.sat@hotmail.fr">
                    <i className="fa-regular fa-envelope"></i>
                    <p className=''>david.sat@hotmail.fr</p>
                </a>
                <div className="rel3 btn btn-pill">
                    <i className="fa-solid fa-people-arrows"></i>
                    <p className="px-3"><span>Je suis disponible en Île de France</span></p>
                </div>
            </div>
        </section>
    );
}
export default Contact;