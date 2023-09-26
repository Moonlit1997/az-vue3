<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <RouterView />
  <!-- <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink> |
  <RouterLink to="/side">Side</RouterLink>|
  <RouterLink to="/user/111">User</RouterLink>|
  <RouterLink to="/bgfile">Bgfile</RouterLink>| -->
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
