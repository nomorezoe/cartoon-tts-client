window.__require=function e(i,t,s){function o(c,h){if(!t[c]){if(!i[c]){var a=c.split("/");if(a=a[a.length-1],!i[a]){var d="function"==typeof __require&&__require;if(!h&&d)return d(a,!0);if(n)return n(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var r=t[c]={exports:{}};i[c][0].call(r.exports,function(e){return o(i[c][1][e]||e)},r,r.exports,e,i,t,s)}return t[c].exports}for(var n="function"==typeof __require&&__require,c=0;c<s.length;c++)o(s[c]);return o}({Ballon:[function(e,i,t){"use strict";cc._RF.push(i,"27dc3v2SfVPAalyVvDSGo57","Ballon");var s=e("SwitchWidget");cc.Class({extends:cc.Component,properties:{whiteBG:cc.Node,pinkBG:cc.Node,text:cc.Label,switchwidget:s},onLoad:function(){this.node.on("mobileView",this.mobileView.bind(this)),this.node.on("pcView",this.pcView.bind(this))},lateUpdate:function(){this.updateTextHeight>0&&(this.updateTextHeight--,this.node.height=this.bg.height=Math.max(55,this.text.node.height+20))},init:function(e,i){i?(this.text.node.color=new cc.Color("#63697B"),this.pinkBG.active=!1,this.whiteBG.active=!0,this.bg=this.whiteBG):(this.whiteBG.active=!1,this.pinkBG.active=!0,this.bg=this.pinkBG),this.isFurwee=i,this.text.string=e,this.updateTextHeight=2,this.switchwidget&&!this.switchwidget.isPcView&&this.mobileView(this.switchwidget.fw)},step:function(){this.isFurwee?this.node.x-=20:this.node.x+=20,this.node.opacity-=50,this.node.opacity<=0&&this.node.parent.removeChild(this.node)},mobileView:function(e){this.text.fontSize=20,this.text.lineHeight=22,this.text.string=this.text.string,this.pinkBG.width=Math.max(230,e-200),this.whiteBG.width=Math.max(230,e-200),this.text.node.width=Math.max(190,this.pinkBG.width-40),this.updateTextHeight=2},pcView:function(){this.text.fontSize=12,this.text.lineHeight=15,this.text.string=this.text.string,this.pinkBG.width=230,this.whiteBG.width=230,this.text.node.width=190,this.updateTextHeight=2}}),cc._RF.pop()},{SwitchWidget:"SwitchWidget"}],BodyAnim:[function(e,i,t){"use strict";cc._RF.push(i,"abd878imktJxIlt0O/9SFux","BodyAnim");cc.Class({extends:cc.Component,properties:{anim:cc.Animation},start:function(){},playIntro:function(){this.anim.play("intro_body")},introComplete:function(){this.anim.play("body")},play:function(){this.anim.play("body")}});cc._RF.pop()},{}],BottomUI:[function(e,i,t){"use strict";cc._RF.push(i,"63b8clIK81DBaScsOTdZl/J","BottomUI");var s=e("SwitchWidget");cc.Class({extends:cc.Component,properties:{switchwidget:s,musicWidget:cc.Widget,sendButton:cc.Node,musicButton:cc.Node,inputWidget:cc.Widget,mobileViews:[cc.Node],pcViews:[cc.Node],editBox:cc.EditBox,mobileEditBG:cc.Node,mobileSmile:cc.Node,pop:cc.Node,mobileFirst:cc.Node,isFirst:!0},start:function(){this.node.on("mobileView",this.mobileView.bind(this)),this.node.on("pcView",this.pcView.bind(this)),this.switchwidget&&!this.switchwidget.isPcView&&this.mobileView(this.switchwidget.fw)},mobileView:function(e){for(var i=0;i<this.mobileViews.length;i++)this.mobileViews[i].active=!0;for(var t=0;t<this.pcViews.length;t++)this.pcViews[t].active=!1;this.musicWidget.bottom=70,this.musicWidget.left=-5,this.musicWidget.updateAlignment(),this.inputWidget.bottom=35.5,this.inputWidget.updateAlignment(),this.musicButton.scale=.6,this.musicButton.x=20,this.sendButton.scale=.5,this.setMobileView(e),this.isFirst&&(this.isFirst=!1,this.popMovileFirst())},setMobileView:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;this.editBox.textLabel.fontSize=20,this.editBox.placeholderLabel.fontSize=20,this.editBox.node.width=Math.min(420,e-60-20-i-36),this.mobileEditBG.width=this.editBox.node.width+60;var t=this.editBox.node.width+60+i+36;this.mobileEditBG.x=this.editBox.node.x=-t/2+this.editBox.node.width/2+30,this.mobileSmile.x=this.mobileEditBG.x+this.mobileEditBG.width/2-20,this.sendButton.x=this.editBox.node.x+this.editBox.node.width/2+30+i+18},pcView:function(){for(var e=0;e<this.mobileViews.length;e++)this.mobileViews[e].active=!1;for(var i=0;i<this.pcViews.length;i++)this.pcViews[i].active=!0;this.editBox.textLabel.fontSize=17,this.editBox.placeholderLabel.fontSize=17,this.musicWidget.bottom=46,this.musicWidget.left=62,this.musicWidget.updateAlignment(),this.inputWidget.bottom=83,this.inputWidget.updateAlignment(),this.musicButton.scale=1,this.musicButton.x=0,this.sendButton.scale=1,this.sendButton.x=334,this.editBox.node.width=420,this.editBox.node.x=0,this.isFirst&&(this.isFirst=!1)},popupComingSoon:function(){this.pop.active=!0},closeComingSoon:function(){this.pop.active=!1},popMovileFirst:function(){this.mobileFirst.active=!0;var e=this.mobileEditBG.width;this.mobileEditBG.width=360,this.editBox.node.width=300,this.editBox.node.x+=(e-this.mobileEditBG.width)/2,this.mobileFirst.x=180,this.mobileSmile.x=this.mobileEditBG.x-this.mobileEditBG.width/2+20},closeMobileFirst:function(){this.mobileFirst.active&&(this.mobileFirst.active=!1,this.setMobileView(this.switchwidget.fw))}}),cc._RF.pop()},{SwitchWidget:"SwitchWidget"}],CamAdjust:[function(e,i,t){"use strict";cc._RF.push(i,"5d400oTV05Ld4Jsmmrztiwt","CamAdjust");cc.Class({extends:cc.Component,properties:{cameras:[cc.Camera],isKeyA:!1,isKeyD:!1,isKeyW:!1,isKeyS:!1,isKeyO:!1,isKeyP:!1,isK:!1,isL:!1,isM:!1,isN:!1},statics:{},onLoad:function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},onDestroy:function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},update:function(){if(this.isKeyA)for(var e=0;e<this.cameras.length;e++)this.cameras[e].node.z+=1;if(this.isKeyD)for(var i=0;i<this.cameras.length;i++)this.cameras[i].node.z-=1;if(this.isKeyW)for(var t=0;t<this.cameras.length;t++)this.cameras[t].node.y+=1;if(this.isKeyS)for(var s=0;s<this.cameras.length;s++)this.cameras[s].node.y-=1;if(this.isM)for(var o=0;o<this.cameras.length;o++)this.cameras[o].node.x+=1;if(this.isN)for(var n=0;n<this.cameras.length;n++)this.cameras[n].node.x-=1;if(this.isKeyO)for(var c=0;c<this.cameras.length;c++)this.cameras[c].node.rotationX+=.1;if(this.isKeyP)for(var h=0;h<this.cameras.length;h++)this.cameras[h].node.rotationX-=.1;if(this.isK)for(var a=0;a<this.cameras.length;a++)this.cameras[a].fov+=.1;if(this.isL)for(var d=0;d<this.cameras.length;d++)this.cameras[d].fov-=.1},onKeyDown:function(e){switch(e.keyCode){case cc.macro.KEY.a:this.isKeyA=!0;break;case cc.macro.KEY.d:this.isKeyD=!0;break;case cc.macro.KEY.w:this.isKeyW=!0;break;case cc.macro.KEY.s:this.isKeyS=!0;break;case cc.macro.KEY.o:this.isKeyO=!0;break;case cc.macro.KEY.p:this.isKeyP=!0;break;case cc.macro.KEY.k:this.isK=!0;break;case cc.macro.KEY.l:this.isL=!0;break;case cc.macro.KEY.m:this.isM=!0;break;case cc.macro.KEY.n:this.isN=!0}},onKeyUp:function(e){switch(e.keyCode){case cc.macro.KEY.a:this.isKeyA=!1;break;case cc.macro.KEY.d:this.isKeyD=!1;break;case cc.macro.KEY.w:this.isKeyW=!1;break;case cc.macro.KEY.s:this.isKeyS=!1;break;case cc.macro.KEY.o:this.isKeyO=!1;break;case cc.macro.KEY.p:this.isKeyP=!1;break;case cc.macro.KEY.k:this.isK=!1;break;case cc.macro.KEY.l:this.isL=!1;break;case cc.macro.KEY.u:console.log(this.cameras[0].node.position,this.cameras[0].node.rotationX,this.cameras[0].fov);break;case cc.macro.KEY.m:this.isM=!1;break;case cc.macro.KEY.n:this.isN=!1}}});cc._RF.pop()},{}],CamMove:[function(e,i,t){"use strict";cc._RF.push(i,"2cd67RFoK5K1bWUfo3GU/9x","CamMove");var s=e("Game");cc.Class({extends:cc.Component,properties:{cameras:[cc.Camera],sceneNodes:[cc.Node],infos:null,vx:0,vy:0,ax:.5,maxV:1,rotRangeX:10,rotRangeY:10,screenWidth:0,screenHeight:0,designResolutionHeight:0,designResolutionHeight_2:0,game:s},onLoad:function(){this.screenWidth=cc.view.getDesignResolutionSize().height/cc.view.getCanvasSize().height*cc.view.getCanvasSize().width,this.screenHeight=cc.view.getDesignResolutionSize().width/cc.view.getCanvasSize().width*cc.view.getCanvasSize().height,this.designResolutionHeight=cc.view.getDesignResolutionSize().height,this.designResolutionHeight_2=cc.view.getDesignResolutionSize().height/2,this.infos=[];for(var e=0;e<this.sceneNodes.length;e++){var i={x:this.sceneNodes[e].eulerAngles.x,y:this.sceneNodes[e].eulerAngles.y};this.infos.push(i)}this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouseMove,this)},onDestroy:function(){this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouseMove,this)},onTouchMove:function(e){},onMouseMove:function(e){if(this.game.furweeIntialized)for(var i=(this.screenWidth/2-e._x)/(this.screenWidth/2)*this.rotRangeY,t=(this.screenHeight/2-e._y)/(this.screenHeight/2)*this.rotRangeX,s=this.sceneNodes[0].eulerAngles.x,o=this.sceneNodes[0].eulerAngles.y,n=Math.abs(i-o)/this.rotRangeY,c=Math.abs(t-s)/this.rotRangeX,h=0;h<this.sceneNodes.length;h++){var a=cc.rotate3DTo(Math.max(c,n),cc.v3(t+this.infos[h].x,i+this.infos[h].y,0));this.sceneNodes[h].stopAllActions(),this.sceneNodes[h].runAction(a)}}});cc._RF.pop()},{Game:"Game"}],Eye:[function(e,i,t){"use strict";cc._RF.push(i,"40ee8VmmVRIVoMRa4vSDXGF","Eye"),cc.Class({extends:cc.Component,properties:{stage:cc.Node,eye:cc.Node,isLeft:cc.Boolean},onLoad:function(){this.randX=8,this.randY=1.5},touchMoveHandler:function(e){},mouseMoveHandler:function(e){var i=this.stage.convertToWorldSpaceAR(cc.v2(e.getLocationX(),e.getLocationY()));i=cc.v2(e.getLocationX(),e.getLocationY());var t=this.node.convertToNodeSpaceAR(i),s=0,o=0,n=0,c=0;if(0!=t.x&&0!=t.y){var h=Math.pow(t.x,2)*Math.pow(t.y,2)/(Math.pow(t.x,2)+Math.pow(t.y,2));if(h>Math.pow(150,2))n=0,c=0;else{var a=Math.min(Math.pow(h,.5)/40,1);this.isLeft?t.x-=40*a:t.x+=40*a,t.x<0?t.x=Math.max(t.x,-8):t.x=Math.min(t.x,8),t.y<0?t.y=Math.max(t.y,-2.5):t.y=Math.min(t.y,2.5);var d=Math.pow(t.x,2)*Math.pow(t.y,2)/(Math.pow(t.x,2)+Math.pow(t.y,2));s=Math.pow(d,.5),o=t.y/s,n=s*(t.x/s),c=s*o}}this.eye.setPosition(n,c)}}),cc._RF.pop()},{}],FitWidget:[function(e,i,t){"use strict";cc._RF.push(i,"dae25grE5tFZotKCIT3gXqz","FitWidget");var s=e("Helper").Helper;cc.Class({extends:cc.Component,properties:{minWidth:-1,minHeight:-1,fitHeight:640},onLoad:function(){s.addCallback(this.onResize.bind(this)),this.canvas=this.node.parent.getComponent(cc.Canvas),this.onResize()},onResize:function(){if(this.node){var e=cc.view.getFrameSize(),i=this.fitHeight/e.height*e.width;i<this.minWidth&&(this.node.scale=i/this.minWidth)}}}),cc._RF.pop()},{Helper:"Helper"}],Game:[function(e,i,t){"use strict";cc._RF.push(i,"aa6b4oHh3RETr68323Kl57q","Game");var s=e("MusicToggle"),o=e("BodyAnim"),n=e("UIManager"),c=e("LayerCamerasMove");cc.Class({extends:cc.Component,properties:{audioID:-1,mouthNode:cc.Node,mouthIsReset:!0,historyObjects:[],balloonPrefab:cc.Prefab,balloonNode:cc.Node,introSound:{type:cc.AudioClip,default:null},idleMouthTimeout:-1,bodyAnim:o,headAnim:cc.Animation,initialMsgJSON:null,introCameras:[cc.Camera],furweeIntialized:!1,URL:"http://40.121.137.102",URL_SUFFIX:"",enableTextInput:!1,uiManager:n,cameraMove:c,music:s,editBox:cc.EditBox,sendButton:cc.Node},start:function(){},onLoad:function(){this.uiManager.game=this,this.cameraMove.game=this;var e=!1;-1==window.location.href.indexOf("localhost")&&-1==window.location.href.indexOf("127.0.0.1")||(e=!0),-1!=window.location.href.indexOf("furwee")&&(this.URL="http://furwee.ai",this.URL_SUFFIX="furwee.json"),console.log("isLocalHost",e),this.setEnableTextInput(!1),this.onTextLenChange(this.editBox.string),this.startFurwee()},handleConnect:function(){console.log("connected",this.socket.id)},startFurwee_backup:function(){this.addBallon("Hi, my name is Furwee. What's your name?",!0),this.audioInfo=[{audio_offset_ms:50,viseme_id:0},{audio_offset_ms:100,viseme_id:12},{audio_offset_ms:237.5,viseme_id:11},{audio_offset_ms:475,viseme_id:0},{audio_offset_ms:650,viseme_id:21},{audio_offset_ms:687.5,viseme_id:11},{audio_offset_ms:762.5,viseme_id:19},{audio_offset_ms:850,viseme_id:4},{audio_offset_ms:893.75,viseme_id:6},{audio_offset_ms:937.5,viseme_id:21},{audio_offset_ms:1e3,viseme_id:6},{audio_offset_ms:1062.5,viseme_id:15},{audio_offset_ms:1150,viseme_id:18},{audio_offset_ms:1212.5,viseme_id:5},{audio_offset_ms:1287.5,viseme_id:13},{audio_offset_ms:1350,viseme_id:7},{audio_offset_ms:1400,viseme_id:6},{audio_offset_ms:1662,viseme_id:0},{audio_offset_ms:2425,viseme_id:0},{audio_offset_ms:2475,viseme_id:7},{audio_offset_ms:2575,viseme_id:1},{audio_offset_ms:2637.5,viseme_id:19},{audio_offset_ms:2687.5,viseme_id:15},{audio_offset_ms:2737.5,viseme_id:6},{audio_offset_ms:2787.5,viseme_id:3},{audio_offset_ms:2825,viseme_id:13},{audio_offset_ms:2862.5,viseme_id:19},{audio_offset_ms:2925,viseme_id:4},{audio_offset_ms:3025,viseme_id:6},{audio_offset_ms:3125,viseme_id:21},{audio_offset_ms:3300,viseme_id:0}],this.audioID=cc.audioEngine.play(this.introSound),this.audioOffset=0,this.updateMouth(),this.bodyAnim.playIntro(),this.headAnim.play(),cc.audioEngine.setFinishCallback(this.audioID,function(){this.audioID=-1,this.mouthIsReset=!1}.bind(this))},startFurwee:function(){this.headAnim.play(),this.bodyAnim.play();var e=this,i=new XMLHttpRequest,t=this.URL+"/initial-message/"+this.URL_SUFFIX;i.onreadystatechange=function(){if(i.readyState==XMLHttpRequest.DONE&&200==i.status&&(e.initialMsgJSON=JSON.parse(i.responseText),!e.tryToStartFurweeIntro())){var t=e.initialMsgJSON.audio_file_link;cc.loader.load({url:t,type:"wav"})}},i.open("GET",t,!0),i.setRequestHeader("Content-type","application/json"),i.send("")},tryToStartFurweeIntro:function(){return!this.uiManager.isBlockActive()&&(!!this.initialMsgJSON&&(!this.furweeIntialized&&(this.furweeIntialized=!0,this.setEnableTextInput(!0),this.onTTSCompleted(this.initialMsgJSON,function(){this.addBallon(this.initialMsgJSON.reply,!0),this.bodyAnim.playIntro()}.bind(this)),this.historyObjects.push({index:this.historyObjects.length,reply:this.initialMsgJSON.reply,message:this.initialMsgJSON.message}),!0)))},onTTSCompleted:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e){this.audioInfo=e.lip_sync_animation;var t=e.audio_file_link;cc.loader.load({url:t,type:"wav"},function(e,t){this.audioID=cc.audioEngine.play(t),this.audioOffset=0,this.stopIdleMouth(),this.updateMouth(),i&&i(),cc.audioEngine.setFinishCallback(this.audioID,function(){this.audioID=-1,this.mouthIsReset=!1}.bind(this))}.bind(this))}},didReturnHandler:function(){this.sendHandler(),setTimeout(function(){this.editBox.focus()}.bind(this),0)},sendHandler:function(){if(this.enableTextInput){var e=this.editBox.string;if(0!=e.trim().length){this.setEnableTextInput(!1),this.addBallon(e,!1),this.editBox.string="",this.editBox.focus(),this.onTextLenChange(this.editBox.string);var i=this,t=new XMLHttpRequest,s=this.URL+"/messages/"+this.URL_SUFFIX;t.onreadystatechange=function(){if(t.readyState==XMLHttpRequest.DONE&&200==t.status){var e=JSON.parse(t.responseText);i.setEnableTextInput(!0),i.onTTSCompleted(e),i.historyObjects.push({index:i.historyObjects.length,reply:e.reply,message:e.message}),i.addBallon(e.reply,!0)}};var o=JSON.stringify({message:e,history:this.historyObjects});t.open("POST",s,!0),t.setRequestHeader("Content-type","application/json"),t.send(o);var n=new XMLHttpRequest,c=this.URL+"/emotion/"+this.URL_SUFFIX;n.onreadystatechange=function(){n.readyState==XMLHttpRequest.DONE&&200==n.status&&console.log(n.responseText)};var h=JSON.stringify({message:e});n.open("POST",c,!0),n.setRequestHeader("Content-type","application/json"),n.send(h)}}},updateMouth:function(){var e=this.audioInfo[this.audioOffset].viseme_id,i=this.mouthNode.getChildByName("mouth_"+e);i&&(this.clearMouth(),i.active=!0)},update:function(e){if(-1!=this.audioID)for(var i=cc.audioEngine.getCurrentTime(this.audioID);this.audioInfo.length>this.audioOffset&&this.audioInfo[this.audioOffset].audio_offset_ms<1e3*i+15;)this.updateMouth(),this.audioOffset+=1;else this.mouthIsReset||(this.mouthIsReset=!0,this.clearMouth(),this.mouthNode.getChildByName("mouth_0").active=!0,this.startIdleMouth())},onTextLenChange:function(e){this.sendButton.active=0!=e.length},addBallon:function(e,i){for(var t=0;t<this.balloonNode.children.length;++t)this.balloonNode.children[t].getComponent("Ballon").step();var s=cc.instantiate(this.balloonPrefab);s.getComponent("Ballon").init(e,i),this.balloonNode.addChild(s)},blockClickHandler:function(){this.music.initialize(),this.introCameraAnim()},introCameraAnim:function(){for(var e=0;e<this.introCameras.length;e++)this.introCameras[e].getComponent(cc.Animation).play();setTimeout(this.tryToStartFurweeIntro.bind(this),2e3)},clearMouth:function(){for(var e=0;e<=21;e++){this.mouthNode.getChildByName("mouth_"+e).active=!1}for(var i=0;i<2;i++){this.mouthNode.getChildByName("idle_"+i).active=!1}},startIdleMouth:function(){this.setIdleMouth()},setIdleMouth:function(){clearTimeout(this.idleMouthTimeout),this.idleMouthTimeout=-1,this.clearMouth();var e=Math.floor(2*Math.random());this.mouthNode.getChildByName("idle_"+e).active=!0,setTimeout(this.setIdleMouth.bind(this),3e3*Math.random()+3e3)},stopIdleMouth:function(){clearTimeout(this.idleMouthTimeout),this.idleMouthTimeout=-1},errorClickHandler:function(){window.captureError&&window.captureError()},setEnableTextInput:function(e){this.editBox.enabled=this.enableTextInput=e},logout:function(){var e=new XMLHttpRequest;e.open("POST",this.URL+"/logout",!0),e.send()}});cc._RF.pop()},{BodyAnim:"BodyAnim",LayerCamerasMove:"LayerCamerasMove",MusicToggle:"MusicToggle",UIManager:"UIManager"}],HUI:[function(e,i,t){"use strict";cc._RF.push(i,"16778DqrPJB4oJ6YF7w5oba","HUI");var s=e("UIBase");cc.Class({extends:s});cc._RF.pop()},{UIBase:"UIBase"}],Helper:[function(e,i,t){"use strict";cc._RF.push(i,"94704p/KtNCs7j4+H/GbHK6","Helper"),Object.defineProperty(t,"__esModule",{value:!0}),t.Helper=void 0;var s={};t.Helper=s,s.callBacks=[],s.initialized=!1,s.initialize=function(){s.initialized||(s.initialized=!0,cc.view.setResizeCallback(s.handleResize))},s.handleResize=function(){for(var e=0;e<s.callBacks.length;e++)s.callBacks[e]()},s.addCallback=function(e){s.initialize(),s.callBacks.push(e)},s.removeCallback=function(e){var i=s.callBacks.indexOf(e);-1!=i&&s.splice(i,1)},cc._RF.pop()},{}],LayerCamerasMove:[function(e,i,t){"use strict";cc._RF.push(i,"f6c90/o6l5A75tCu2UdbNIr","LayerCamerasMove");cc.Class({extends:cc.Component,properties:{sceneNodes:[cc.Node],infos:null,vx:0,vy:0,ax:.5,maxV:1,rotRangeX:10,rotRangeY:10,screenWidth:0,screenHeight:0,designResolutionHeight:0,designResolutionHeight_2:0,game:null,debugNode:cc.Label},onLoad:function(){this.screenWidth=cc.view.getDesignResolutionSize().height/cc.view.getCanvasSize().height*cc.view.getCanvasSize().width,this.screenHeight=cc.view.getDesignResolutionSize().width/cc.view.getCanvasSize().width*cc.view.getCanvasSize().height,this.designResolutionHeight=cc.view.getDesignResolutionSize().height,this.designResolutionHeight_2=cc.view.getDesignResolutionSize().height/2,this.infos=[];for(var e=0;e<this.sceneNodes.length;e++){var i={x:this.sceneNodes[e].x,y:this.sceneNodes[e].y,z:this.sceneNodes[e].z};this.infos.push(i)}this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouseMove,this)},onDestroy:function(){this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouseMove,this)},initialize:function(){console.log(window.DeviceMotionEvent),window.DeviceMotionEvent&&"function"==typeof window.DeviceMotionEvent.requestPermission&&(this.debugNode.string+="requestPermission!\n",window.DeviceMotionEvent.requestPermission()),this.debugNode.string+="requestPermission_!\n",window.addEventListener("deviceorientation",this.onDeviceorientation.bind(this))},onTouchMove:function(e){},onDeviceMotion:function(e){this.debugNode.string+="onDeviceMotion!"+e+"\n"},onDeviceorientation:function(e){this.debugNode.string="onDeviceMove!"+e.gamma;for(var i=0;i<this.sceneNodes.length;i++){var t=this.infos[i].x+e.gamma/90*this.rotRangeX*this.infos[i].z/10,s=(this.sceneNodes[0].x,cc.moveTo(1,cc.v3(t,this.infos[i].y,this.infos[i].z)));this.sceneNodes[i].stopAllActions(),this.sceneNodes[i].runAction(s)}},onMouseMove:function(e){if(this.game.furweeIntialized){this.debugNode.string+="string\n";for(var i=0;i<this.sceneNodes.length;i++){var t=(this.screenWidth/2-e._x)/(this.screenWidth/2)*this.rotRangeY*(this.infos[i].z/10),s=(this.screenHeight/2-e._y)/(this.screenHeight/2)*this.rotRangeX*(this.infos[i].z/10),o=this.sceneNodes[0].x,n=this.sceneNodes[0].y,c=Math.abs(s-n)/this.rotRangeY/2,h=Math.abs(t-o)/this.rotRangeX/2,a=cc.moveTo(Math.max(h,c),cc.v3(t+this.infos[i].x,this.infos[i].y,this.infos[i].z));console.log("i",t+this.infos[i].x,s+this.infos[i].y,this.infos[i].z),this.sceneNodes[i].stopAllActions(),this.sceneNodes[i].runAction(a)}}},toggleDebug:function(){this.debugNode.node.active=!this.debugNode.node.acctive}});cc._RF.pop()},{}],Loading:[function(e,i,t){"use strict";cc._RF.push(i,"61f1fNOFbZKPoN7duuM93VT","Loading"),cc.Class({extends:cc.Component,properties:{progressBar:cc.ProgressBar},onLoad:function(){cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT),cc.director.preloadScene("game_v1",this.onProgress.bind(this),this.onComplete.bind(this))},onProgress:function(e,i){this.progressBar.progress=e/i},onComplete:function(e){e||cc.director.loadScene("game_v1")}}),cc._RF.pop()},{}],MusicToggle:[function(e,i,t){"use strict";cc._RF.push(i,"9bcd51KbVdE37cQ27yYx/FP","MusicToggle");cc.Class({extends:cc.Component,properties:{onNode:cc.Node,offNode:cc.Node,hintNode:cc.Node,hintText:cc.Label,audioId:null,music:{type:cc.AudioClip,default:null},anim:cc.Animation,bgVolumn:.8,bgSlider:cc.Slider,bgProgress:cc.ProgressBar,offTimer:-1},initialize:function(){this.isMusicOn=cc.sys.localStorage.getItem("music"),null==this.isMusicOn&&(this.isMusicOn=!0),this.isMusicOn?this.toggleOn():this.toggleOff(),this.bgSlider.node.on("slide",this.sliderAdjust.bind(this)),this.bgSlider.node.on(cc.Node.EventType.TOUCH_CANCEL,this.volumnCancelled,this),this.bgSlider._N$handle.node.on(cc.Node.EventType.TOUCH_END,this.volumnCancelled,this)},toggleOver:function(){this.hintNode.active=!0},toggleOut:function(){this.hintNode.active=!1},toggleOff:function(){clearTimeout(this.offTimer),this.offTimer=-1,this.onNode.active=!0,this.offNode.active=!1,this.hintText.string="Turn Volumn On",this.bgSlider.node.active=!1,null!=this.audioId&&cc.audioEngine.pauseMusic()},toggleOn:function(){this.offNode.active=!0,this.onNode.active=!1,this.hintText.string="Turn Volumn Off",this.bgSlider.node.active=!0,this.audioId?cc.audioEngine.resumeMusic():this.audioId=cc.audioEngine.playMusic(this.music,!0,this.bgVolumn),0==this.bgVolumn&&(this.bgProgress.progress=this.bgSlider.progress=this.bgVolumn=.8,cc.audioEngine.setMusicVolume(this.bgVolumn))},sliderAdjust:function(e){clearTimeout(this.offTimer),this.bgProgress.progress=e.progress,this.bgVolumn=e.progress,cc.audioEngine.setMusicVolume(this.bgVolumn)},volumnCancelled:function(){var e=this;clearTimeout(this.offTimer),0==this.bgVolumn&&(this.offTimer=setTimeout(function(){e.checkVolumnToggle()},1e3))},checkVolumnToggle:function(){clearTimeout(this.offTimer),0==this.bgVolumn&&this.toggleOff()}});cc._RF.pop()},{}],SwitchWidget:[function(e,i,t){"use strict";cc._RF.push(i,"810a964NXJI1a/vpIIcE9+o","SwitchWidget");var s=e("Helper").Helper;cc.Class({extends:cc.Component,properties:{minWidth:-1,minHeight:-1,fitHeight:640,isPcView:!0,fw:-1},onLoad:function(){s.addCallback(this.onResize.bind(this)),this.canvas=this.node.parent.getComponent(cc.Canvas),this.onResize()},onDestroy:function(){s.removeCallback(this.onResize.bind(this))},onResize:function(){if(this.node){var e=cc.view.getFrameSize(),i=this.fitHeight/e.height*e.width;this.fw=i,console.log("W",i),i<this.minWidth?(this.node.emit("mobileView",i),this.isPcView=!1):(this.node.emit("pcView",i),this.isPcView=!0)}}});cc._RF.pop()},{Helper:"Helper"}],UIBase:[function(e,i,t){"use strict";cc._RF.push(i,"066b2YxUHZOrrYhIhIt1Sbl","UIBase");e("Game"),cc.Class({extends:cc.Component,properties:{sendButton:cc.Node,text:cc.EditBox}});cc._RF.pop()},{Game:"Game"}],UIManager:[function(e,i,t){"use strict";cc._RF.push(i,"81c2cAkUfVFLZ3AlfpdgkhZ","UIManager");var s=e("SwitchWidget"),o=e("LayerCamerasMove");cc.Class({extends:cc.Component,properties:{isHActive:!0,hNode:cc.Node,vNOde:cc.Node,uiCamera:cc.Camera,musicWidget:cc.Widget,musicButton:cc.Node,startBlock:cc.Node,switchwidget:s,game:null,cameraMove:o},onLoad:function(){this.startBlock.active=!0,this.node.on("mobileView",this.mobileView.bind(this)),this.node.on("pcView",this.pcView.bind(this)),this.switchwidget&&!this.switchwidget.isPcView&&this.mobileView(this.switchwidget.fw)},mobileView:function(){this.isHActive=!1,this.hNode.active=!1,this.vNOde.active=!0,this.musicWidget.bottom=70,this.musicWidget.left=-5,this.musicButton.scale=.6,this.musicButton.x=20;var e=this.node.getComponentsInChildren(cc.Widget);for(var i in e)e[i].updateAlignment();this.vNOde.getComponent("UIBase").sendButton.active=this.game.sendButton.active,this.vNOde.getComponent("UIBase").text.string=this.game.editBox.string,this.game.sendButton=this.vNOde.getComponent("UIBase").sendButton,this.game.editBox=this.vNOde.getComponent("UIBase").text},pcView:function(){this.isHActive=!0,this.hNode.active=!0,this.vNOde.active=!1,this.musicWidget.bottom=46,this.musicWidget.left=62,this.musicWidget.updateAlignment(),this.musicButton.scale=1,this.musicButton.x=0;var e=this.node.getComponentsInChildren(cc.Widget);for(var i in e)e[i].updateAlignment();this.hNode.getComponent("UIBase").sendButton.active=this.game.sendButton.active,this.hNode.getComponent("UIBase").text.string=this.game.editBox.string,this.game.sendButton=this.hNode.getComponent("UIBase").sendButton,this.game.editBox=this.hNode.getComponent("UIBase").text},closeStartBlock:function(){this.startBlock.active=!1,this.cameraMove.initialize(),this.game.blockClickHandler()},isBlockActive:function(){return this.startBlock.active}});cc._RF.pop()},{LayerCamerasMove:"LayerCamerasMove",SwitchWidget:"SwitchWidget"}],VUI:[function(e,i,t){"use strict";cc._RF.push(i,"85f69BVlF9A2K/EpgWMGvqv","VUI");var s=e("UIBase");cc.Class({extends:s,properties:{pop:cc.Node},popupComingSoon:function(){this.pop.active=!0},closeComingSoon:function(){this.pop.active=!1}});cc._RF.pop()},{UIBase:"UIBase"}]},{},["Ballon","BodyAnim","BottomUI","CamAdjust","CamMove","Eye","Game","MusicToggle","Loading","FitWidget","Helper","SwitchWidget","HUI","LayerCamerasMove","UIBase","UIManager","VUI"]);
//# sourceMappingURL=project.js.map
