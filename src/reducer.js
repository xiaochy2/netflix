const initialState = {mylist:[],recommendations:[]};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET': 
                return {...action.data};
        case 'ADD':
                return {
                    recommendations: state.recommendations.filter((item)=>item.id!==action.id),
                    mylist: [state.recommendations.filter((item) => item.id === action.id)[0],...state.mylist],
                }
        case 'REMOVE':
            return{
                recommendations: [...state.recommendations,state.mylist.filter((item) => item.id === action.id)[0]],
                mylist: state.mylist.filter((item) => item.id !== action.id)
            }
        default:
            return state;
    }
}

export default reducer;
