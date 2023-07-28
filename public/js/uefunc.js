//通过pinia传值,监听的时候貌似pinia时候还没有初始化，所以监听不到，只能通过这种方式传值
import { PublicStore } from "@/assets/js/store";

ue.interface.ReturnCameraState = function (val) {
  // 将当前相机的状态传入pinia
  const public_store = PublicStore();
  public_store.changeCameraState(val);
  
  var status = document.getElementById("status");
  status.value += JSON.stringify(val) + "\n";
  status.scrollTop = status.scrollHeight;
};
//UE传回点击Point的信息，传回传入json
/* 示例-----   
      {"Group":"Line","LineID":"3","Width":"3","Brightness":"1","Tilling":"900","Speed":"0.5","LineType":"2","SplineType":"0","LineColor":"1,0,0,1","bOpenStroke":true,"StrokeWidth":0.1,"ShowLine":true,"bLoop":false,"LineCoords":["X=119.73106,Y=30.27731,Z=6500","X=119.73106,Y=30.27831,Z=6500","X=119.73106,Y=30.27931,Z=6500","X=119.73106,Y=30.28131,Z=6500"]}
      */
// 监测跳转
ue.interface.ClickPoint = function (val1, val2) {
  // 将点击的要素的信息传入pinia
  const public_store = PublicStore();
  public_store.changeClickPointval1(val1);
  public_store.changeClickPointval2(val2);
  // console.log(public_store.ClickPoint);

  //点击要素进行跳转到眼前
  let grouptest = val1.Group + "_" + val1.PointID;
  // console.log(grouptest);
  let def = { ItemTag: grouptest, Yaw: -43, Pitch: -33, ArmLength: 100000 };
  focusItemTag(def);
  // console.log(val1); //点位置
  // console.log(val2); //相机位置
};
//点击事件返回大型设备id
ue.interface.ReturnLargetEquitmentID = function (val) {
  console.log(val);
};
//点击事件返回流机设备id
ue.interface.ReturnFlowMachinetEquitmentID = function (val) {
  console.log(val);
};

function focusHS() {
  ue4("Focus", {
    Longitude: 121.52994073836174,
    Latitude: 29.870626730799682,
    Height: 3132.547404135694,
    Yaw: -44,
    Pitch: -33,
    ArmLength: 505111.8937743646,
  });
}
function focusWN() {
  ue4("Focus", {
    Longitude: 121.5355225065039,
    Latitude: 29.887362613558775,
    Height: 3621.7856980375946,
    Yaw: -44,
    Pitch: -33,
    ArmLength: 415165.15625,
  });
}
function getStatus(el) {
  // console.log(el);
  ue.interface.ReturnCameraState = function (val) {
    var status = document.getElementById("status");
    status.value += "ReturnCameraState:" + JSON.stringify(val) + "\n";
    status.scrollTop = status.scrollHeight;
  };
}
/**
 * 刷新页面h5
 */
function refresh() {
  ue4("refresh");
}
/**
 * 关闭系统exe
 */
function quit() {
  ue4("Quit");
}
/**
 * 清除动态生成的对象
 */
function init() {
  ue4("Init");
}
/**
 * 设置窗口大小
 */
function setWindow(size) {
  ue4(
    "ProjectSetting",
    {
      Command: `r.SetRes ${size}`,
    }
    // function (a) {
    //     console.log(val);
    // },
  );
}
/**
 * 当前重置当前相机到初始状态
 */
function resetCamera() {
  ue4("ResetCamera", { bStart: true });
}
/**
 * 聚焦通过经纬度定位
 *  var option = { Longitude: 121.738601, Latitude: 29.9777321, Height: 0 };
 */
function setCamera(option) {
  ue4(
    "Focus",
    option
    // function (a) {
    //     console.log(val);
    // }
  );
}
/**
 * 聚焦通过Type+Id定位
 * { ItemTag: '0_123', Yaw: 0, Pitch: -15, ArmLength: 500 }
 */
function focusItemTag(option) {
  ue4("FocusByItemTag", option);
  // function (a) {
  //     console.log(val);
  // }
}
/**
 * 河流效果
 * @param {boolean} stop
 * 是否停止水流
 */
function controlWater(stop) {
  ue4(
    "WaterControl",
    {
      bStop: stop,
    }
    // function (a) {
    //     console.log(val);
    // },
  );
}

