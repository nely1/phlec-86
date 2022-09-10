export default (loginDetails = [], action) => {
    if(action.type === 'LOGIN'){
        return action.payload;
    }
    return loginDetails;
}