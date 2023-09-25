<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="relative h-screen">
    <img
      src="./assets/home.png"
      alt="全覆盖图片"
      class="absolute h-full w-full object-cover"
      v-show="IsImages"
    />
    <img
      src="./assets/home2.png"
      alt="全覆盖图片"
      class="absolute h-full w-full object-cover"
      v-show="!IsImages"
    />

    <!-- 遮罩层 -->
    <div class="absolute"></div>
    <!-- 三栏布局 -->
    <div class="flex h-full text-green-700">
      <!-- 左栏 -->
      <div class="z-40 flex-1" @click="change"></div>

      <!-- 中栏 -->
      <div class="flex-2 w-[480px]"></div>

      <!-- 右栏 -->
      <div class="z-40 flex-1" @click="change"></div>
    </div>
  </div>

  <!-- <HelloWorld msg="Vite + Vue" /> -->

  <!-- <RouterView /> -->
  <!-- <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink> |
  <RouterLink to="/side">Side</RouterLink>|
  <RouterLink to="/user/111">User</RouterLink>| -->
</template>
<script>
export default {
  data() {
    return {
      IsImages: true,
    };
  },
  methods: {
    change() {
      console.log("change");
      this.IsImages = !this.IsImages;
      // this.$router.push({ path: "/about" });
      //改变当前图片images2的地址
    },
  },
};
</script>
<style scoped></style>
