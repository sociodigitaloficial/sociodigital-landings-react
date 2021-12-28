import React from 'react';
import DOMPurify from 'dompurify';
import '@styles/callToAction.scss';

const CallToAction = (props) => {
    return (
        <div id={props.propsApp.id} className="callToAction-background">
            <div className="callToAction-overlay">
                <section className="callToAction-section">
                    <div className="callToAction-container">
                        <p className="callToAction-title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.propsApp.sectionTitle)}}></p>
                        <a href={props.propsApp.href}><button className="button callToAction-button">{props.propsApp.buttonText}</button></a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CallToAction;