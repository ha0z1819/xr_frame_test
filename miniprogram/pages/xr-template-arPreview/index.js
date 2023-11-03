// pages/xr-template-arPreview/index.ts

var sceneReadyBehavior = require('../behavior-scene/scene-ready');
Page({
  behaviors:[sceneReadyBehavior],
  moveTimes: 0,
  data: {
    // 内置
    height: 600,
    heightScale: 0.85,
    showBackBtn: true,
  },
  onLoad( ) {
  },

});