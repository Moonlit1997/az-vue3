<template>
  <div class="relative h-screen">
    <img
      src="./../assets/home.png"
      alt="全覆盖图片"
      class="absolute h-full w-full object-cover"
      v-show="IsImages"
    />
    <img
      src="./../assets/home2.png"
      alt="全覆盖图片"
      class="absolute h-full w-full object-cover"
      v-show="!IsImages"
    />

    <!-- 遮罩层 -->
    <div class="absolute inset-0 opacity-50"></div>

    <!-- 三栏布局 -->
    <div class="z-10 flex h-full">
      <!-- 左栏 -->
      <div class="b flex-1" @click="change">左栏内容</div>

      <!-- 中栏 -->
      <div class="flex-2 w-[480px]">中栏内容</div>

      <!-- 右栏 -->
      <div class="flex-1" @click="change">右栏内容</div>
    </div>
  </div>
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
<style>
/* 设置图片全屏 */

.images2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background-image: url("./../assets/home.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
