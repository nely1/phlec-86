const albumReducer = (album = [], action) => {
    switch (action.type) {
        case "CREATE":
            return [...album, action.payload];
        case "FETCH":
            return album;
        default:
            return album;
    }
};
export default albumReducer;
