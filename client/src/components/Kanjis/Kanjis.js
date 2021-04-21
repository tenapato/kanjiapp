import Flippy, { FrontSide, BackSide } from 'react-flippy'
import React from 'react';
//import Card from './Kanji/Kanji'
import SideA from './Kanji/Front'
import SideB from './Kanji/Back'

const Cards = () => {
    return (
        <>
        
        
        <Flippy>
            <FrontSide style={{ backgroundColor: '#41669d',  width: '200px', height: '300px' , padding: '0 16px 8px 16px', borderRadius: '10px'}}>
                <SideA/>
            </FrontSide>
            <BackSide  style={{ backgroundColor: '#23BAC4',  width: '200px', height: '300px' , padding: '0 16px 8px 16px', borderRadius: '10px'}}>
                <SideB/>
            </BackSide>
        </Flippy>
        
        
        </>
    );


}

export default Cards;