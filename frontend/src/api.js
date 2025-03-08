import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchPlants = async () => {
    const response = await axios.get(`${API_URL}/plants`);
    return response.data;
};

export const addPlant = async (plant) => {
    const response = await axios.post(`${API_URL}/plants`, plant);
    return response.data;
};
