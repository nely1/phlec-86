const albumReducer = (album = [], action) => {
    switch (action.type) {
        case "CREATE":
            return [...album, action.payload];
        case "FETCH_ALL":
            return action.payload;
        default:
            return album;
    }
};
export default albumReducer;
