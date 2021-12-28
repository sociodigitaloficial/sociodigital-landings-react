import React from 'react';
import DOMPurify from 'dompurify';
import Carousel from '@components/carousel';
import '@styles/sectionCarousel.scss';

const Section = (props) => {
    return (
        <section id={props.propsApp.id} className="section">
            <h2 className="section-title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.propsApp.sectionTitle)}}></h2>
            <Carousel propsSection={props.propsApp.items}/>
        </section>
    );
}

export default Section;