/**
 * 天气模拟
 * @param {Number} type
 * 天气类型  0-12 10为下雪 11为雨天
 */
function changeWeather(type) {
  ue4(
    "ChangeWeather",
    {
      WeatherType: type,
      TransTime: 2,
    },
    function (a) {
      //
    }
  );
}

/**
 * 设置时间
 * 0-2400
 */
function setTime(Time) {
  ue4(
    "SetTime",
    {
      Time,
    },
    function (a) {
      // console.log(a);
    }
  );
}

/**
   * 添加
   *        ---------------------------------------------------生成点--------------------------------------------
          SpcaceType:WorldSpace/ScreenSpace俩种类型0是world,1是Screen，6.9有改动修复相关bug
          /*      bBackgroundImage:无背景框/带背景框  bool
        PointID:唯一ID,
        Longitude：经度，Latitude:纬度，Height：高度,
        StyleIndex:文字和图片排列方式0-4 4为图片带背景
        bTextHide:是否显示字体,
        Text:文字内容，
        Color:RGBA 0-1,
        FontSize:字体大小，
        bTextureHide：是否显示图片,w
        imageSize:自定义图片大小，matchsize为false的情况使用
        bMatchSize：是否适配原图片大小
        ImageUrl:图标地址，
        Min：最小显示距离，Max:最大显示距离，Min和Max值相等无视显示距离；
        bShowAfterRun是否一开始显示
        FontIndex：0-7，字体种类
        旁门、SourceHanSansSC-Bold，SourceHanSansSC-ExtraLight、SourceHanSansSC-Light、SourceHanSansSC-Medium、SourceHanSansSC-Regular、DroidSansMono、Roboto
        ImageTranslation:"0,0",TextTranslation:"10,10",XY的平移*/
// 添加单点
function addPoint(option) {
  ue4("AddPoints", option);
}
// 添加多点
function addPoints(option, GroupName) {
  let def = {
    bBackgroundImage: true,
    Group: GroupName,
    SpcaceType: 1,
    StyleIndex: 4,
    PointID: "123",
    Longitude: 121.5337593358,
    Latitude: 29.8872743821,
    Height: 8.0081906626,
    Min: 40000,
    Max: 40000,
    TextContent: "新芝片区更新改造提升工程",
    FontColor: "1.0, 1.0, 1.0, 1.0",
    FontSize: 14,
    FontIndex: 7,
    bShowAfterRun: true,
    ImageUrl: "./images/label.png",
    ImageSize: "233,110",
    ImageTranslation: "95,0",
    TextTranslation: "145,12",
    bTextHide: false,
    bTextureHide: false,
    bMatchSize: false,
  };
  option.forEach((el) => {
    if (el.ImageUrl !== undefined) {
      def.ImageUrl = el.ImageUrl;
    } else {
      def.ImageUrl = "./images/label.png";
    }
    def.PointID = el.FID;
    def.TextContent = el.NAME;
    def.Longitude = el.X;
    def.Latitude = el.Y;
    def.Height = el.Z;
    ue4("AddPoints", def);
  });
}

/**
 * 添加线
 * {
 *    Brightness: '1',
 *    Group: 'oneCarTrack',
 *    LineColor: '1,0,0,1',
 *    LineCoords: ['X=121.734247488416,Y=29.97529781,Z=2350', 'X=121.728192830387,Y=29.9720202884,Z=2350', 'X=121.7262530001,Y=29.970887231,Z=2350'],
 *    LineID: '014865828797194958',
 *    LineType: '2',
 *    ShowLine: true,
 *    SplineType: '1',
 *    Tilling: '300',
 *    Width: 1,
 *    bLoop: false,
 *    speed: '1',
 *    bspawn: true,
 *    ActorType: 1,
 *    SpawnTime: 5,
 *    ActorSpeed: 5,
 *    ActorScale: 1,
 * }
 */
function addLine(option) {
  ue4("AddLine", option);
}
function addLines(option) {
  let def = {
    Brightness: "1",
    Group: "area",
    LineColor: "255,215,0,1",
    LineCoords: [
      "X=121.5445841,Y=29.85985359,Z=0",
      "X=121.5455209,Y=29.85983827,Z=0",
      "X=121.5465986,Y=29.86088594,Z=0",
      "X=121.5457266,Y=29.86140114,Z=0",
      "X=121.5445472,Y=29.8598873,Z=0",
    ],
    LineID: "4",
    LineType: "1",
    ShowLine: true,
    SplineType: "0",
    Tilling: "300",
    Width: 10,
    bLoop: false,
    speed: "1",
    bspawn: true,
    ActorType: 1,
    SpawnTime: 5,
    ActorSpeed: 5,
    ActorScale: 1,
  };
  option.forEach((el) => {
    if (el.LineColor !== undefined) {
      def.LineColor = el.LineColor;
    }
    def.LineID = el.FID;
    def.LineCoords = el.LineCoords;
    ue4("AddLine", def);
  });
}

