<template>
  <img src="./../assets/home2.png" alt="" class="images2" @click="change" />
</template>
<script>
export default {
  methods: {
    change() {
      this.$router.push({ path: "/" });
      //改变当前图片images2的地址
    },
  },
};
</script>
<style>
/* //改变图片地址 */
.images2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
