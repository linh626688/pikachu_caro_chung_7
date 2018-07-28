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
        avatar:cc.Sprite,
        LoadingUser:cc.Label,
        time:0,
        ListCell:{
            default:[],
            type:cc.Prefab
        },
        TimeLeft:cc.Node,
        TimeRight:cc.Node,
        count:0,
        BossEasy:cc.Prefab,
        Test:cc.Node,
        loadingGo:cc.Node,
        loadingHome:cc.Node,
        Sound:cc.Node,
        soundOff:cc.SpriteFrame,
        soundOl:cc.SpriteFrame,
        bg:cc.Node,
        avatar2:cc.Sprite,
        UseNameYour:cc.Label,
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
    inviteFriends: function() {
        var e = this;
        "undefined" != typeof FBInstant && FBInstant.context.chooseAsync(
            
        ).then(function() {
            e.updateContext()
        }).catch(() => {
            console.log("choose reject ");
            this.loadingGo.active = true;
            cc.director.loadScene("Menu");
        })
    },  
    updateContext: function() {
        FBInstant.updateAsync({
            action: "CUSTOM",
            cta: "Play Now",
            template: "invite_play",
            image: this.getImgBase64(this.banner),
            text: "Lets play Math stick with me",
            data: {},
            strategy: "IMMEDIATE",
            notification: "PUSH"
        }).then(()=>{
            console.log("invite success");
            FBInstant.context.getPlayersAsync()
            .then((players) => {
               
                 this.LoadingUser.string =""+ players[1].getName();
                 var photoUrl= players[1].getPhoto();
                 cc.loader.load(photoUrl, (err, texture) => {
                this.avatar.spriteFrame = new cc.SpriteFrame(texture);
            });
                 this.UseNameYour.string =""+ players[0].getName();
                 var photoUrl2 = players[0].getPhoto();
                 cc.loader.load(photoUrl2, (err, texture) => {
                    this.avatar2.spriteFrame = new cc.SpriteFrame(texture);
                });
                 this.bg.active =false;
              console.log(players); 
              console.log("Pl:" + players[0].getName());
             
            });
            
        }).catch((e) =>{
            console.log("invite reject "+ e);
            
        })
    },
    getImgBase64 () {
        // let sp = cc.find('Canvas/MyUser/Avatar').getComponent(cc.Sprite);

        let target = cc.find('Canvas');
        let width = 1920, height = 1080;
        let renderTexture = new cc.RenderTexture(width, height);
        renderTexture.begin();
        target._sgNode.visit();
        renderTexture.end();
        //
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
            let texture = renderTexture.getSprite().getTexture();
            let image = texture.getHtmlElementObj();
            ctx.drawImage(image, 0, 0);
        }
        else if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
            let buffer = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, buffer);
            let texture = renderTexture.getSprite().getTexture()._glID;
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
            let data = new Uint8Array(width * height * 4);
            gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, data);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            let rowBytes = width * 4;
            for (let row = 0; row < height; row++) {
                let srow = height - 1 - row;
                let data2 = new Uint8ClampedArray(data.buffer, srow * width * 4, rowBytes);
                let imageData = new ImageData(data2, width, 1);
                ctx.putImageData(imageData, 0, row);
            }
        }
        return canvas.toDataURL('image/png');
    },
   Dawn:function(a){
    
            this.ListCell.push(a);
            console.log(""+this.ListCell.length);
       
    
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
 
    
   
    
    start () {
        this.loadingHome.active = true;
        this.Test.active = true;                
        this.inviteFriends();
    },  
    //  update (dt) {       
    //  },
});
