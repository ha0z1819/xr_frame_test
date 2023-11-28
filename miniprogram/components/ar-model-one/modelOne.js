Component({
  behaviors: [require('../common/share-behavior').default],
  properties: {
    a: Number,
  },
  data: {
    loaded: false,
    touchingModel:false
  },
  lifetimes: {
    attached() {
      console.log('data.a', this.data.a) // expected 123
    }
  },
  methods: {
    handleTouchModel:function(){
      console.log("点击了");
      this.setData({touchingModel:true})
    },
    handleDragModel:function({detail}){
      console.log("点击了");
      const { dir, target, camera } = detail.value;
      const cameraPos = camera.el._components.transform.worldPosition;
      const k = -cameraPos.y / dir[1];
      const x = cameraPos.x + k * dir[0];
      const z = cameraPos.z + k * dir[2];
      const len = Math.sqrt(x * x + z * z);
      if (len > this.data.innerRing) {
          const transform = target._components.transform;
          const scale = len > this.data.outerRing ? this.data.outerRing / len : 1.0;
          transform.position.x = x * scale;
          transform.position.z = z * scale;
      }
    },



    handleReady({detail}) {
      const xrScene = this.scene = detail.value;
      console.log('xr-scene', xrScene);
    },
    handleAssetsProgress: function({detail}) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function({detail}) {
      console.log('assets loaded', detail.value);
      this.setData({loaded: true});
    },
    handleARReady: function({detail}) {
      console.log('ar-ready', this.scene.ar.arModes, this.scene.ar.arVersion);
    },
    handleARError: function({detail}) {
      console.log('ar-error', detail);
    },
    handleLog: function({detail}) {
      const {el, value} = detail;
      console.log('log', detail.value);
    },
  }
})