import React from 'react';
import '@styles/form.scss'

const Form = (props) => {
    return (
        <div className="form-container">
            <div id="form-anchor" className="form-background">
                <p className="form-title"><b>¿Te interesa?</b></p>
                <p className="form-message">Deja tus datos y analiza junto a un experto una eventual campaña para tu PYME, la <b>asesoría es sin costo</b> y por Whatsapp.</p>
                <form id="form" className="form" method="POST">
                    <input type="text" name="form-service" defaultValue={props.propsSection.landing} hidden required/>
                    <input type="text" name="form-name" className="form-field" placeholder="Indícanos tu nombre" required/>
                    <input type="text" name="form-whatsapp" className="form-field" placeholder="Indícanos tu Whatsapp" required/>
                    <input type="email" name="form-email" className="form-field" placeholder="Indícanos tu correo" required/>
                    <textarea name="form-message" className="form-field form-field-textarea" placeholder="¿A qué se dedica tu PYME?" autoexpand="true" required></textarea>
                    <input type="submit" className="button form-button" defaultValue="ME INTERESA"/>
                </form>
            </div>
        </div>
    );
}

export default Form;