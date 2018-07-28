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
        UserName:cc.Label,
        avatar:cc.Sprite,
      rankAll:{
          default:null,
          type:cc.Node
      },
    
      AddHeath:cc.Node,
      btnAll:cc.Node,
      btnFr:cc.Node,
      content:cc.Node,
      contentFriend:cc.Node,
      GetUser:cc.Prefab,
      stop:false,
      count:1,
      ScrollViewAll:{
          default:null,
          type:cc.Node
      },
      loadingGo:cc.Node,
      loadingHome:cc.Node,
      sound:0,
      Sound:{
        default:[],
        url:cc.AudioClip,
      },
      spritesound:cc.Node,
      rankallOn:cc.SpriteFrame,
      rankallOff:cc.SpriteFrame,
      rankfrOn:cc.SpriteFrame,
      rankfrOff:cc.SpriteFrame,
      soundOl:cc.SpriteFrame,
      soundOff:cc.SpriteFrame,
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
    ButtonAI:function(){
       
        if(!this.stop){
            this.loadingGo.active = true;
            cc.director.loadScene("MissionGameAI");
            cc.sys.localStorage.setItem('mui', JSON.stringify(2));
            cc.sys.localStorage.setItem('VsUser', JSON.stringify(0));
        }
        
        
    },
    btnAddHeath:function(){
        this.stop = true;
        this.AddHeath.active =true;
        this.ScrollViewAll.getComponent(cc.ScrollView).vertical =false;
       
    },
    btnCLose:function(){
        this.AddHeath.active =false;
        this.stop =false;
        this.ScrollViewAll.getComponent(cc.ScrollView).vertical =true;
      
    },
    btnRankAll:function(){
        if(!this.stop){
           if(cc.sys.localStorage.getItem('Sound7') == 0){
            cc.audioEngine.playMusic(this.Sound[1]);
            }
           
            this.btnAll.getComponent(cc.Sprite).spriteFrame =this.rankallOn;
            this.btnFr.getComponent(cc.Sprite).spriteFrame =this.rankfrOff;
            this.content.active =true;
            this.contentFriend.active =false;                           
        }
    },
    btnRankFriend:function(){
        if(!this.stop){
            if(cc.sys.localStorage.getItem('Sound7') == 0){
            cc.audioEngine.playMusic(this.Sound[0]);}
            this.btnAll.getComponent(cc.Sprite).spriteFrame =this.rankallOff;
            this.btnFr.getComponent(cc.Sprite).spriteFrame =this.rankfrOn;
            this.content.active =false;
            this.contentFriend.active =true;

                     }
    },
    btnVsWorld:function(){
        if(!this.stop){
          cc.director.loadScene("GameOnlineVsWorld");
          cc.sys.localStorage.setItem('VsUser', JSON.stringify(1));                                 
        }
    },
    btnVsFriend:function(){
       
        if(!this.stop){
            this.loadingGo.active = false;
            cc.director.loadScene("GameOnlineVsFriend");
            cc.sys.localStorage.setItem('VsUser', JSON.stringify(1));
        }
       
    },

    
    btnAvatar:function(){
        if(!this.stop){
        }
    },
    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        
         this.sound = cc.sys.localStorage.getItem('Sound7') ;
         if (this.sound == null) { 
            this.sound =0; 
            }
        this.loadingHome.active = true;
        this.content.active =true;
        this.contentFriend.active =false;
        
       if(this.sound == 0){
        cc.audioEngine.playMusic(this.Sound[0]);
        
        this.spritesound.getComponent(cc.Sprite).spriteFrame =this.soundOl;       
       }else{
        this.spritesound.getComponent(cc.Sprite).spriteFrame =this.soundOff;
         
       }
            
        
        
     },
     btnSound:function(){
        if(!this.stop){
         if(this.sound == 0){
            this.sound = 1;
            cc.sys.localStorage.setItem('Sound7', JSON.stringify(this.sound));
            this.spritesound.getComponent(cc.Sprite).spriteFrame =this.soundOff;            
            
            cc.audioEngine.pauseAll();
         }else if(this.sound == 1){
            this.sound = 0;
            cc.sys.localStorage.setItem('Sound7', JSON.stringify(this.sound));
            this.spritesound.getComponent(cc.Sprite).spriteFrame =this.soundOl;
            cc.audioEngine.resumeAll();
           
            
            // cc.audioEngine.playMusic(this.Sound[0],true);
         }    
        }              
     },
    
    start () {
        
        if (typeof FBInstant === 'undefined') return;
        this.UserName.string = '' + FBInstant.player.getName();
        var photoUrl = FBInstant.player.getPhoto();
        cc.loader.load(photoUrl, (err, texture) => {
        this.avatar.spriteFrame = new cc.SpriteFrame(texture);
    });
    
    },
    
   
     update (dt) {
       
       
     },
});
