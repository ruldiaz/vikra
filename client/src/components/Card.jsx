import React from 'react';


export default function Card({firstName, lastName, email, image}){
   
    return (
       
        <div>
            <h3>{firstName}</h3>
            <h5>{lastName}</h5>
            <img src={image} alt="not found" />
            <h5>{email}</h5>
        </div>
       
    );
}