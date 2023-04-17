<script setup lang="ts">
import { ref } from "vue";
// import { getTime } from "~~/composable/time";
// const time = ref(getTime());
const foo = useFoo();
</script>

<template>
  <span>{{ $route.params.name }} - {{ $route.params.id }}</span>
  <div>{{ foo }}</div>
</template>
