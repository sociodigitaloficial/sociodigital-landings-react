import React from 'react';
import DOMPurify from 'dompurify'
import '@styles/callToActionEnd.scss'

const CallToAction = (props) => {
    return (
        <div id={props.propsApp.id} className="callToActionEnd-background">
            <div className="callToActionEnd-overlay">
                <section className="callToActionEnd-section">
                    <div className="callToActionEnd-container">
                        <p className="callToActionEnd-title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.propsApp.sectionTitle)}}></p>
                        <p className="callToActionEnd-paragraph">{props.propsApp.sectionParagraph}</p>
                        <a href={props.propsApp.href}><button className="button callToActionEnd-button">{props.propsApp.buttonText}</button></a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CallToAction;