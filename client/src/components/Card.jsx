import React from 'react';


export default function Card({firstName, lastName, email}){
   
    return (
       
        <div>
            <h3>{firstName}</h3>
            
            <h5>{lastName}</h5>
            <h5>{email}</h5>
        </div>
       
    );
}