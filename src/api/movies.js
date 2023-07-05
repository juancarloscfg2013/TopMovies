import api from "./api";

export const getPopular = async () => {
    try {
        const res = await api.get('/popular');
        return res.data.results;
    } catch (error) {
        console.log(error);
    }
}

export const getDetail = async (id) => {
    try {
        const res = await api.get(`/${id}`);
        return res.data.results;;
    } catch (error) {
        console.log(error);
    }
}