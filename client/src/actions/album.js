import * as api from "../api";

export const postAlbum = (album) => async (dispatch) => {
    try {
        const { data } = await api.createAlbum(album);
        dispatch({ type: "CREATE", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getAlbums = (userInfo) => async (dispatch) => {
    try {
        const { data } = await api.getAlbums(userInfo.result._id);
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getAlbumOne = (albumId) => async (dispatch) => {
    try {
        const { data } = await api.getAlbumOne(albumId);
        dispatch({ type: "FETCH_ONE", payload: data });
    } catch (error) {
        console.log(error);
    }
};
