<template>
  <RouterLink to="/home">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink> |
  <RouterLink to="/side">Side</RouterLink>|
  <RouterLink to="/user/111">User</RouterLink>|
  <RouterLink to="/bgfile">Bgfile</RouterLink>|
  <RouterView />
</template>
<script>
export default {
  data() {
    return {
      IsImages: true,
    };
  },
  methods: {},
};
</script>
<style scoped></style>
