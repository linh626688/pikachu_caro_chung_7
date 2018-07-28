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
        scrollview:{
            default:[],
            type: cc.Prefab
        },
        User:{
            default:null,
            type:cc.Prefab
        },
       
        aScrollView:cc.ScrollView,
        count:0,
      
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
   
    AddScrollView:function(){
        var y = -90;
        for(i = 0 ; i < 30 ; i ++){                           
                var test = cc.instantiate(this.User);
                this.node.addChild(test);                
                 y -= 120;
                test.setPosition(this.getNewStarPosition(0,y));
                this.scrollview.push(test);
                // test.getComponent('PrefapsUser').ScrollView =this;  
                this.scrollview[i].getComponent('PrefapsUser').stt.string = (i+1) + ".";                           
        }
      
    },
   
    tess:function(){
        for(a = 0 ; a < this.scrollview.length ; a++){
            
                  
          }
    },
    getNewStarPosition: function (randX,randY) {               
        return cc.p(randX, randY);  
    },
    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.AddScrollView();    
             
         this.node.height = this.scrollview.length * 126.5;
            
    },
    
    start () {
     
    },
   
    
     update (dt) {
     }
});
