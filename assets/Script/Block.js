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
               
        live:0,
        current:0,
        startime:false,
        Game:{
            default:null,
            serializable:false
        },
       row:0,
       col:0,
       count:0,
       m:0
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
            this.node.on('touchend',this.MoveCell,this);  
                                                                        
     },
   
     MoveCell:function(){ 
       if( cc.sys.localStorage.getItem('VsUser') == 0){
        if(!this.Game.over && !this.Game.stop && !this.Game.pause ){
            this.live +=1;
            if(this.live == 1){                             
                this.Game.Dawn(this.node);
                
               var node = new cc.Node("New Sprite");
               var sprite = node.addComponent(cc.Sprite);
               node.parent = this.node;        
               if(  cc.sys.localStorage.getItem('mui') == 1){
                   var url = cc.url.raw("resources/o.png");
                   this.current = 1;               
               }
               else  if( cc.sys.localStorage.getItem('mui') == 2){
                   var url = cc.url.raw("resources/x.png");
                   this.current = 1;
                    
               }               
               var texture = cc.textureCache.addImage(url);
               sprite.spriteFrame = new cc.SpriteFrame(texture); 
                this.Game.stop = true;
                this.Game.TimeRight.getComponent(cc.Sprite).fillRange = 1;
                this.Game.TimeLeft.getComponent(cc.Sprite).fillRange = 0;
               this.node.getComponent(cc.Animation).enabled  = true;
               this.Game.GameOver();
               this.Game.UpdateCell(this.row,this.col);
                                          
         }                                   
         } 
       } else if(!this.Game.over && !this.Game.stop && !this.Game.pause && !this.Game.startGame){
        this.live +=1;
        if(this.live == 1){                             
            this.Game.Dawn(this.node);
            
           var node = new cc.Node("New Sprite");
           var sprite = node.addComponent(cc.Sprite);
           node.parent = this.node;        
           if(  cc.sys.localStorage.getItem('mui') == 1){
               var url = cc.url.raw("resources/o.png");
               this.current = 1;               
           }
           else  if( cc.sys.localStorage.getItem('mui') == 2){
               var url = cc.url.raw("resources/x.png");
               this.current = 1;
                
           }               
           var texture = cc.textureCache.addImage(url);
           sprite.spriteFrame = new cc.SpriteFrame(texture);                     
            this.Game.TimeLeft.getComponent(cc.Sprite).fillRange = 0;
           this.node.getComponent(cc.Animation).enabled  = true;
           this.Game.GameOver();
           
                                      
     }                                   
     } 
           
         
        
     },
    start:function () {
       for( i = 0 ; i < this.Game.item.length ; i++){
           if(this.row == this.Game.item[i].getComponent('Block').row && this.col == this.Game.item[i].getComponent('Block').col ){
               this.m = i;
            
           }
           
          
       }
    },

     update (dt) {
        
     },
});
