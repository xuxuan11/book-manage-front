import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookManage from "../views/BookManage";
import AddBook from "../views/AddBook";
import BookUpdate from "../views/BookUpdate";
import Page_4 from "../views/Page_4";
import App from "../App";
import Index from "../views/Index";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BookManage ',
    component: Index,
    redirect:"/BookManage",
    children: [
      {
        path: "/BookManage",
        name: "QueryBooks",
        component: BookManage
      },
      {
        path: "/AddBook",
        name: "AddBooks",
        component: AddBook

      },

      {
        path: '/update',
        component: BookUpdate
      }
      ]
  },





]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
