<template>
  <div class="relative">
    <img src="./../assets/home.png" alt="" class="images2" @click="change" />

    <div class="images2 absolute z-10 flex h-screen w-screen">
      <div class="z-10 flex-1 bg-white">222</div>
      <div class="bg-white">222</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    change() {
      this.$router.push({ path: "/about" });
      //改变当前图片images2的地址
    },
  },
};
</script>
<style>
/* 设置图片全屏 */

.images2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  src: url("./../assets/home.png");
}
</style>
