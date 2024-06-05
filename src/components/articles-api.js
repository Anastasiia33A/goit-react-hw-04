import axios from "axios";

const baseURL = "https://api.unsplash.com/";
const API_KEY = "-gPI3m7BWhi2fMhjzMr6Z8T-ub_4aW0Pzeh6Imo_FLU";

export const getArticles = async (topic, currentPage) => {
    try {
        const response = await axios.get(`${baseURL}/search/photos`, {
            params: {
                query: topic,
                page: currentPage,
                client_id: API_KEY
            },
        });
        
        return response.data.results;
    } catch (error) {
        console.error("Error fetching artic", error);
        throw error;
    }
};
