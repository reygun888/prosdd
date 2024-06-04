import React from 'react';
import { Link } from 'react-router-dom';
import './competences.css';

function Competences() {

    return (
        <section className="competences" id='competences'>
            <h2 className='text-center my-5'>Mes Compétences</h2>
            <div className="comp card-container">
                <div className="card-about-us" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <div className='spec'>
                    <Link to='/cv'className="secret"><i className="sp fa-solid fa-code"></i></Link><span> Front-End </span>  
                    </div>
                    <div className="about-us-p mt-3">
                        <p>Réalisation et intégration de sites web et mobiles responsive, accessibles et répondant aux normes W3C.</p>
                        <hr></hr>
                        <div className='detail d-flex justify-content-between mx-5'>
                            <ul>
                                <li>HTML <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></li>
                                <li>CSS <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></li>
                                <li>JavaScript <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></li>
                            </ul>
                            <ul>
                                <li>Angular <i className="ms-5 fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></li>
                                <li>Bootstrap <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></li>
                                <li>React <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comp card-container ">
            <div className="card-about-us" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <div className='spec'>
                        <i className="sp fa-solid fa-database"></i><span> Back-End </span>
                    </div>
                    <div className="about-us-p mt-3">
                        <p>Développement de sites web, création et gestion de bases de données, programmation orientée objet, résolution de BUG, mise en ligne.</p>
                        <hr></hr>
                        <div className='detail d-flex justify-content-between mx-5'>
                            <ul>
                                <li>PHP <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></li>
                                <li>MySQL <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></li>
                            </ul>
                            <ul>
                                <li>SEO <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></li>
                                <li>Symfony <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comp card-container ">
                 <div className="card-about-us" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <div className='spec'>
                        <i className="sp fa-solid fa-circle-nodes"></i><span> Conception </span>
                    </div>
                    <div className="about-us-p mt-3">
                        <p>Création, répartition, organisation des differentes étapes, en amont et pendant le développement du site</p>
                        <hr></hr>
                        <div className='detail d-flex  mx-5'>
                            <ul className='tache w-100'>
                                <li>Cahier des charges <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></li>
                                <li>Diagramme de classe <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></li>
                                <li>User Case <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></li>
                                <li>Évaluation de taches <i className="ms-5 fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i></li>
                                <li>Organisation des sprints <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></li>
                            </ul>
                            <ul className='tache w-50'>
                                <li>Pack Office <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></li>
                                <li>Figma <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></li>
                                <li>Draw.io <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></li>
                                <li>GitLab <i className="ms-5 fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></li>
                                <li>Trello <i className="ms-5 fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comp card-container ">
                 <div className="card-about-us" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <div className='spec'>
                        <i className="sp fa-solid fa-mug-saucer"></i><span> Environnement de Travail </span>
                    </div>
                    <div className="about-us-p mt-3">
                        <div className='detail'>
                            <ul className='taches'>
                                <li><i className="fa-solid fa-computer me-1"></i><span className='cate'>Système d'Exploitation: </span> MacOs.</li>
                                <li><i className="fa-solid fa-network-wired me-1"></i><span className='cate'>WorkFlow: </span> Git, Xampp, PHPMyAdmin, NPM.</li>
                                <li><i className="fa-solid fa-laptop-code me-1"></i><span className='cate'>IDE: </span> Visual Code Studio.</li>
                                <li><i className="fa-solid fa-user-tie me-1"></i><span className='cate'> Savoir-être: </span> Adaptation, collaboration, organisation, rigueur, force de proposition.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Competences;
