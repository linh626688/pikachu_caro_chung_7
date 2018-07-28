// // Learn cc.Class:
// //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// // Learn Attribute:
// //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

// cc.Class({
//     extends: cc.Component,

//     properties: {
//         boardSize=15,
//     userSq= 1,
//     machSq=-1,
//     blinkSq="b-1",
//     myTurn=false,
//     winningMove=9999999,
//     openFour   =8888888,
//     twoThrees  =7777777,
//     f=new Array(),
//     s=new Array(),
//     q=new Array(),


//     iLastUserMove:0,
//     jLastUserMove:0,
//         // foo: {
//         //     // ATTRIBUTES:
//         //     default: null,        // The default value will be used only when the component attaching
//         //                           // to a node for the first time
//         //     type: cc.SpriteFrame, // optional, default is typeof default
//         //     serializable: true,   // optional, default is true
//         // },
//         // bar: {
//         //     get () {
//         //         return this._bar;
//         //     },
//         //     set (value) {
//         //         this._bar = value;
//         //     }
//         // },
//     },

//     // LIFE-CYCLE CALLBACKS:

//     // onLoad () {},
//         clk:function(iMove,jMove) {
//         if (myTurn) return; 
        
//         f[iMove][jMove]=userSq;
//         drawSquare(iMove,jMove,userSq);
//         myTurn=true;
//         iLastUserMove=iMove;
//         jLastUserMove=jMove;
       
//         dly=(document.images)?10:boardSize*30;
       
        
//        },
//        machineMove: function(iUser,jUser) {
//         maxS=evaluatePos(s,userSq);
//         maxQ=evaluatePos(q,machSq);
       
//         // alert ('maxS='+maxS+', maxQ='+maxQ);
       
//         if (maxQ>=maxS) {
//          maxS=-1;
//          for (i=0;i<boardSize;i++) {
//           for (j=0;j<boardSize;j++) {
//            if (q[i][j]==maxQ && s[i][j]>maxS) {
//             maxS=s[i][j]; 
//             iMach=i;
//             jMach=j;
//            }
//           }
//          }
//         }
       
//         else {
//          maxQ=-1;
//          for (i=0;i<boardSize;i++) {
//           for (j=0;j<boardSize;j++) {
//            if (s[i][j]==maxS && q[i][j]>maxQ) {
//             maxQ=q[i][j]; 
//             iMach=i;
//             jMach=j;
//            }
//           }
//          }
//         }
       
//         f[iMach][jMach]=machSq;
        
//        },
       
//         hasNeighbors:function(i,j) {
//         if (j>0 && f[i][j-1]!=0) return 1;
//         if (j+1<boardSize && f[i][j+1]!=0) return 1; 
//         if (i>0) {
//          if (f[i-1][j]!=0) return 1;
//          if (j>0 && f[i-1][j-1]!=0) return 1;
//          if (j+1<boardSize && f[i-1][j+1]!=0) return 1;
//         }
//         if (i+1<boardSize) {
//          if (f[i+1][j]!=0) return 1;
//          if (j>0 && f[i+1][j-1]!=0) return 1;
//          if (j+1<boardSize && f[i+1][j+1]!=0) return 1;
//         }
//         return 0;
//        },
//         w=new Array(0,20,17,15.4,14,10),
//         nPos=new Array(),
//         dirA=new Array(),


//         winningPos:function (i,j,mySq) {
//  test3=0;

//  L=1;
//  m=1; while (j+m<boardSize  && f[i][j+m]==mySq) {L++; m++} m1=m;
//  m=1; while (j-m>=0 && f[i][j-m]==mySq) {L++; m++} m2=m;   
//  if (L>4) { return winningMove; }
//  side1=(j+m1<boardSize && f[i][j+m1]==0);
//  side2=(j-m2>=0 && f[i][j-m2]==0);

//  if (L==4 && (side1 || side2)) test3++;
//  if (side1 && side2) {
//   if (L==4) return openFour;
//   if (L==3) test3++;
//  }

//  L=1;
//  m=1; while (i+m<boardSize  && f[i+m][j]==mySq) {L++; m++} m1=m;
//  m=1; while (i-m>=0 && f[i-m][j]==mySq) {L++; m++} m2=m;   
//  if (L>4) { return winningMove; }
//  side1=(i+m1<boardSize && f[i+m1][j]==0);
//  side2=(i-m2>=0 && f[i-m2][j]==0);
//  if (L==4 && (side1 || side2)) test3++;
//  if (side1 && side2) {
//   if (L==4) return openFour;
//   if (L==3) test3++;
//  }
//  if (test3==2) return twoThrees;

