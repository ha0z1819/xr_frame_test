// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
  data: {},
  onLoad() {},
  goOne() {
    wx.navigateTo({ url: "/pages/xr-template-arPreview/index" });
  }
});
