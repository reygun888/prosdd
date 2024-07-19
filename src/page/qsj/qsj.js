import React from 'react';
import './qsj.css';

function Qsj() {
    return (
        <section id="about" className="about">
            <div className="propos card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <div className='identite'>
                            <img src={`${process.env.PUBLIC_URL}/img/portrait.jpg`} alt="About" className="pics img-fluid rounded-start" width="300" height="200" />
                            <div className="fiche">
                                <p><span>Nom</span>: SAT David</p>
                                <p><span>Région actuelle</span>: Ile-de-France</p>
                                <p><span>Hobbies</span>: Padel Tennis, Jeux Vidéo, Moto</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="tReal mb-4">Qui-suis-je</h2>
                            <p className="card-text">
                                Après plusieurs années d'expérience dans l’hôtellerie, j'avais ressenti le besoin de m'orienter vers un secteur qui m'a toujours passionné : le développement informatique. Mon parcours de formation en développement web et mobile m'a permis d'acquérir une solide base de connaissances techniques, notamment dans les langages de programmation web tels que HTML, CSS, JavaScript, PHP et SQL. J’ai également enrichi mon savoir-faire en travaillant avec les frameworks Angular et Symfony, et en appliquant les principes de conception responsive et d’accessibilité web.
                                <br></br>
                                Mes expériences passées m'ont permis de développer des qualités essentielles telles que la rigueur, la gestion du temps, et la capacité à travailler sous pression, atouts qui seront indéniablement bénéfiques dans le domaine du Dev.Web. De plus, ma certification en développement web et mobile témoigne de ma capacité à assimiler rapidement de nouvelles technologies et à m'adapter à des environnements techniques variés.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Qsj;