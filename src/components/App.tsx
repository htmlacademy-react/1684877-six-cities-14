import React from 'react'; 
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import Main from './screens/Main/Main';
import Layout from './Layout/Layout';
import Login from './screens/Login/Login';
import Favorites from './screens/Favorites/Favorites';
import Offer from './screens/Offer/Offer';
import NotFound from './screens/NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Root} element={<Layout />}>
                    <Route index element={<Main/>} />
                    <Route path={AppRoute.Login} element={<Login />} />
                    <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><Favorites /></PrivateRoute>} />
                    <Route path={AppRoute.Offer} element={<Offer />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;