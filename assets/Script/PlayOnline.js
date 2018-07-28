// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties:{
        AppKey:"780e1688-b5ff-4545-a",
        Host:"35.236.187.10",
        
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        //  AppWarp.WarpClient.initialize(this.AppKey,"",this.Host);
         
        //  var _warpclient = AppWarp.WarpClient.getInstance();
        //  _warpclient.setResponseListener(AppWarp.Events.onConnectDone, this.onConnectDone());
         
        // //  _warpclient.setNotifyListener();
        // //  _warpclient.joinRoom();
        // //  _warpclient.joinZone();
        //  _warpclient.connect("1111212");
     },

     onConnectDone:function(res){
        
            console.log("res"+ res);
    },
        
   

    start () {

    },

    // update (dt) {},
});
