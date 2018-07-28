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
       
        
        PreFaps:{
            default:null,
            type:cc.Prefab,
           
        },
        Cell:{
            default:null,
            type:cc.Prefab,
        },
       PrefapBossEasy:{
           default:null,
           type:cc.Prefab,
       },
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
       item:{
           default:[],        
           serializable:false                  
       },
       BoxCell:{
        default:[],        
        serializable:false                  
    },
        
        over:false,
        stop:false,
        time:0,
        ListCell:{
            default:[],
            type:cc.Prefab
        },
        TimeLeft:cc.Node,
        TimeRight:cc.Node,
        count:0,
        BossEasy:cc.Prefab,
        Line1:cc.Prefab,
        Line2:cc.Prefab,
        Line3:cc.Prefab,
        Line4:cc.Prefab,
        GetLine:cc.Prefab,
        m:0,
        random:0,
        spriteframe:cc.SpriteFrame,
        Player:cc.Node,
        pause:false,
        PanelHome:cc.Node,
        Surrender:cc.Node,
        SurrenderWin:cc.Node,
        PanelWin:cc.Node,
        startGame:true,
        loading:cc.Node,
        avatar:cc.Sprite,
        user:cc.Label
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
    panelHome:function(){
        if(!this.startGame){
            this.pause = true;
            this.PanelHome.active =true;
            
        }
       
    },
    btnHome:function(){
        cc.director.loadScene("Menu");
        
    },
    btnSurrender:function(){
        this.Surrender.active=true;
        this.PanelHome.active =false;
        
    },
    btnYes:function(){
        this.Surrender.active = false;
        this.SurrenderWin.active =true;
        this.startGame =true;
    },
    btnNo:function(){
        this.Surrender.active =false;
        this.pause =false;
    },
    // LIFE-CYCLE CALLBACKS:
    btnAvatar:function(){
        if(!this.pause && !this.startGame){
            this.Player.active = true;
            this.pause = true;
        }
       
    },
    // LIFE-CYCLE CALLBACKS:
    closePanaelHome:function(){
        this.PanelHome.active =false;
        this.pause =false;
    },
    close:function(){
        this.Player.active=false;
        this.pause = false;
    },
    onLoad: function () {
         this.spawnNew();
        //  this. BossEasy = cc.instantiate(this.PrefapBossEasy);
        //  this.node.addChild(this.BossEasy);
        //  this.BossEasy.getComponent('BossEasy').Game =this;
         // this.BossEasy.MoveBoss(this.item[0]);
        // console.log("chung"+this.item.length);  
    //    this.node.on('touchend', this.Count,this);
        this.startGame =true;
    },
   Dawn:function(a){
    
            this.ListCell.push(a);
            
            this.m = a.getComponent('Block').m;
            
   },
  
    getNewStarPosition: function (randX,randY) {      
        
        return cc.p(randX, randY);
        
        // 返回星星坐标
        
    },
    
    spawnNew: function(){
        // var arr = [];
        // this.node.addChild(spawn1);
        // this.node.addChild(spawn2);  
       var x =0;
       var y = 0;
        for(  i=-7; i< 8 ; i++){
            var a = -7;
            for(  ; a < 8 ; a++){            
                                                                           
                    var spawn = cc.instantiate(this.PreFaps);                                                        
                    this.node.addChild(spawn);                   
                     spawn.getComponent('Block').row=a+7;
                     spawn.getComponent('Block').col=i+7;
                     x =a * spawn.width;
                     y = i * spawn. height;
                    spawn.setPosition(this.getNewStarPosition(x,y));                                                                                               
                    this.item.push(spawn);
                    spawn.getComponent('Block').Game = this;
                    
               
            }                      
        }    
   
    }, 
   
    start () {
        if( cc.sys.localStorage.getItem('mui') == 2){
            this.stop = false;
        } else   if( cc.sys.localStorage.getItem('mui') == 1){
            this.stop = true;
        }
       this. random= Math.floor((Math.random() * 4) + 1);
       
       this.m = Math.floor((Math.random() * 20) + 110);
       if (typeof FBInstant === 'undefined') return;
        this.user.string = '' + FBInstant.player.getName();
        var photoUrl = FBInstant.player.getPhoto();
        cc.loader.load(photoUrl, (err, texture) => {
        this.avatar.spriteFrame = new cc.SpriteFrame(texture);
    });
       
    },

    tesst:function(){
      this.startGame =false;
      this.loading.active =false; 
    },

