import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Button';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'; 


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

const UpdatePlace = () => {
    const placeId = useParams().place.Id;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    if(!identifiedPlace) {
        return(
            <h2>Could not find place...</h2>
        )
    }

    return (
        <form>
            <Input 
              id="title" 
              element="input" 
              type="text"
              label="Title"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid title."
              onInput={() => {}}
              value={identifiedPlace.title}
              valid={true}
            /> 
            <Input 
              id="description" 
              element="textarea" 
              label="Description"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid description (min. 5 characters)."
              onInput={() => {}}
              value={identifiedPlace.description}
              valid={true}
            /> 
            <Button type="submit" disabled={true}>UPDATE PLACE</Button>
        </form>
    )
};

export default UpdatePlace;