import React, { useEffect, useState } from 'react';
import { fetchPlants } from '../api';

const PlantList = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetchPlants().then(setPlants);
    }, []);

    return (
        <div>
            <h2>Your Plants</h2>
            <ul>
                {plants.map((plant) => (
                    <li key={plant.id}>{plant.name} - Health: {plant.health}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlantList;
