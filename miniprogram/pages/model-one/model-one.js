// pages/model-one/model-one.ts

var sceneReadyBehavior = require('../behavior-scene/scene-ready');
Page({
  behaviors:[sceneReadyBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    height: 750,
    heightScale: 1,
    showBackBtn: true,
  },
})