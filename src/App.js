import React, { memo, Suspense } from 'react';
import { Provider } from "react-redux";

import { renderRoutes } from "react-router-config";
import routes from '@/router';
import store from "./store";

import RZAppfooter from "@/components/app-footer";
import RZAppheader from "@/components/app-header";
import { HashRouter } from "react-router-dom";
import PlayerBar from "@/pages/player/app-player-bar";

const App = memo(() => {
    return (
        <Provider store = {store}>
        <HashRouter>
        <RZAppheader />
        <Suspense fallback = {<div>page loading</div>}>
            {renderRoutes(routes)}
        </Suspense>
        <RZAppfooter />
        <PlayerBar/>
        </HashRouter>
        </Provider>
    );
});

export default App;