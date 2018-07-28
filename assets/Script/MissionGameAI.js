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

    properties: {
        avatar:cc.Sprite,
        UserName:cc.Label,
        btnLeft:cc.Node,
        btnRight:cc.Node,
        count:0,
        loadingGo:cc.Node,
        loadingHome:cc.Node,
        Xoff:cc.SpriteFrame,
        Xol:cc.SpriteFrame,
        Ooff:cc.SpriteFrame,
        Ool:cc.SpriteFrame,
        
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
         
     },
     
     Home:function(){
        this.loadingGo.active = true;
        cc.director.loadScene("Menu");
     },
     Left:function(){
        this.btnLeft.getComponent(cc.Sprite).spriteFrame = this.Ool;
        this.btnRight.getComponent(cc.Sprite).spriteFrame = this.Xoff;
        cc.sys.localStorage.setItem('mui', JSON.stringify(1));
     },
     Right:function(){
        this.btnLeft.getComponent(cc.Sprite).spriteFrame = this.Ooff;
        this.btnRight.getComponent(cc.Sprite).spriteFrame = this.Xol;     
        cc.sys.localStorage.setItem('mui', JSON.stringify(2));
     },
     BtnEasy:function(){
        this.loadingGo.active = true;
        cc.director.loadScene("GameAI");
        cc.sys.localStorage.setItem('ModeGame', JSON.stringify(1));
         
     },
     BtnNormal:function(){
        this.loadingGo.active = true;
        cc.director.loadScene("GameAI");
        cc.sys.localStorage.setItem('ModeGame', JSON.stringify(2));
     },
     BtnHard:function(){
        this.loadingGo.active = true;
        cc.director.loadScene("GameAI");
        cc.sys.localStorage.setItem('ModeGame', JSON.stringify(3)); 
     },
    start () {
        this.loadingHome.active = true;
        if (typeof FBInstant === 'undefined') return;
        this.UserName.string = '' + FBInstant.player.getName();
        var photoUrl = FBInstant.player.getPhoto();
        cc.loader.load(photoUrl, (err, texture) => {
        this.avatar.spriteFrame = new cc.SpriteFrame(texture);
    });
    },

    // update (dt) {},
});
