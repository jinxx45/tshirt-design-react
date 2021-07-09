import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function orders() {
    return (
        <div>
            Hi
            <li>
              <Link to="/">Go Back to HomePage</Link>
            </li>
        </div>
    )
}

export default orders
