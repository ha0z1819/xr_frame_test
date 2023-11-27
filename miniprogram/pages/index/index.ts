// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
  data: {},
  onLoad() {},
  goOne() {
    wx.navigateTo({ url: "/pages/xr-template-arPreview/index" });
  },
  goTwo(event) {
   console.log(event)
   var id=event.target.id;
   console.log(id)
   switch (id) {
    case 1:
      wx.navigateTo({ url: "/pages/xr-template-arPreview/index" });
       break;
    case 2:
      wx.navigateTo({ url: "/pages/xr-template-arPreview/index" });
        break;
    case 3:
      wx.navigateTo({ url: "/pages/xr-template-arPreview/index" });
        break;
   
     default:
       break;
   }
  }
});