GameOver(){
    if(this.ListCell.length == 225){
        this.over = true;
        this.dawn.active =true;
    }
    for(i = 0 ; i < this.item.length ; i ++)
    {
        if(  i != 11 && i != 12 && i != 13 && i != 14 && i != 26 && i != 27 && i != 28 && i != 29 && i != 41 && i != 42 && i != 43 && i != 44 & i != 56 && i != 57 && i != 58 && i != 59 & i != 71 && i != 72 && i != 73 && i != 74 && i != 86 && i != 87 && i != 88 && i != 89 && i != 101 && i != 102 && i != 103 && i != 104 && i != 116 && i != 117 && i != 118 && i != 119 && i != 131 && i != 132 && i != 133 && i != 134 && i != 146 && i != 147 && i != 148 && i != 149 && i != 161 && i != 162 && i != 163 && i != 164 && i != 176 && i != 177 && i != 178 && i != 179 && i != 191 && i != 192 && i != 193 && i != 194 && i != 206 && i != 207 && i != 208 && i != 209 && i != 221 && i != 222 && i != 223 && i != 224){
           
                if(this.item[i].getComponent('Block').current == 1 && this.item[i+1].getComponent('Block').current == 1 && this.item[i+2].getComponent('Block').current == 1 && this.item[i+3].getComponent('Block').current == 1 && this.item[i+4].getComponent('Block').current == 1 )
            {                      
                    this.GetLine = cc.instantiate(this.Line3);
                    this.node.addChild(this.GetLine);
                    this.GetLine. setPosition(this.item[i+2].x,this.item[i+2].y);          
                    this.over = true;
                    
            }
             else  if(this.item[i].getComponent('Block').current == 2 && this.item[i+1].getComponent('Block').current == 2 && this.item[i+2].getComponent('Block').current == 2 && this.item[i+3].getComponent('Block').current == 2 && this.item[i+4].getComponent('Block').current == 2 )
             {      
                
                this.GetLine = cc.instantiate(this.Line3);
                this.node.addChild(this.GetLine);
                this.GetLine. setPosition(this.item[i+2].x,this.item[i+2].y);          
                this.over = true;
                                                       
             }
            
                
        }
        if( i <= 164){
           
                if(this.item[i].getComponent('Block').current == 1 && this.item[i+15].getComponent('Block').current == 1 && this.item[i+30].getComponent('Block').current == 1 && this.item[i+45].getComponent('Block').current == 1 && this.item[i+60].getComponent('Block').current == 1)
                {   
                    this.GetLine = cc.instantiate(this.Line1);
                    this.node.addChild(this.GetLine);
                    this.GetLine. setPosition(this.item[i+30].x,this.item[i+30].y);         
                   this.over = true;
                  
                }
                 else  if(this.item[i].getComponent('Block').current == 2 && this.item[i+15].getComponent('Block').current == 2 && this.item[i+30].getComponent('Block').current == 2 && this.item[i+45].getComponent('Block').current == 2 && this.item[i+60].getComponent('Block').current == 2 )
                 {      
                    this.GetLine = cc.instantiate(this.Line1);
                    this.node.addChild(this.GetLine);
                    this.GetLine. setPosition(this.item[i+30].x,this.item[i+30].y);   
                    this.over = true; 
                                                                     
                 }                                 
           
        }

        if(i %15 != 11 && i %15 !=12 && i %15 !=13 && i %15 != 14){
            if(i <= 160){
               
                if(this.item[i].getComponent('Block').current == 1 && this.item[i+16].getComponent('Block').current == 1 && this.item[i+32].getComponent('Block').current == 1 && this.item[i+48].getComponent('Block').current == 1 && this.item[i+64].getComponent('Block').current == 1 )
                {   
                   
                        this.GetLine = cc.instantiate(this.Line4);
                        this.node.addChild(this.GetLine);
                        this.GetLine. setPosition(this.item[i+32].x,this.item[i+32].y);           
                        this.over = true;
                        
                }
                 else  if(this.item[i].getComponent('Block').current == 2 && this.item[i+16].getComponent('Block').current == 2 && this.item[i+32].getComponent('Block').current == 2 && this.item[i+48].getComponent('Block').current == 2 && this.item[i+64].getComponent('Block').current == 2 )
                 {      
                    
                        this.GetLine = cc.instantiate(this.Line4);
                        this.node.addChild(this.GetLine);
                        this.GetLine. setPosition(this.item[i+32].x,this.item[i+32].y);        
                        this.over = true;
                                                                 
                 }
               
            }
        }
        if(i %15 != 0 && i %15 !=1 && i %15 !=2 && i %15 != 3){
            if(i <= 168){
                
                    if(this.item[i].getComponent('Block').current == 1 && this.item[i+14].getComponent('Block').current == 1 && this.item[i+28].getComponent('Block').current == 1 && this.item[i+42].getComponent('Block').current == 1 && this.item[i+56].getComponent('Block').current == 1 )
                    {   
                        
                            this.GetLine = cc.instantiate(this.Line2);
                            this.node.addChild(this.GetLine);
                            this.GetLine. setPosition(this.item[i+28].x,this.item[i+28].y);          
                            this.over = true;
                            
                    }
                     else  if(this.item[i].getComponent('Block').current == 2 && this.item[i+14].getComponent('Block').current == 2 && this.item[i+28].getComponent('Block').current == 2 && this.item[i+42].getComponent('Block').current == 2 && this.item[i+56].getComponent('Block').current == 2 )
                     {      
                        
                            this.GetLine = cc.instantiate(this.Line2);
                            this.node.addChild(this.GetLine);
                            this.GetLine. setPosition(this.item[i+28].x,this.item[i+28].y);          
                            this.over = true;
                                                                     
                     }  
                
               
            } 
        }
       
    }
        
        
             
},
     update (dt) {
        if(!this.over && !this.startGame){
            if(!this.stop){
                this.TimeRight.getComponent(cc.Sprite).fillRange = 0;
                 this.TimeLeft.getComponent(cc.Sprite).fillRange -= 0.1*dt;
                 if(this.TimeLeft.getComponent(cc.Sprite).fillRange <=0  ){                 
                    this.TimeLeft.getComponent(cc.Sprite).fillRange = 0; 
                    this.TimeRight.getComponent(cc.Sprite).fillRange = 1;
                    this.stop = true;
                }
                
            }else if(this.stop){
                this.TimeLeft.getComponent(cc.Sprite).fillRange = 0; 
                this.TimeRight.getComponent(cc.Sprite).fillRange -= 0.1 * dt;
                if(this.TimeRight.getComponent(cc.Sprite).fillRange <=0 ){
                    this.TimeRight.getComponent(cc.Sprite).fillRange = 0; 
                    this.TimeLeft.getComponent(cc.Sprite).fillRange = 1;
                    this.stop = false;
                }
             }
        }
      
      
        
         
      
      
        if(this.over){
         this.time += dt;
         if(this.time > 3.5){
           
              cc.director.loadScene("GameOnline");
         }   
        }
     },
});
