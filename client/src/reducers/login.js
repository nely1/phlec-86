

const authReducer =  (state = {loginDetails: null}, action) => {
    if(action.type === 'LOGIN'){
            return { ...state, loginDetails: action.data, loading: false, errors: null };
    }

    else if (action.type === 'SIGNUP') {
      return { ...state, loginDetails: action.data, loading: false, errors: null }
    }
    
    return state;
}


export default authReducer;