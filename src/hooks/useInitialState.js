import { useEffect, useState } from 'react';

const initialState = {
    mobile: isMobile()
}

function isMobile() {
    if(window.innerWidth < 700){
        return true;
    } else {
        return false;
    }
}

const useInitialState = () => {

    const [state, setState] = useState(initialState)

    useEffect(()=>{
        window.addEventListener('resize', handleWidth)

        return () => {
            window.removeEventListener("resize", handleWidth)
        }
    })

    const handleWidth = () => {
        if(state.mobile != isMobile()){
            state.mobile = !state.mobile
            setState({
                ... state,
                mobile: state.mobile
            })
        }
    }

    return state
}

export default useInitialState;