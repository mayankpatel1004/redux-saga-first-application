const reducer = (state = {}, action) => {
    //console.log("Reducer ===> initial state ===>",state,"====>",action);
    switch (action.type){
        case 'GET_NEWS':
            return {
                ...state,
                loading:true
            }
        case 'NEWS_RECEIVED':
            //console.log('Reducer Request =>',action.json);
            return {
                ...state,
                news: action.json,
                loading:false
            }    
        default:
        return state;
    }
}

export default reducer