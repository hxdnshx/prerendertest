//index.js
import Vue from 'vue';
import Router from 'vue-router';
import RouteInfoTest from "../RouteInfoTest";

Vue.use(Router);

export default new Router({
    mode:'history',  //使用history防止url中出现#
    routes: [
        {
            path: '/:id',
            name: 'TestRoute',
            component:RouteInfoTest
        }
    ]
})