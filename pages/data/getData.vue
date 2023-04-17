<script setup lang="ts">
// const { data, pending, error } = await useAsyncData("getList", () =>
//   $fetch("http://121.36.81.61:8000/getTenArticleList")
// );
const { data, pending, error } = await useFetch("http://121.36.81.61:8000/getTenArticleList");
// console.log(res);
</script>

<template>
  <!-- 处理请求错误 -->
  <div v-if="error" class="text-red-300">{{ error.message }}</div>
  <!-- 处理加载状态 -->
  <div v-if="pending">加载中...</div>
  <div v-else>{{ error }}-{{ pending }}-{{ data }}</div>
</template>
