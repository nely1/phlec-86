import * as api from "../api";

export const postAlbum = (album) => async (dispatch) => {
    try {
        const { data } = await api.createAlbum(album);
        dispatch({ type: "CREATE", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getAlbums = () => async (dispatch) => {
    try {
        const { data } = await api.getAlbums();
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error);
    }
};
