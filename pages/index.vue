<template>
  <div>
    <NuxtLayout>
      <div>
        这是第一个插槽
        <h1>index page</h1>
        <div>
          <NuxtLink to="/detail">detail-1 link 路由跳转使用</NuxtLink>
          <hr />
          <NuxtLink to="/100">动态id 单参数 路由跳转使用</NuxtLink>
          <hr />
          <NuxtLink to="/goods-zhangsan/child-100"
            >动态id 多参数 路由跳转使用</NuxtLink
          >
          <hr />
          <lazyText v-if="show"></lazyText>
          <el-button @click="showClick">显示/隐藏</el-button>
          <hr />
          <NuxtLink to="/data/getData">网络请求</NuxtLink>
          <hr />
        </div>
        <NuxtLink to="/parent/child">Parent</NuxtLink>
        <hr />
        <BaseFooButton></BaseFooButton>
        <hr />
        <el-button
          @click="
            counter--;
            counterRef--;
          "
          >-</el-button
        >
        Counter: {{ counter }} CounterRef: {{ counterRef }}
        <el-button
          @click="
            counter++;
            counterRef++;
          "
          >+</el-button
        >
        <hr />
      </div>
      <div>
        这是第二个插槽
        <NuxtLink to="/hello">Hello</NuxtLink>
        <h1>用户信息：{{ isLogin }}</h1>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const show = ref(false);
const showClick = () => {
  show.value = show.value ? false : true;
};
const counterRef = ref(Math.round(Math.random() * 1000));
const counter = useState("counter", () => Math.round(Math.random() * 1000));
const isLogin = useLogin();
</script>
