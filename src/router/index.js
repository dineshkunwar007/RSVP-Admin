import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddCategory from "../views/AddCategory.vue";
import AddEvent from "../views/AddEvent.vue";
//import SignIn from "../views/SignIn.vue";
//import ProductList from "../views/ProductList.vue";
import OrderList from "../views/OrderList.vue";
import AdminLayout from "../layouts/adminLayout.vue";
import { getAuth } from "../data/firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: AdminLayout,
    //meta: { requiresAuth: true },
    children: [
      // Components
      {
        name: "home",
        path: "",
        component: HomeView,
      },
      {
        name: "addCategoery",
        path: "/addCategoery",
        component: AddCategory,
      },
      {
        name: "addProduct",
        path: "/addProduct",
        component: AddEvent,
      },

      {
        name: "orders",
        path: "/orders",
        component: OrderList,
      },
    ],
  },

  {
    path: "/",
    name: "",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignIn.vue"),
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  debugger;
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const currentUser = getAuth().currentUser;

  if (requiresAuth && !currentUser) {
    next("/");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
