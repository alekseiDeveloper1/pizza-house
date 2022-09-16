import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import AddCard from "../../pages/AddCard";
import ProductPage from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/add'} element={<AddCard/>}/>
            <Route path={'/cart'} element={<CartPage/>}/>
            <Route path={'/:id'} element={<ProductPage/>}/>
        </Routes>
    );
};

export default AppRouter;