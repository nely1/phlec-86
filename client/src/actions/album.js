/* The following are the API for the album page, contains action calls for fetching, updating and deleting albums */
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

export const updateAlbum = (albumId, album) => async (dispatch) => {
  try {
    const { data } = await api.updateAlbumOne(albumId, album);
    dispatch({ type: "UPDATE_ONE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAlbum = (albumId) => async (dispatch) => {
  try {
    await api.deleteAlbum(albumId);
    dispatch({ type: "DELETE_ONE", payload: albumId });
  } catch (error) {
    console.log(error);
  }
};