/**
 * 修改线的颜色
 * {Tag:"oneCarTrack_014865828797194958",Color:"1,1,1"}
 */
function updateLineColor(option) {
  ue4("ChangeLineColor", option, function (a) {
    // console.log(a);
  });
}

/**
 * 添加面
 * {
 *    Group:"Plane",
 *    PlaneID: '3',
 *    PlaneColor: '1,1,0,1',
 *    Opacity:1,
 *    ShowPlane: true,
 *    "points": [
 *        'X=121.73531158502107,Y=29.972650798339696,Z=2543',
 *        'X=121.73424800681752,Y=29.97417093071625,Z=2543',
 *        'X=121.7315946996193,Y=29.97294105144983,Z=2543',
 *        'X=121.73255548859697,Y=29.97135849761591,Z=2543',
 *    ]
 * }
 */
function addPlane(option) {
  ue4("AddPlane", option, function (a) {
    // console.log(a);
  });
}

/**
 * 修改面的颜色
 * {Tag:"Plane_3",Color:"1,1,1,1",Opacity:1}
 */
function updatePlaneColor(option) {
  ue4("ChangePlaneColor", option, function (a) {
    // console.log(a);
  });
}

/**
 * 通过Group或者通过Tag控制显示隐藏
 * Tag是Group_ID的组合
 * {Group:"Projection",Tag:'Projection_123',bHide:false}
 */
function showOrHideWithTag(option) {
  ue4(
    "ShowOrHideWithTag",
    option
    // function (a) {
    //     console.log(val);
    // }
  );
}

/**
 * 通过Group或者通过Tag删除
 * Tag是Group_ID的组合
 * {Group:"Projection",Tag:'Projection_123'}
 */
//删除，通过Group或者通过tag:tag是Group_ID的组合，
function destoryByTag(option) {
  ue4(
    "DestoryByTag",
    option
    // function (a) {
    //     console.log(val);
    // }
  );
}

/**
 * 生成大型设备
 * @param {*} option
 * {Type: 0, ID: '123', Longitude: 120, Latitude: 30, Height: 100, Yaw: 10, bPlaing: false}
 */
function addLargeEquipment(option) {
  ue4("SpawnLargetEquipment", option, function (a) {
    // console.log(a);
  });
}

/**
 * 设置大型设备 是否有作业动画
 * @param {*} option
 * { ID: '123', bPlaying: true }
 */
function updateLargeEquipWork(option) {
  ue4(
    "SetLargetEquipmentAni",
    option
    // function (a) {
    //     console.log(val);
    // },
  );
}

/**
 * 设置皮带机 是否有作业动画
 * @param {*} option
 * { ID: '123', bPlaying: true }
 */
function updatePDJWork(option) {
  ue4(
    "SetPDJAni",
    option
    // function (a) {
    //     console.log(val);
    // },
  );
}

/**
 * 设置大型设备的颜色
 * @param {*} option
 * { ID: '1', Color: '1,0,0' }
 */
function updateLargeEquipColor(option) {
  ue4(
    "SetLargetEquipmentColor",
    option
    // function (a) {
    //     console.log(val);
    // },
  );
}

/**
 * 设置大型设备的位置
 * @param {*} option
 *  { ID: '123', Longitude: 121.7233137, Latitude: 29.965720044, Height: 2300, Yaw: 123.882102 }
 */
function updateLargeEquipPosition(option) {
  ue4(
    "SetLargetEquipmentPosition",
    option
    // function (a) {
    //     console.log(val);
    // },
  );
}

/**
 * 生成流机设备
 * @param {*} option
 * {
 *    Type: 0,
 *    ID: "1",
 *    TypeText: "集装箱车",
 *    Name: "浙B12345",
 *    Addr: "一号码头",
 *    Color: "1,1,1",
 *    Url: "http://xxxxx",
 *    Longitude: 121.728165550185,
 *    Latitude: 29.9676342309351,
 *    Height: 2353,
 *    Color: "1,0,0",
 *    Yaw: 10,
 *    ViewLength: 2500,
 *    ViewRotation: "-30,90,0",
 * }
 * color:1,1,1RGB没有A
 * viewlength,视角到流机设备的距离；viewrotation:跟随设备后的角度
 */
