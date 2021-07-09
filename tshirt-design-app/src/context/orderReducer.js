const addOrder = (order,state) =>
{
//For the updation of the state (Adding an order)
const newOrders = [...state.orders,order];
return {
    ...state,
    orders : newOrders
}
}


const reducer = (state,action) =>
{
    
    switch(action.type)
    {
        case 'ADD_ORDER':
            return addOrder(action.payload,state)
        default:
            return state
    }

}

export default reducer;