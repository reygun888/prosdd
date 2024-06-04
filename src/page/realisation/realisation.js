import React from 'react';
import './realisation.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

function Realisation() {
    return (
        <section className='realisation' id='realisation'>
            <div className="container">
                <h2 className='tReal text-center mb-5'>Mes réalisations</h2>
                <div className='real-container'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: -50,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        navigation={{
                            nextEl: '.custom-next-button',
                            prevEl: '.custom-prev-button',
                            clickable: true,
                        }}
                        // navigation={true}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        // pagination={true}

                        modules={[EffectCoverflow, Navigation, Pagination]}

                        className='swiper-container'
                    >
                        <SwiperSlide>
                            <div className="real-card">
                                <div className='swiper-img'>
                                    <img src={`${process.env.PUBLIC_URL}/img/Gestion.png`} alt='gestion' />
                                </div>
                                <div className='swiper-txt'>
                                    <h3 className='nReal'>Gestion RH pour "Ressource Formation"</h3>
                                    <p>Application web fermée, d’un gestionnaire de personnel pour divers évènements (absences, congé, ...).
                                    </p>
                                </div>
                                <div className='techU'>
                                    <i className="fa-regular fa-file-code me-1"></i><span>HTML,CSS,JS,PHP</span>
                                    <i className="fa-solid fa-database ms-3 me-1"></i><span>MySQL</span>
                                    <i className="fa-solid fa-bezier-curve ms-3 me-1"></i><span>Symfony</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="real-card">
                                <div className='swiper-img'>
                                    <img src={`${process.env.PUBLIC_URL}/img/profil.png`} alt='monprofil' />
                                </div>
                                <div className='swiper-txt'>
                                    <h3 className='nReal'>Site actuel "Mon profil"</h3>
                                    <p>Site personnaliser qui permet d'étendre la visibilité via le WEB, donne un moyen de communication supplémentaire et de montrer un savoir-faire.
                                    </p>
                                </div>
                                <div className='techU'>
                                    <i className="fa-regular fa-file-code me-1"></i><span>HTML,CSS,JS</span>
                                    <i className="fa-solid fa-folder-tree ms-3 me-1"></i><span>React, Bootstrap, Fontawesome, swiper, AOS</span>
                                    <i className="fa-solid fa-network-wired ms-3 me-1"></i><span>GitHub Page</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="real-card">
                                <div className='swiper-img'>
                                    <img src={`${process.env.PUBLIC_URL}/img/RF 1.png`} alt='securite' />
                                </div>
                                <div className='swiper-txt'>
                                    <h3 className='nReal'>Site vitrine pour "Sécurité d'Abord"</h3>
                                    <p>Création d'un site pour mettre en avant les atouts de l'entreprise "Sécurité d'Abord" avec un déploiement pour une présentation en situation réelle.
                                    </p>
                                </div>
                                <div className='techU'>
                                    <i className="fa-regular fa-file-code me-1"></i><span>HTML,CSS</span>
                                    <i className="fa-solid fa-folder-tree ms-3 me-1"></i><span>Bootstrap, Flaticon, Fontawesome</span>
                                    <i className="fa-solid fa-network-wired ms-3 me-1"></i><span>GitHub Action</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="real-card">
                                <div className='swiper-img'>
                                    <img src={`${process.env.PUBLIC_URL}/img/adm.png`} alt='adm' />
                                </div>
                                <div className='swiper-txt'>
                                    <h3 className='nReal'>Site pour l'ONG "Les Amis du Monde"</h3>
                                    <p>Création d'un site pour l'ONG "Les Amis de Monde" avec différentes catégories d'adhérents, des dons,...</p>
                                </div>
                                <div className='techU'>
                                    <i className="fa-regular fa-file-code me-1"></i><span>HTML,CSS,JS,PHP</span>
                                    <i className="fa-solid fa-database ms-3 me-1"></i><span>MySQL</span>
                                    <i className="fa-solid fa-bezier-curve ms-3 me-1"></i><span>Symfony</span>
                                    <i className="fa-solid fa-network-wired ms-3 me-1"></i><span>GitLab</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="slider-controller">
                            <div className="slider-controller-wrapper">
                                <div className='slider-arrow'>
                                    <div className="custom-prev-button">
                                        <i className="fa-solid fa-circle-chevron-left"></i>
                                    </div>
                                    <div className="custom-next-button">
                                        <i className="fa-solid fa-circle-chevron-right"></i>
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Realisation;
