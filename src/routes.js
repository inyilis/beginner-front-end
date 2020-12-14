import Vue from "vue"
import VueRoters from "vue-router"
import Home from "./views/home"
import Products from "./views/products"
import History from "./views/history"

Vue.use(VueRoters)

const mainRoters = new VueRoters({
    routes:
    [
        {
            path:"/",
            name:"home",
            component: Home
        },
        {
            path:"/products",
            name:"products",
            component: Products
        },
        {
            path:"/history",
            name:"history",
            component: History
        },
    ]
})

export default mainRoters