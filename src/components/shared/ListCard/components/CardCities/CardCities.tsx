import React from 'react';
import { Link } from 'react-router-dom'; 

type PropsCardCities = {
    id: number,
    mark?: string,
    imgPath: string, 
    priceValue: number, 
    name: string,
    type: string,
    bookmark:boolean,
    rating: number,
}
function CardCities(props:PropsCardCities) {
    return (
        <article className="cities__card place-card">
            {
                props.mark ? 
                <div className="place-card__mark">
                    <span>{props.mark}</span>
                </div> : null
            }
            <div className="cities__image-wrapper place-card__image-wrapper">
                <Link to={'/offer/'+props.id}>
                    <img 
                        className="place-card__image" 
                        src={props.imgPath} 
                        width="260" 
                        height="200" 
                        alt="Place image"
                    />
                </Link>
            </div>
            <div className="place-card__info">
                <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{props.priceValue}</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className={"place-card__bookmark-button button "+(props.bookmark? 'place-card__bookmark-button--active' : '')} type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">{(props.bookmark ? 'In' : 'To')+' bookmarks'}</span>
                    </button>
                </div>
                <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                        <span style={{ width: props.rating+"%" }}></span>
                        <span className="visually-hidden">Rating</span>
                    </div>
                </div>
                <h2 className="place-card__name">
                    <Link to={'/offer/'+props.id}>{props.name}</Link>
                </h2>
                <p className="place-card__type">{props.type}</p>
            </div>
        </article>
    )
}

export default CardCities;