import React from 'react';
import DOMPurify from 'dompurify';
import Panel from '@components/panel'
import Form from '@components/form'
import '@styles/presentation.scss'

const Presentation = (props) => {
    return (
        <div id ={props.propsApp.id} className="presentation-background">
            <div className="presentation-overlay">
                <section className="presentation-section">
                    <h1 className="presentation-title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.propsApp.sectionTitle)}}></h1>
                    <div className="presentation-container">
                        <Panel />
                        <Form propsSection={props.propsApp} />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Presentation;