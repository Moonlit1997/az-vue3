//Public.js
import { defineStore } from "pinia";
export const PublicStore = defineStore("Public", {
  // Public项目唯一id
  state: () => {
    return {
        // ReturnCameraState监测返回的相机状态
        CameraState:{},
        // ClickPoint返回的俩个参数，一个为点位置，一个为相机状态
        ClickPointval1:{},
        ClickPointval2:{}
    };
  },
  getters: {
    //方法一，接收一个可选参数sttate
    getUserMsg: (state) => {
      //页面中调用了三次，但这里只会执行一次，然后缓存起来了
      return state.CameraState;
    },
    //方法二，不传参数，使用this，但是必须指定函数返回值的类型，否则类型推导不出来
    getUserMsg2(): number {
      return this.CameraState;
    },
  },
  // other options...
  actions: {
    changeCameraState(num: number) {
      // 不能用箭头函数
      this.CameraState=num;
    },
    changeClickPointval1(num: number) {
      // 不能用箭头函数
      this.ClickPointval1 = num;
    },
    changeClickPointval2(num: number) {
        // 不能用箭头函数
        this.ClickPointval2 = num;
      }
  },
});
