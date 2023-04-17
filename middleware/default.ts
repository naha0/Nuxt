export default defineNuxtRouteMiddleware((to, from) => {
  //   只对一个页面起作用
  if (from.name === "detail") {
    console.log("Hello JSPang.com");
  }else{
    console.log("Hello JSPang.com");
  }
});
