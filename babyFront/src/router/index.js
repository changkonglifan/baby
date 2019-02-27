//路由
import React from 'react';
import { Switch, BrowserRouter, Route, Router, Redirect } from 'react-router-dom'
import { browserHistory } from 'react-router'
import App from '../views/App'
import Home from '../views/Home'
/**
 * 主路由
 */
export const RouterConfig = () =>{
    return(
        <main>
            <BrowserRouter>
                <Switch>
                    <Route path='/app' component={App} />
                    <Route path='/home' component={Home} />
                </Switch>
            </BrowserRouter>
        </main>
    )
}
