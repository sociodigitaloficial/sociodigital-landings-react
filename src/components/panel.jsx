import React from 'react';
import '@styles/panel.scss'

const Panel = () => {
    return (
        <div className="panel-container">
            <div className="panel-data">
                <p className="panel-data-question">Posibles resultados:</p>
                <p className="panel-data-response">40 a 45 contactos/ventas</p>
                <p className="panel-data-message">(Depende de cada nicho de mercado y del tipo de servicio o producto que ofreces)</p>
            </div>
            <div className="panel-data">
                <p className="panel-data-question">Valor de la inversión:</p>
                <p className="panel-data-response">$357.000</p>
                <p className="panel-data-message">(Valor mensual total, incluye inversión en anuncios, ganancia de la agencia e IVA)</p>
            </div>
            <div className="panel-data">
                <p className="panel-data-question">Duración de la campaña:</p>
                <p className="panel-data-response">30 días</p>
                <p className="panel-data-message">(En 7 días elaboramos tu campaña y luego comienzan los 30 días de publicidad)</p>
            </div>
        </div>
    );
}

export default Panel;