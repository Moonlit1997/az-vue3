<template>
  <div>
    <div class="flex h-screen flex-col">
      <!-- 顶部 -->
      <div class="flex h-1/4 flex-col">顶部</div>
      <!-- 主体 -->
      <div class="flex h-4/6 flex-row">
        <!-- 左侧 -->
        <div class="flex w-1/4 flex-row">左侧</div>
        <!-- 中间 -->
        <div class="flex flex-auto items-center justify-center">中间</div>
        <!-- 右侧 -->
        <div class="flex w-1/4 flex-row">右侧</div>
      </div>
      <!-- 底部 -->
      <div class="flex h-1/6 flex-row">底部</div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import "../assets/styles/main.scss";
import * as uefunc from "../../public/js/uefunc.js";
import { PublicStore } from "@/assets/js/store";
export default {
  data() {
    return {
      public_store: null,
    };
  },
  created() {
    console.log("created");
  },
  methods: {
    init() {
      console.log("init");
    },
    change() {
      console.log("change");
      // this.IsImages = !this.IsImages;
      this.$router.push({ path: "/Side" });
      //改变当前图片images2的地址
    },
  },
  mounted() {
    console.log("mounted");
    this.public_store = PublicStore;
    this.init();
  },
};
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
.my-text {
  text-align: center;
  text-shadow: 0px 4px 10px 0px #002d45;
  font-family: "Alimama ShuHeiTi";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 12px;
  background: linear-gradient(180deg, #fff 50%, rgba(103, 164, 255, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
