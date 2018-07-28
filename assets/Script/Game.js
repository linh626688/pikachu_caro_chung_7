// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
// var Item= cc.Class({
//     name: 'Item',
//     properties: {
//         Cell:{
//             default:null,
//             type:cc.Prefab,
//         },
//     }
// });
cc.Class({
    extends: cc.Component,

    properties: {
                   
      
        AvatarLeft:{
            default:null,
           type: cc.Node
        },
        AvatarRight:{
            default:null,
            type: cc.Node
         },
         UserNameLeft:{
             default:null,
             type:cc.Label
         },
         UserNameRight:{
            default:null,
            type:cc.Label
        },        
     
        time:0,
        ListCell:{
            default:[],
            type:cc.Prefab
        },
        avatar:cc.Sprite,
        TimeLeft:cc.Node,
        TimeRight:cc.Node,
        count:0,
        BossEasy:cc.Prefab,
        Test:cc.Node,
        loadingGo:cc.Node,
        loadingHome:cc.Node,
        Sound:cc.Node,
        soundOff:cc.SpriteFrame,
        soundOl:cc.SpriteFrame
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
    btnHome:function(){
        this.loadingGo.active = true;
        cc.director.loadScene("Menu");
        
    },
    btnNewGame:function(){
        this.loadingGo.active = true;
        cc.director.loadScene("GameAI");
        
    },
    onLoad: function () {
         //this.spawnNew();
        // this. BossEasy = cc.instantiate(this.PrefapBossEasy);
        // this.node.addChild(this.BossEasy);
        //  this.BossEasy.getComponent('BossEasy').Game =this;
         // this.BossEasy.MoveBoss(this.item[0]);
        // console.log("chung"+this.item.length);  
    //    this.node.on('touchend', this.Count,this);
        if(cc.sys.localStorage.getItem('Sound7') == 0){
            this.Sound.getComponent(cc.Sprite).spriteFrame = this.soundOl;
        }else{
            this.Sound.getComponent(cc.Sprite).spriteFrame = this.soundOff;
        }
    },
    btnSound:function(){
        if(cc.sys.localStorage.getItem('Sound7') == 0){
            this.Sound.getComponent(cc.Sprite).spriteFrame = this.soundOff;
            cc.sys.localStorage.setItem('Sound7', JSON.stringify(1));
        }else{
            this.Sound.getComponent(cc.Sprite).spriteFrame = this.soundOl;
            cc.sys.localStorage.setItem('Sound7', JSON.stringify(0));
        }
    },
   Dawn:function(a){
    
            this.ListCell.push(a);
            console.log(""+this.ListCell.length);
       
        
   },
  
 
    
   
    
    start () {
        this.loadingHome.active = true;
        this.Test.active = true;
        if (typeof FBInstant === 'undefined') return;
        this.UserNameLeft.string = '' + FBInstant.player.getName();
        var photoUrl = FBInstant.player.getPhoto();
        cc.loader.load(photoUrl, (err, texture) => {
        this.avatar.spriteFrame = new cc.SpriteFrame(texture);
    });
        
        
    },  
    //  update (dt) {       
    //  },
});
