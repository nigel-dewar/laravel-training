import VueRouter from "vue-router";
import Bookables from './bookables/Bookables';
import BookablesListItem from './bookables/BookablesListItem';


const routes = [
    {
        path: '/',
        component: Bookables,
        name: 'home'
    },
    // {
    //     path: '/second',
    //     component: Example2,
    //     name: 'second'
    // }
];

const router = new VueRouter({
    routes: routes,
    // mode: 'history'
});

export default router;