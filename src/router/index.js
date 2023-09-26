import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
// 1、引入组件
// import Home from "../views/Home.vue";
/**
 * 2、配置路由映射关系
 */
const routes = [
  {
    // 重定向
    path: "/",
    redirect: "Bgfile",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
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
  {
    path: "/Bgfile",
    name: "Bgfile",
    component: () => import("../views/Bgfile.vue"),
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
//前置守卫
router.beforeEach((to, from, next) => {
  // 在这里执行前置守卫逻辑
  // 可以根据需要调用 next() 继续路由导航，或者传递参数中断导航
  next();
});

export default router;