function addFlowEquipment(option) {
  ue4(
    "SpawnFlowMachineEquipment",
    option
    // function (a) {
    //     console.log(val);
    // },
  );
}

/**
 * 点位附加到actor
 * @param {*} PointTag 点位tag
 * @param {*} TargetTag 目标物tag
 * @param {*} offset 相对高度
 */
function bindPointTarget(PointTag, TargetTag, offset) {
  ue4(
    "POIActtach",
    {
      PointTag,
      TargetTag,
      RelativeLocation: `0,0,${offset}`,
    },
    function (a) {
      // console.log(a);
    }
  );
}

/**
 * 通过ID 跟随流机设备
 * @param {*} option
 * {ID:"1",ViewLength:2500,ViewRotation:"-30,90,0"}
 * viewlength,视角到流机设备的距离；viewrotation:跟随设备后的角度
 */
function followFlowEquipment(option) {
  ue4("FlowMachineByID", option, function (a) {
    // console.log(a);
  });
}
/**
 * 视角离开流机设备
 */
function exitFollowCam() {
  ue4("LeaveFlowMachine", function (a) {
    // console.log(a);
  });
}

/**
       * 通过ID，设置流机位置
       * @param {*} option
       *  {
              ID: '1',
              PrevLongitude: 121.728065550185,
              PrevLatitude: 29.9676342309351,
              PrevHeight: 2300,
              PrevYaw: 60,
              TargetLongitude: 121.72811528809,
              TargetLatitude: 29.967582292388997,
              TargetHeight: 2300,
              TargetYaw: 60,
              UpdateTime: 2,
          }
       */
function updateFlowEquipPos(option) {
  ue4("ChangeFlowMachineEquipmentPosition", option, function (a) {
    console.log(a);
  });
}

/**
 * 通过ID，设置流机颜色
 * @param {*} option
 *  { ID: "1", Color: "1,0,0" }
 */
function updateFlowEquipColor(option) {
  ue4("ChangeFlowMachineEquipmentColor", option, function (a) {
    console.log(a);
  });
}

/**
       * 生成流机的历史路径线条
       * @param {*} option
       *  {
              Group: "oneCarTrack",
              LineID: "014865828797194958",
              LineCoords: [
                  "X=121.72750474644701,Y=29.9668572292778,Z=3543",
                  "X=121.72875321319,Y=29.9677923875087,Z=3543",
              ],
              SplineType: 0,
              bLoop: false,
              bPlayLoop: true,
              Speed: 10000,
       * }
       * 生成历史轨迹Group_LineID组成tag，"SplineType": 0-1直线、曲线, bPlayLoop循环播放，speed速度/100是m/s
       */
function addHistoryLine(option) {
  ue4("AddHistoryLine", option, function (a) {
    console.log(a);
  });
}

/**
       * 生成按照历史路径走的流机
       * @param {*} option
       *  {
              LineTag: "oneCarTrack_014865828797194958",
              bVisable: true,
              Type: 0,
          }
       */
function addHistoryEquip(option) {
  ue4("SetHistoryLine", option, function (a) {
    console.log(a);
  });
}

/**
      * 视角跟随历史路径的流机
      * @param {*} option
      *  {
      *      ID: '014865828797194958',
      *       bFocus: true,
      *      bRotate: false,
      *      bArmLen: true,
      *      Horizontal: 40,
      *      Vertival:40,
      *      ViewLength: 5000
          }
      */
function flowHistoryEquip(option) {
  ue4("FlowHistoryMachine", option, function (a) {
    console.log(a);
  });
}

/**
 * 通过ID控制枚举区域的堆放
 * @param {*} option
 *  { ID: "1166633", ModelType: 2 }
 */
function setEnumAreaModel(option) {
  ue4("ModelControl", option, function (a) {
    console.log(a);
  });
}


export {
  addLine,
  addLines,
  addPoint,
  addPoints,
  focusHS,
  focusWN,
  setCamera,
  getStatus,
  resetCamera,
  quit,
  init,
  focusItemTag,
  refresh,
  changeWeather,
};