//  L=1;
//  m=1; while (i+m<boardSize && j+m<boardSize && f[i+m][j+m]==mySq) {L++; m++} m1=m;
//  m=1; while (i-m>=0 && j-m>=0 && f[i-m][j-m]==mySq) {L++; m++} m2=m;   
//  if (L>4) { return winningMove; }
//  side1=(i+m1<boardSize && j+m1<boardSize && f[i+m1][j+m1]==0);
//  side2=(i-m2>=0 && j-m2>=0 && f[i-m2][j-m2]==0);
//  if (L==4 && (side1 || side2)) test3++;
//  if (side1 && side2) {
//   if (L==4) return openFour;
//   if (L==3) test3++;
//  }
//  if (test3==2) return twoThrees;

//  L=1;
//  m=1; while (i+m<boardSize  && j-m>=0 && f[i+m][j-m]==mySq) {L++; m++} m1=m;
//  m=1; while (i-m>=0 && j+m<boardSize && f[i-m][j+m]==mySq) {L++; m++} m2=m; 
//  if (L>4) { return winningMove; }
//  side1=(i+m1<boardSize && j-m1>=0 && f[i+m1][j-m1]==0);
//  side2=(i-m2>=0 && j+m2<boardSize && f[i-m2][j+m2]==0);
//  if (L==4 && (side1 || side2)) test3++;
//  if (side1 && side2) {
//   if (L==4) return openFour;
//   if (L==3) test3++;
//  }
//  if (test3==2) return twoThrees;
//  return -1;
// },

//     evaluatePos:function(a,mySq) {
//     maxA=-1;
//     for (i=0;i<boardSize;i++) {
//      for (j=0;j<boardSize;j++) {
   
//       // Compute "value" a[i][j] of the (i,j) move
   
//       if (f[i][j]!=0) {a[i][j]=-1; continue;}  
//       if (hasNeighbors(i,j)==0) {a[i][j]=-1; continue;}
//       wp=winningPos(i,j,mySq);
//       if (wp==winningMove) {a[i][j]=winningMove; return winningMove;}
//       if (wp>=twoThrees)   {a[i][j]=wp; if (maxA<wp) maxA=wp; continue;}
   
//       minM=i-4; if (minM<0) minM=0;
//       minN=j-4; if (minN<0) minN=0;
//       maxM=i+5; if (maxM>boardSize) maxM=boardSize;
//       maxN=j+5; if (maxN>boardSize) maxN=boardSize;
   
//       nPos[1]=1; A1=0;
//       m=1; while (j+m<maxN  && f[i][j+m]!=-mySq) {nPos[1]++; A1+=w[m]*f[i][j+m]; m++}
//       if (j+m>=boardSize || f[i][j+m]==-mySq) A1-=(f[i][j+m-1]==mySq)?(w[5]*mySq):0;
//       m=1; while (j-m>=minN && f[i][j-m]!=-mySq) {nPos[1]++; A1+=w[m]*f[i][j-m]; m++}   
//       if (j-m<0 || f[i][j-m]==-mySq) A1-=(f[i][j-m+1]==mySq)?(w[5]*mySq):0;
   
//       nPos[2]=1; A2=0;
//       m=1; while (i+m<maxM  && f[i+m][j]!=-mySq) {nPos[2]++; A2+=w[m]*f[i+m][j]; m++}
//       if (i+m>=boardSize || f[i+m][j]==-mySq) A2-=(f[i+m-1][j]==mySq)?(w[5]*mySq):0;
//       m=1; while (i-m>=minM && f[i-m][j]!=-mySq) {nPos[2]++; A2+=w[m]*f[i-m][j]; m++}   
//       if (i-m<0 || f[i-m][j]==-mySq) A2-=(f[i-m+1][j]==mySq)?(w[5]*mySq):0;
   
