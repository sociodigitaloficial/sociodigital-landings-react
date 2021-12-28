import React, { useEffect } from 'react';
import Header from '@containers/header';
import Presentation from '@containers/presentation';
import SectionCarousel from '@containers/sectionCarousel'
import CallToAction from '@containers/callToAction';
import SectionVideo from '@containers/sectionVideo';
import CallToActionEnd from '@containers/callToActionEnd'
import instagramData from '@context/instagramData';

const Instagram = () => {

    useEffect(() => {
        document.title = `${instagramData.presentation.landing} | Socio Digital`
     });

    return (
        <>
            <Header />
            <Presentation propsApp={instagramData.presentation}/>
            <SectionCarousel propsApp={instagramData.carousel1}/>
            <CallToAction propsApp={instagramData.callToAction1}/>
            <SectionVideo />
            <CallToAction propsApp={instagramData.callToAction2}/>
            <SectionCarousel propsApp={instagramData.carousel2}/>
            <CallToActionEnd propsApp={instagramData.callToActionEnd} />
        </>
    );
}

export default Instagram;