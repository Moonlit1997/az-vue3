<script setup>
import { ref } from "vue";
import "../assets/styles/main.scss";

defineProps({
  msg: String,
});
</script>

<template>

<div class="main-div">
  Your text here<p class="main-div__inner"></p>
</div>
<div class="w-32 h-32 bg-blue-500">
  </div>
</template>

<style scoped>

.read-the-docs {
  color: #888;
}
.my-text {
    text-align: center;
    text-shadow: 0px 4px 10px 0px #002D45;
    font-family: "Alimama ShuHeiTi";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 12px;
    background: linear-gradient(180deg, #FFF 50%, rgba(103, 164, 255, 0.00) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }


</style>
