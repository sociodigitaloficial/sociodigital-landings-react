import React, { useEffect } from 'react';
import Header from '@containers/header';
import Presentation from '@containers/presentation';
import SectionCarousel from '@containers/sectionCarousel'
import CallToAction from '@containers/callToAction';
import SectionVideo from '@containers/sectionVideo';
import CallToActionEnd from '@containers/callToActionEnd'
import publicidadData from '@context/publicidadData';

const Publicidad = () => {

    useEffect(() => {
        document.title = `${publicidadData.presentation.landing} | Socio Digital`
     });

    return (
        <>
            <Header />
            <Presentation propsApp={publicidadData.presentation}/>
            <SectionCarousel propsApp={publicidadData.carousel1}/>
            <CallToAction propsApp={publicidadData.callToAction1}/>
            <SectionVideo />
            <CallToAction propsApp={publicidadData.callToAction2}/>
            <SectionCarousel propsApp={publicidadData.carousel2}/>
            <CallToActionEnd propsApp={publicidadData.callToActionEnd} />
        </>
    );
}

export default Publicidad;