const albumReducer = (album = [], action) => {
  switch (action.type) {
    case "DELETE_ONE":
      return album.filter((album) => album._id !== action.payload);
    case "CREATE":
      return [...album, action.payload];
    case "FETCH_ALL":
      return action.payload;
    case "FETCH_ONE":
      return action.payload;
    case "UPDATE_ONE":
      return album.map((singleAlbum) =>
        singleAlbum._id === action.payload._id ? action.payload : singleAlbum
      );
    default:
      return album;
  }
};
export default albumReducer;
