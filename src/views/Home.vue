<template>
  <div class="relative h-screen"></div>
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
