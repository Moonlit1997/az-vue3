<template>{{ route.params.id }}</template>
<script setup>
//获取动态路由的参数
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params.id);
</script>
