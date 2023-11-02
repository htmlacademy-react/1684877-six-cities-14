import React from 'react'; 
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import Main from './screens/Main/Main';
import Layout from './Layout/Layout';
import Login from './screens/Login/Login';
import Favorites from './screens/Favorites/Favorites';
import OfferScreen from './screens/Offer/Offer';
import NotFound from './screens/NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { Offer } from './types/offer';

type PropsApp = {
    offers : Offer[],
}

function App(props:PropsApp){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Root} element={<Layout />}>
                    <Route index element={<Main offers={props.offers}/>} />
                    <Route path={AppRoute.Login} element={<Login />} />
                    <Route 
                        path={AppRoute.Favorites} 
                        element={
                            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                                <Favorites offers={props.offers} />
                            </PrivateRoute>
                        } 
                    />
                    <Route path={AppRoute.Offer} element={<OfferScreen />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;