import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions';
import Card from './Card';

export default function Home(){
    const dispatch = useDispatch();
    const allUsers = useSelector( state => state.users);

    useEffect(()=>{
        dispatch(getUsers());
    }, [dispatch])    

console.log(allUsers)

    return (
        <div>
            {allUsers?.map(e=> {
                console.log(e)
                return <Card key={e.id} id={e.id} firstName={e.firstName} lastName={e.lastName} email={e.email}  />
            })}
        </div>
    );

}