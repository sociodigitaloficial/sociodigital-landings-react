import React from 'react';
import '@styles/sectionVideo.scss';

import poster from '@images/poster.png'
import video from '@videos/publicidad.mp4'

const Section = () => {

    return (
        <section className="section">
            <h2 className="section-title">¿El <strong className="section-title-strong">PRECIO</strong> te hace dudar?, quizás no debas invertir en publicidad aún:</h2>
            <div className="video-container">
                <video className="video-video" src={video} poster={poster} controls></video>
                    <p className="video-alert">Siempre debes considerar antes de hacer publicidad digital:</p>
                    <div className="video-disclaimers">
                        <p>La publicidad digital funciona mediante pujas, por eso debes colocar más dinero que la competencia para mostrar tus anuncios, si no posees ese dinero <b>ni siquiera empezarás a competir</b>.</p>
                        <p>La publicidad digital solo masificará tu propuesta comercial, pero si esta última es mala (precio, producto, plaza, etc.), <b>ni la mejor campaña del mundo logrará hacerte vender</b>.</p>
                        <p>La publicidad digital <b>no funciona igual para todos</b>, a veces cierra ventas online, a veces consigue interesados, a veces logra posicionarte, depende del rubro y de tu modelo de negocios.</p>
                    </div>
                    <p className="video-message">Conversa con nosotros, te orientaremos, hemos hecho muchas campañas de publicidad digital, sabemos lo que tu PYME necesita mejorar o si ya está lista para competir.</p>
            </div>
        </section>
    );
}

export default Section;