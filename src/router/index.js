import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
// 1、引入组件
import Home from "../views/Home.vue";
/**
 * 2、配置路由映射关系
 */
const routes = [
  {
    // 重定向
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // 懒加载
    component: () => import("../views/About.vue"),
  },
  {
    path: "/side",
    name: "Side",
    component: () => import("../views/Side/index.vue"),
  },
  {
    //带参数的路由
    path: "/user/:id",
    name: "User",
    component: () => import("../views/User.vue"),
  },
  {
    //404网页
    //获取url中任意匹配的内容  最后一个*代表返回数组 不加代表返回字符串
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];
// 3、创建一个路由的对象
const router = createRouter({
  // 指定模式
  /**
   * createWebHashHistory 带 # 号
   * createWebHistory 不带 # 号
   */
  history: createWebHashHistory(),
  // 下面这个 可以写成ES6的简写 routers
  routes: routes,
});

export default router;
