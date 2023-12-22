// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
  data: {},
  onLoad() {},
  goOne() {
    wx.navigateTo({ url: "/pages/xr-template-arPreview/index" });
  },
  click1(event:any) {
   wx.navigateTo({url:"/pages/model-one/model-one"})
  },
  click2(event:any) {
    console.log("dfak")
    wx.navigateTo({url:"/pages/model-two/model-two"})
  },
  click3(event:any) {
    wx.navigateTo({url:"/pages/model-three/model-three"})
  },
});