//       nPos[3]=1; A3=0;
//       m=1; while (i+m<maxM  && j+m<maxN  && f[i+m][j+m]!=-mySq) {nPos[3]++; A3+=w[m]*f[i+m][j+m]; m++}
//       if (i+m>=boardSize || j+m>=boardSize || f[i+m][j+m]==-mySq) A3-=(f[i+m-1][j+m-1]==mySq)?(w[5]*mySq):0;
//       m=1; while (i-m>=minM && j-m>=minN && f[i-m][j-m]!=-mySq) {nPos[3]++; A3+=w[m]*f[i-m][j-m]; m++}   
//       if (i-m<0 || j-m<0 || f[i-m][j-m]==-mySq) A3-=(f[i-m+1][j-m+1]==mySq)?(w[5]*mySq):0;
   
//       nPos[4]=1; A4=0;
//       m=1; while (i+m<maxM  && j-m>=minN && f[i+m][j-m]!=-mySq) {nPos[4]++; A4+=w[m]*f[i+m][j-m]; m++;}
//       if (i+m>=boardSize || j-m<0 || f[i+m][j-m]==-mySq) A4-=(f[i+m-1][j-m+1]==mySq)?(w[5]*mySq):0;
//       m=1; while (i-m>=minM && j+m<maxN  && f[i-m][j+m]!=-mySq) {nPos[4]++; A4+=w[m]*f[i-m][j+m]; m++;} 
//       if (i-m<0 || j+m>=boardSize || f[i-m][j+m]==-mySq) A4-=(f[i-m+1][j+m-1]==mySq)?(w[5]*mySq):0;
   
//       dirA[1] = (nPos[1]>4) ? A1*A1 : 0;
//       dirA[2] = (nPos[2]>4) ? A2*A2 : 0;
//       dirA[3] = (nPos[3]>4) ? A3*A3 : 0;
//       dirA[4] = (nPos[4]>4) ? A4*A4 : 0;
   
//       A1=0; A2=0;
//       for (k=1;k<5;k++) {
//        if (dirA[k]>=A1) {A2=A1; A1=dirA[k]}
//       }
//       thisA=A1+A2;
   
//       a[i][j]=thisA;
//       if (thisA>maxA) {
//        maxA=thisA;
//       }
//      }
//     }
//     return maxA;
//    },
//     drawSquare:function(par1,par2,par3) {
    
//     setTimeout("writeBoard()",50);
//    },
   
   
//    buf='',
   
// //    writeBoard: function () {
// //     buf+='<html><head><title>Board</title>';
// //     if (navigator.appName=="Netscape") buf+='<base href="'+top.document.location+'">';
// //     buf+='</head><body bgcolor="#FFFFFF"><a name="s"></a><center><pre';
// //     for (i=0;i<boardSize;i++) {
// //      for (j=0;j<boardSize;j++) {
// //       buf+='\n><a href="#s" onClick="top.clk('+i+','+j+');if(top.ie4)this.blur();return false;" ><img name="s'+i+'_'+j+'" src="s'+f[i][j]+'.gif" width=16 height=16 border=0></a'; 
// //      }
// //      buf+='\n><img src="g.gif" width=1 height=16><br';
// //      if (buf.length>20000) {top.f1.document.writeln(buf); buf='';}
// //     }
// //     buf+='\n><img src="g.gif" width='+(boardSize*16+1)+' height=1></pre></center></body></html>';
// //     top.f1.document.writeln(buf);
// //     top.f1.document.close();
// //     buf='';
// //    },
   
//    resetGame:function () {
//     if (!top.f1.document) return;
//     for (i=0;i<20;i++) {
//      for (j=0;j<20;j++) {
//       f[i][j]=0;
//      }
//     }
//     if (document.images) {
//      if (!top.f1.document.s9_9) return;
//      for (i=0;i<boardSize;i++) {
//       for (j=0;j<boardSize;j++) {
//        eval('self.f1.document.s'+i+'_'+j+'.src=bImg.src');  
//       }
//      }
//     }
//     // else writeBoard();
//     myTurn=false;
//    },
   
//     init:function() {
//     // writeBoard();
//     resetGame();
//    },
//     start () {
//         for (i=0;i<20;i++) {
//             f[i]=new Array();
//             s[i]=new Array();
//             q[i]=new Array();
//             for (j=0;j<20;j++) {
//              f[i][j]=0;
//              s[i][j]=0;
//              q[i][j]=0;
//             }
//            };
           
//     },
//     Add:function(){
        
//     },
    
    
//      update (dt) {
        
//      },
// });
