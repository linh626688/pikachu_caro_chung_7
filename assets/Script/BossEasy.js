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
       Game:{
           default:null,
           serializable:false,
       }
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

    // onLoad () {},
    onLoad () {                  
        
                                                                    
 },


    start () {
    
    },
    MoveBoss:function(Boxcell){
       
            var node = new cc.Node("New Sprite");
            var sprite = node.addComponent(cc.Sprite);
            node.parent = Boxcell;        
            if(  cc.sys.localStorage.getItem('mui') == 2){
                var url = cc.url.raw("resources/o.png");
                Boxcell.getComponent('Block').current = 1; 
                Boxcell.getComponent('Block').live = 2;              
            }
            else  if( cc.sys.localStorage.getItem('mui') == 1){
                var url = cc.url.raw("resources/x.png");
                Boxcell.getComponent('Block').current = 2;
                Boxcell.getComponent('Block').live = 2; 
            }        
            var texture = cc.textureCache.addImage(url);
            sprite.spriteFrame = new cc.SpriteFrame(texture);
            this.Game.TimeRight.getComponent(cc.Sprite).fillRange = 0; 
            Boxcell.getComponent(cc.Animation).enabled  = true;
            this.Game.m = Boxcell.getComponent('Block').m;
        
    },
     update (dt) {
         
     },
});
