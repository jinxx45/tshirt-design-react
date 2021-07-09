import React from "react";
import { useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Orders from '../pages/orders'

import OrdersContext from '../context/orderContext'
import OrderReducer from '../context/orderReducer'

export default function App() {

  const   initialState = {
    orders:[{
      orders:[{
        id : '20',
        test : "Hello World"
      }]
    }]
  }

  const [state,dispatch] = useReducer(OrderReducer,initialState)

  const addOrder = order =>{
    dispatch({
      type : "ADD_ORDER",
      payload : {
        id : "New",
        test : "Newwww"
      }
    })
  }



  return (

    
    
    <OrdersContext.Provider
      value = {{
        orders: state.orders}}
    >
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
              {JSON.stringify(state)}
              <button onClick={addOrder}> Add Order</button>
            </li>
          
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
        
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </OrdersContext.Provider>
    
  );
}

function Home() {
  return <h2>Home</h2>;
 
}



function Users() {
  return <h2>Users</h2>;
}