import React from 'react';
import "./Details.css";
import img1 from "../../Image/Rectangle 26.png";
import img2 from "../../Image/Rectangle 27.png";
import img3 from "../../Image/Rectangle 28.png";
import Cards from './Card';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '390px'
};

const center = {
    lat: 21.433920,
    lng: 91.987030
};

const Details = () => {


    const allInOne = [
        {
            image: img1,
            headres: "Light bright airy stylish apt & safe peaceful stay",
            bodys: "4 guests, 2 bedrooms, 2 beds 2 baths",
            facilities: "Wifi Air conditioning kitchen",
            other: "Cancellation fexibility available",
            stars: 4.9,
            price: 52
        },
        {
            image: img2,
            headres: "Apartment in lost panorama",
            bodys: "4 guests, 2 bedrooms, 2 beds 2 baths",
            facilities: "Wifi Air conditioning kitchen",
            other: "Cancellation fexibility available",
            stars: 4.8,
            price: 34
        }, {
            image: img3,
            headres: "AR Lounge & Pool (r&r + b&b)",
            bodys: "4 guests, 2 bedrooms, 2 beds 2 baths",
            facilities: "Wifi Air conditioning kitchen",
            other: "Cancellation fexibility available",
            stars: 4.9,
            price: 44
        },

    ]
    return (
        <div className="container back">
            <div className="row">
                <div className="col-lg-7">
                    <h4 className="mt-2 ml-2 text-dark">Stay in :</h4>
                    <div className="cards">
                        {
                            allInOne.map(res => <Cards detail={res} key={res.price}></Cards>)
                        }
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="map-gap">
                        <LoadScript
                            googleMapsApiKey="AIzaSyBCQuJXdAqK9cmrI8G8v0KIin3AEjIgu4E"
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}
                            >
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;