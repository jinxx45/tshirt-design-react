import {createContext} from 'react'

const orders = createContext({
    order : [{id:'2'}],
    addOrders:order=>{},
}) 

export default orders;