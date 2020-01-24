import React from 'react'
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the tallest buildings in the world',
        imageUrl: 'https://via.placeholder.com/500',
        address: '20 W 34th St, New York, NY 1001',
        location: {
            lat: 40.7484405,
            lng: -73.98785884,
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building Clone',
        description: 'One of the tallest buildings in the world',
        imageUrl: 'https://via.placeholder.com/500',
        address: '20 W 34th St, New York, NY 1001',
        location: {
            lat: 40.7484405,
            lng: -73.98785884,
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    console.log(userId)
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces;



