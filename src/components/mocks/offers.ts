import { Offer } from "../types/offer";


export const offers: Offer[] = [
    {
        id: 1,
        mark: "Premium",
        imgPath: "img/apartment-01.jpg",
        priceValue: 120,
        name: "Beautiful &amp; luxurious apartment at great location",
        type: "Apartment",
        bookmark: false,
        rating: 80,
    },{
        id: 2,
        imgPath: "img/room.jpg",
        priceValue: 80 ,
        name:  "Wood and stone place",
        type: "Room",
        bookmark: true,
        rating: 80,
    },{
        id: 3, 
        imgPath:"img/apartment-02.jpg",
        priceValue: 132,
        name: "Canal View Prinsengracht",
        type:"Apartment",
        bookmark: false,
        rating: 80,
    },{
        id: 4,
        mark:'Premium',
        imgPath:"img/apartment-03.jpg",
        priceValue: 180 ,
        name:"Nice, cozy, warm big bed apartment",
        type:"Apartment",
        bookmark: false,
        rating: 100,
    },{
        id: 5, 
        imgPath:"img/room.jpg",
        priceValue: 80 ,
        name: "Wood and stone place",
        type:"Room",
        bookmark: true ,
        rating: 80 ,
    },
]