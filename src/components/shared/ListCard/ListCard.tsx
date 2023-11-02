import React from 'react';
import { Offer } from '../../types/offer';
import CardCities from './components/CardCities/CardCities';
import CardFavorites from './components/CardFavorites/CardFavorites';

type PropsListCard = {
    offers: Offer[], 
    cardType: 'favorites' | 'cities'
}
function ListCard(props:PropsListCard) {
    const [activeCard, setActiveCard] = React.useState(0)
    
    return (
        <>
            { 
                props.offers.map((el:Offer)=>
                    props.cardType === 'cities' ?
                        <CardCities {...el} /> : 
                    props.cardType === 'favorites' ?
                        <CardFavorites {...el} /> : 
                    null
            )} 
        </>
    )
}

export default ListCard;