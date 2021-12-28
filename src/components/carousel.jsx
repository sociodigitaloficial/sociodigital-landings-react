import React, {useState, useContext} from 'react';
import Item from '@components/item';
import '@styles/carousel.scss'
import AppContext from '@context/AppContext';

const Carousel = (props) => {

    const state = useContext(AppContext)
    const mobile = state.mobile
    
    const [itemMobile, setItemMobile] = useState(0)
    const dataCarousel = props.propsSection;

    const Controls = () => {
        const previus = "<";
        const next = ">";
        return (
            <div className="carousel-controls">
                <p className="control-arrow" onClick={handlePreviusItem}>{previus}</p>
                <p className="control-arrow" onClick={handleNextItem}>{next}</p>
            </div>
        );
    }

    const handlePreviusItem = () => {
        const length = dataCarousel.length;
        if(itemMobile>0) {
            setItemMobile(itemMobile-1)
        } else {
            setItemMobile(length-1)
        }
    }

    const handleNextItem = () => {
        const length = dataCarousel.length;
        if(itemMobile<length-1) {
            setItemMobile(itemMobile+1)
        } else {
            setItemMobile(0)
        }
    }

    return (
        <div className="carousel-container">
            <div className="carousel-items">
                {mobile ? 
                <Item info={dataCarousel[itemMobile]} /> :
                dataCarousel.map(object => (
					<Item info={object} key={object.id} />
				))}
            </div>
                {mobile && Controls()}
        </div>
    );
}

export default Carousel;