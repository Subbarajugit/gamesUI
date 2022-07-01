/* eslint-disable prettier/prettier */
import { tokenAuthApiInstance } from '../utils/axios';
import { GET_LIST_GAMES_URL } from './constant';

export const getGamesList = async () => {
    const response = await tokenAuthApiInstance
        .authAxios()
        .get(GET_LIST_GAMES_URL);
    return response.data
};
