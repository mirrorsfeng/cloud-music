import React from 'react';
import { Redirect } from "react-router-dom";

const RZalbum = React.lazy(() => import("@/pages/discover/c-pages/album"));
const RZartist = React.lazy(() => import("@/pages/discover/c-pages/artist"));
const RZdjradio = React.lazy(() => import("@/pages/discover/c-pages/djradio"));
const RZranking = React.lazy(() => import("@/pages/discover/c-pages/ranking"));
const RZrecommend = React.lazy(() => import("@/pages/discover/c-pages/recommend"));
const RZsongs = React.lazy(() => import("@/pages/discover/c-pages/songs"));
const RZDiscover = React.lazy(() => import("@/pages/discover"));
const RZFriends = React.lazy(() => import("@/pages/friends"));
const RZMine = React.lazy(() => import("@/pages/mine"));
const Player = React.lazy(() => import('../pages/player'));



const routes = [
    {
        path: "/", 
        exact: true,
       render: () => {
          return (<Redirect to="/discover" />)
       }
    
    },

     {
         path: "/discover", 
         component: RZDiscover,
         routes:[
            {
                path: "/discover",
                exact: true,
                render: () => (
                  <Redirect to="/discover/recommend"/>
                )
              },
              {
                path: "/discover/recommend",
                component: RZrecommend
              },
              {
                path: "/discover/ranking",
                component: RZranking
              },
              {
                path: "/discover/songs",
                component: RZsongs
              },
              {
                path: "/discover/djradio",
                exact: true,
                component: RZdjradio
              },
              {
                path: "/discover/artist",
                component: RZartist
              },
              {
                path: "/discover/album",
                component: RZalbum
              },
              {
                path: "/discover/player",
                component: Player
              }
             

         ]
     },
     {
         path: "/mine",
         component: RZMine
     },
     {
         path: "/friends",
         component: RZFriends
     }
];



export default routes;