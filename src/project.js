window.__require=function e(t,i,o){function s(c,a){if(!i[c]){if(!t[c]){var h=c.split("/");if(h=h[h.length-1],!t[h]){var d="function"==typeof __require&&__require;if(!a&&d)return d(h,!0);if(n)return n(h,!0);throw new Error("Cannot find module '"+c+"'")}c=h}var r=i[c]={exports:{}};t[c][0].call(r.exports,function(e){return s(t[c][1][e]||e)},r,r.exports,e,t,i,o)}return i[c].exports}for(var n="function"==typeof __require&&__require,c=0;c<o.length;c++)s(o[c]);return s}({Ballon:[function(e,t,i){"use strict";cc._RF.push(t,"27dc3v2SfVPAalyVvDSGo57","Ballon");var o=e("Helper").Helper,s=e("UIManager"),n=cc.Class({extends:cc.Component,properties:{whiteBG:cc.Node,pinkBG:cc.Node,text:cc.Label,stepCount:0},statics:{COLOR_1:new cc.Color(131,88,52),COLOR_2:new cc.Color(255,255,255),index:0},onLoad:function(){this.node.on("mobileView",this.mobileView.bind(this)),this.node.on("pcView",this.pcView.bind(this)),this.index=n.index,n.index++},lateUpdate:function(){this.updateTextHeight>0&&(this.updateTextHeight--,this.node.height=this.bg.height=Math.max(55,this.text.node.height+20),4==this.updateTextHeight&&(this.updateTextHeight=0,this.node.parent.parent.parent.getComponent(cc.ScrollView).scrollToBottom(0),this.node.opacity=255,s.instance.onScroll(null)))},init:function(e,t){t?(this.text.node.color=n.COLOR_1,this.pinkBG.active=!1,this.whiteBG.active=!0,this.bg=this.whiteBG):(this.whiteBG.active=!1,this.pinkBG.active=!0,this.bg=this.pinkBG),this.isFurwee=t,this.text.string=e,this.updateTextHeight=6,o.isPcView||this.mobileView(o.width)},step:function(){this.stepCount++,this.node.opacity},mobileView:function(e){this.text.fontSize=20,this.text.lineHeight=24,this.text.string=this.text.string,this.node.x=0,this.pinkBG.width=357,this.whiteBG.width=357,this.text.node.width=Math.max(190,this.pinkBG.width-40),this.updateTextHeight=Math.max(this.updateTextHeight,2)},pcView:function(){this.text.fontSize=20,this.text.lineHeight=28,this.text.string=this.text.string,this.pinkBG.width=427,this.whiteBG.width=427,this.text.node.width=343,this.updateTextHeight=Math.max(this.updateTextHeight,2)},updateOpacity:function(){var e=this.node.parent,t=this.node.y=e.y;t>0&&t<500&&(this.node.active=!0)}});cc._RF.pop()},{Helper:"Helper",UIManager:"UIManager"}],BodyAnim:[function(e,t,i){"use strict";cc._RF.push(t,"abd878imktJxIlt0O/9SFux","BodyAnim");cc.Class({extends:cc.Component,properties:{anim:cc.Animation},start:function(){},playIntro:function(){this.anim.play("intro_body")},introComplete:function(){this.anim.play("body")},play:function(){this.anim.play("body")}});cc._RF.pop()},{}],BottomUI:[function(e,t,i){"use strict";cc._RF.push(t,"63b8clIK81DBaScsOTdZl/J","BottomUI");var o=e("Helper").Helper;cc.Class({extends:cc.Component,properties:{musicWidget:cc.Widget,sendButton:cc.Node,musicButton:cc.Node,inputWidget:cc.Widget,mobileViews:[cc.Node],pcViews:[cc.Node],editBox:cc.EditBox,mobileEditBG:cc.Node,mobileSmile:cc.Node,pop:cc.Node,mobileFirst:cc.Node,isFirst:!0},start:function(){this.node.on("mobileView",this.mobileView.bind(this)),this.node.on("pcView",this.pcView.bind(this)),o.isPcView||this.mobileView(o.width)},mobileView:function(e){for(var t=0;t<this.mobileViews.length;t++)this.mobileViews[t].active=!0;for(var i=0;i<this.pcViews.length;i++)this.pcViews[i].active=!1;this.musicWidget.bottom=70,this.musicWidget.left=-5,this.musicWidget.updateAlignment(),this.inputWidget.bottom=35.5,this.inputWidget.updateAlignment(),this.musicButton.scale=.6,this.musicButton.x=20,this.sendButton.scale=.5,this.setMobileView(e),this.isFirst&&(this.isFirst=!1,this.popMovileFirst())},setMobileView:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;this.editBox.textLabel.fontSize=20,this.editBox.placeholderLabel.fontSize=20,this.editBox.node.width=Math.min(420,e-60-20-t-36),this.mobileEditBG.width=this.editBox.node.width+60;var i=this.editBox.node.width+60+t+36;this.mobileEditBG.x=this.editBox.node.x=-i/2+this.editBox.node.width/2+30,this.mobileSmile.x=this.mobileEditBG.x+this.mobileEditBG.width/2-20,this.sendButton.x=this.editBox.node.x+this.editBox.node.width/2+30+t+18},pcView:function(){for(var e=0;e<this.mobileViews.length;e++)this.mobileViews[e].active=!1;for(var t=0;t<this.pcViews.length;t++)this.pcViews[t].active=!0;this.editBox.textLabel.fontSize=17,this.editBox.placeholderLabel.fontSize=17,this.musicWidget.bottom=46,this.musicWidget.left=62,this.musicWidget.updateAlignment(),this.inputWidget.bottom=83,this.inputWidget.updateAlignment(),this.musicButton.scale=1,this.musicButton.x=0,this.sendButton.scale=1,this.sendButton.x=334,this.editBox.node.width=420,this.editBox.node.x=0,this.isFirst&&(this.isFirst=!1)},popupComingSoon:function(){this.pop.active=!0},closeComingSoon:function(){this.pop.active=!1},popMovileFirst:function(){this.mobileFirst.active=!0;var e=this.mobileEditBG.width;this.mobileEditBG.width=360,this.editBox.node.width=300,this.editBox.node.x+=(e-this.mobileEditBG.width)/2,this.mobileFirst.x=180,this.mobileSmile.x=this.mobileEditBG.x-this.mobileEditBG.width/2+20},closeMobileFirst:function(){this.mobileFirst.active&&(this.mobileFirst.active=!1,this.setMobileView(this.switchwidget.fw))}}),cc._RF.pop()},{Helper:"Helper"}],CamAdjust:[function(e,t,i){"use strict";cc._RF.push(t,"5d400oTV05Ld4Jsmmrztiwt","CamAdjust");cc.Class({extends:cc.Component,properties:{cameras:[cc.Camera],isKeyA:!1,isKeyD:!1,isKeyW:!1,isKeyS:!1,isKeyO:!1,isKeyP:!1,isK:!1,isL:!1,isM:!1,isN:!1},statics:{},onLoad:function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},onDestroy:function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},update:function(){if(this.isKeyA)for(var e=0;e<this.cameras.length;e++)this.cameras[e].node.z+=1;if(this.isKeyD)for(var t=0;t<this.cameras.length;t++)this.cameras[t].node.z-=1;if(this.isKeyW)for(var i=0;i<this.cameras.length;i++)this.cameras[i].node.y+=1;if(this.isKeyS)for(var o=0;o<this.cameras.length;o++)this.cameras[o].node.y-=1;if(this.isM)for(var s=0;s<this.cameras.length;s++)this.cameras[s].node.x+=1;if(this.isN)for(var n=0;n<this.cameras.length;n++)this.cameras[n].node.x-=1;if(this.isKeyO)for(var c=0;c<this.cameras.length;c++)this.cameras[c].node.rotationX+=.1;if(this.isKeyP)for(var a=0;a<this.cameras.length;a++)this.cameras[a].node.rotationX-=.1;if(this.isK)for(var h=0;h<this.cameras.length;h++)this.cameras[h].fov+=.1;if(this.isL)for(var d=0;d<this.cameras.length;d++)this.cameras[d].fov-=.1},onKeyDown:function(e){switch(e.keyCode){case cc.macro.KEY.a:this.isKeyA=!0;break;case cc.macro.KEY.d:this.isKeyD=!0;break;case cc.macro.KEY.w:this.isKeyW=!0;break;case cc.macro.KEY.s:this.isKeyS=!0;break;case cc.macro.KEY.o:this.isKeyO=!0;break;case cc.macro.KEY.p:this.isKeyP=!0;break;case cc.macro.KEY.k:this.isK=!0;break;case cc.macro.KEY.l:this.isL=!0;break;case cc.macro.KEY.m:this.isM=!0;break;case cc.macro.KEY.n:this.isN=!0}},onKeyUp:function(e){switch(e.keyCode){case cc.macro.KEY.a:this.isKeyA=!1;break;case cc.macro.KEY.d:this.isKeyD=!1;break;case cc.macro.KEY.w:this.isKeyW=!1;break;case cc.macro.KEY.s:this.isKeyS=!1;break;case cc.macro.KEY.o:this.isKeyO=!1;break;case cc.macro.KEY.p:this.isKeyP=!1;break;case cc.macro.KEY.k:this.isK=!1;break;case cc.macro.KEY.l:this.isL=!1;break;case cc.macro.KEY.u:console.log(this.cameras[0].node.position,this.cameras[0].node.rotationX,this.cameras[0].fov);break;case cc.macro.KEY.m:this.isM=!1;break;case cc.macro.KEY.n:this.isN=!1}}});cc._RF.pop()},{}],CamMove:[function(e,t,i){"use strict";cc._RF.push(t,"2cd67RFoK5K1bWUfo3GU/9x","CamMove");var o=e("Game");cc.Class({extends:cc.Component,properties:{cameras:[cc.Camera],sceneNodes:[cc.Node],infos:null,vx:0,vy:0,ax:.5,maxV:1,rotRangeX:10,rotRangeY:10,screenWidth:0,screenHeight:0,designResolutionHeight:0,designResolutionHeight_2:0,game:o},onLoad:function(){this.screenWidth=cc.view.getDesignResolutionSize().height/cc.view.getCanvasSize().height*cc.view.getCanvasSize().width,this.screenHeight=cc.view.getDesignResolutionSize().width/cc.view.getCanvasSize().width*cc.view.getCanvasSize().height,this.designResolutionHeight=cc.view.getDesignResolutionSize().height,this.designResolutionHeight_2=cc.view.getDesignResolutionSize().height/2,this.infos=[];for(var e=0;e<this.sceneNodes.length;e++){var t={x:this.sceneNodes[e].eulerAngles.x,y:this.sceneNodes[e].eulerAngles.y};this.infos.push(t)}this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouseMove,this)},onDestroy:function(){this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouseMove,this)},onTouchMove:function(e){},onMouseMove:function(e){if(this.game.furweeIntialized)for(var t=(this.screenWidth/2-e._x)/(this.screenWidth/2)*this.rotRangeY,i=(this.screenHeight/2-e._y)/(this.screenHeight/2)*this.rotRangeX,o=this.sceneNodes[0].eulerAngles.x,s=this.sceneNodes[0].eulerAngles.y,n=Math.abs(t-s)/this.rotRangeY,c=Math.abs(i-o)/this.rotRangeX,a=0;a<this.sceneNodes.length;a++){var h=cc.rotate3DTo(Math.max(c,n),cc.v3(i+this.infos[a].x,t+this.infos[a].y,0));this.sceneNodes[a].stopAllActions(),this.sceneNodes[a].runAction(h)}}});cc._RF.pop()},{Game:"Game"}],Eye:[function(e,t,i){"use strict";cc._RF.push(t,"40ee8VmmVRIVoMRa4vSDXGF","Eye"),cc.Class({extends:cc.Component,properties:{stage:cc.Node,eye:cc.Node,isLeft:cc.Boolean},onLoad:function(){this.randX=8,this.randY=1.5},touchMoveHandler:function(e){},mouseMoveHandler:function(e){var t=this.stage.convertToWorldSpaceAR(cc.v2(e.getLocationX(),e.getLocationY()));t=cc.v2(e.getLocationX(),e.getLocationY());var i=this.node.convertToNodeSpaceAR(t),o=0,s=0,n=0,c=0;if(0!=i.x&&0!=i.y){var a=Math.pow(i.x,2)*Math.pow(i.y,2)/(Math.pow(i.x,2)+Math.pow(i.y,2));if(a>Math.pow(150,2))n=0,c=0;else{var h=Math.min(Math.pow(a,.5)/40,1);this.isLeft?i.x-=40*h:i.x+=40*h,i.x<0?i.x=Math.max(i.x,-8):i.x=Math.min(i.x,8),i.y<0?i.y=Math.max(i.y,-2.5):i.y=Math.min(i.y,2.5);var d=Math.pow(i.x,2)*Math.pow(i.y,2)/(Math.pow(i.x,2)+Math.pow(i.y,2));o=Math.pow(d,.5),s=i.y/o,n=o*(i.x/o),c=o*s}}this.eye.setPosition(n,c)}}),cc._RF.pop()},{}],FitWidget:[function(e,t,i){"use strict";cc._RF.push(t,"dae25grE5tFZotKCIT3gXqz","FitWidget");var o=e("Helper").Helper;cc.Class({extends:cc.Component,properties:{minWidth:-1,minHeight:-1,fitHeight:640},onLoad:function(){o.addCallback(this.onResize.bind(this)),this.canvas=this.node.parent.getComponent(cc.Canvas),this.onResize(o.width,o.isPcView)},onResize:function(e,t){this.node&&e<this.minWidth&&(this.node.scale=e/this.minWidth)}}),cc._RF.pop()},{Helper:"Helper"}],Furwee:[function(e,t,i){"use strict";cc._RF.push(t,"84f37SyDP5Kvo2O5YflkhtI","Furwee"),Object.defineProperty(i,"__esModule",{value:!0}),i.Furwee=void 0;var o={};i.Furwee=o,o.LOGOUT_URL=null,o.HOME_URL=null,cc._RF.pop()},{}],Game:[function(e,t,i){"use strict";cc._RF.push(t,"aa6b4oHh3RETr68323Kl57q","Game");var o=e("MusicToggle"),s=e("BodyAnim"),n=e("UIManager"),c=e("LayerCamerasMove"),a=e("Furwee").Furwee;cc.Class({extends:cc.Component,properties:{audioID:-1,mouthNode:cc.Node,mouthIsReset:!0,historyObjects:[],balloonPrefab:cc.Prefab,balloonNode:cc.Node,introSound:{type:cc.AudioClip,default:null},idleMouthTimeout:-1,bodyAnim:s,headAnim:cc.Animation,initialMsgJSON:null,introCameras:[cc.Camera],furweeIntialized:!1,URL:"http://40.121.137.102",URL_SUFFIX:"",enableTextInput:!1,uiManager:n,cameraMove:c,music:o,editBox:cc.EditBox,sendButton:cc.Node},start:function(){},onLoad:function(){this.uiManager.game=this,this.cameraMove.game=this,this.music.game=this;var e=!1;-1==window.location.href.indexOf("localhost")&&-1==window.location.href.indexOf("127.0.0.1")||(e=!0),this.URL="https://furwee.ai/api",this.URL_SUFFIX="",a.LOGOUT_URL="https://furwee.ai/logout",a.HOME_URL="https://furwee.ai/home",console.log("isLocalHost",e),this.setEnableTextInput(!1),this.onTextLenChange(this.editBox.string),this.startFurwee()},handleConnect:function(){console.log("connected",this.socket.id)},startFurwee_backup:function(){this.addBallon("Hi, my name is Furwee. What's your name?",!0),this.audioInfo=[{audio_offset_ms:50,viseme_id:0},{audio_offset_ms:100,viseme_id:12},{audio_offset_ms:237.5,viseme_id:11},{audio_offset_ms:475,viseme_id:0},{audio_offset_ms:650,viseme_id:21},{audio_offset_ms:687.5,viseme_id:11},{audio_offset_ms:762.5,viseme_id:19},{audio_offset_ms:850,viseme_id:4},{audio_offset_ms:893.75,viseme_id:6},{audio_offset_ms:937.5,viseme_id:21},{audio_offset_ms:1e3,viseme_id:6},{audio_offset_ms:1062.5,viseme_id:15},{audio_offset_ms:1150,viseme_id:18},{audio_offset_ms:1212.5,viseme_id:5},{audio_offset_ms:1287.5,viseme_id:13},{audio_offset_ms:1350,viseme_id:7},{audio_offset_ms:1400,viseme_id:6},{audio_offset_ms:1662,viseme_id:0},{audio_offset_ms:2425,viseme_id:0},{audio_offset_ms:2475,viseme_id:7},{audio_offset_ms:2575,viseme_id:1},{audio_offset_ms:2637.5,viseme_id:19},{audio_offset_ms:2687.5,viseme_id:15},{audio_offset_ms:2737.5,viseme_id:6},{audio_offset_ms:2787.5,viseme_id:3},{audio_offset_ms:2825,viseme_id:13},{audio_offset_ms:2862.5,viseme_id:19},{audio_offset_ms:2925,viseme_id:4},{audio_offset_ms:3025,viseme_id:6},{audio_offset_ms:3125,viseme_id:21},{audio_offset_ms:3300,viseme_id:0}],this.audioID=cc.audioEngine.play(this.introSound),this.audioOffset=0,this.updateMouth(),this.bodyAnim.playIntro(),this.headAnim.play(),cc.audioEngine.setFinishCallback(this.audioID,function(){this.audioID=-1,this.mouthIsReset=!1}.bind(this))},startFurwee:function(){this.headAnim.play(),this.bodyAnim.play();var e=this,t=new XMLHttpRequest,i=this.URL+"/initial-message/"+this.URL_SUFFIX;t.onreadystatechange=function(){if(t.readyState==XMLHttpRequest.DONE&&200==t.status&&(e.initialMsgJSON=JSON.parse(t.responseText),!e.tryToStartFurweeIntro())){var i=e.initialMsgJSON.audio_file_link;cc.loader.load({url:i,type:"wav"})}},t.open("GET",i,!0),t.setRequestHeader("Content-type","application/json"),t.send("")},tryToStartFurweeIntro:function(){return!this.uiManager.isBlockActive()&&(!!this.initialMsgJSON&&(!this.furweeIntialized&&(this.furweeIntialized=!0,this.setEnableTextInput(!0),this.onTTSCompleted(this.initialMsgJSON,function(){this.addBallon(this.initialMsgJSON.reply,!0),this.bodyAnim.playIntro()}.bind(this)),this.historyObjects.push({index:this.historyObjects.length,reply:this.initialMsgJSON.reply,message:this.initialMsgJSON.message}),!0)))},onTTSCompleted:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e){this.audioInfo=e.lip_sync_animation;var i=e.audio_file_link;cc.loader.load({url:i,type:"wav"},function(e,i){this.audioID=cc.audioEngine.play(i),this.audioID&&this.music.shouldbeMuted()&&cc.audioEngine.setVolume(this.audioID,0),this.audioOffset=0,this.stopIdleMouth(),this.updateMouth(),t&&t(),cc.audioEngine.setFinishCallback(this.audioID,function(){this.audioID=-1,this.mouthIsReset=!1}.bind(this))}.bind(this))}},didReturnHandler:function(){this.sendHandler(),setTimeout(function(){this.editBox.focus()}.bind(this),0)},sendHandler:function(){if(this.enableTextInput){var e=this.editBox.string;if(0!=e.trim().length){this.setEnableTextInput(!1),this.addBallon(e,!1),this.editBox.string="",cc.sys.isMobile?this.editBox.blur():this.editBox.focus(),this.onTextLenChange(this.editBox.string);var t=this,i=new XMLHttpRequest,o=this.URL+"/messages/"+this.URL_SUFFIX;i.onreadystatechange=function(){if(i.readyState==XMLHttpRequest.DONE&&200==i.status){var e=JSON.parse(i.responseText);t.setEnableTextInput(!0),t.onTTSCompleted(e),t.historyObjects.push({index:t.historyObjects.length,reply:e.reply,message:e.message}),t.addBallon(e.reply,!0)}};var s=JSON.stringify({message:e,history:this.historyObjects});i.open("POST",o,!0),i.setRequestHeader("Content-type","application/json"),i.send(s);var n=new XMLHttpRequest,c=this.URL+"/emotion/"+this.URL_SUFFIX;n.onreadystatechange=function(){n.readyState==XMLHttpRequest.DONE&&200==n.status&&console.log(n.responseText)};var a=JSON.stringify({message:e});n.open("POST",c,!0),n.setRequestHeader("Content-type","application/json"),n.send(a)}}},updateMouth:function(){var e=this.audioInfo[this.audioOffset].viseme_id,t=this.mouthNode.getChildByName("mouth_"+e);t&&(this.clearMouth(),t.active=!0)},update:function(e){if(-1!=this.audioID)for(var t=cc.audioEngine.getCurrentTime(this.audioID);this.audioInfo.length>this.audioOffset&&this.audioInfo[this.audioOffset].audio_offset_ms<1e3*t+15;)this.updateMouth(),this.audioOffset+=1;else this.mouthIsReset||(this.mouthIsReset=!0,this.clearMouth(),this.mouthNode.getChildByName("mouth_0").active=!0,this.startIdleMouth())},onTextLenChange:function(e){this.sendButton.active=0!=e.length,this.uiManager.updateSendButton(this.sendButton.active)},addBallon:function(e,t){for(var i=0;i<this.balloonNode.children.length;++i)this.balloonNode.children[i].getComponent("Ballon").step();var o=cc.instantiate(this.balloonPrefab);o.getComponent("Ballon").init(e,t),o.opacity=0,this.balloonNode.addChild(o)},blockClickHandler:function(){this.music.initialize(),this.introCameraAnim()},introCameraAnim:function(){for(var e=0;e<this.introCameras.length;e++)this.introCameras[e].getComponent(cc.Animation).play();setTimeout(this.tryToStartFurweeIntro.bind(this),2e3)},clearMouth:function(){for(var e=0;e<=21;e++){this.mouthNode.getChildByName("mouth_"+e).active=!1}for(var t=0;t<2;t++){this.mouthNode.getChildByName("idle_"+t).active=!1}},startIdleMouth:function(){this.setIdleMouth()},setIdleMouth:function(){clearTimeout(this.idleMouthTimeout),this.idleMouthTimeout=-1,this.clearMouth();var e=Math.floor(2*Math.random());this.mouthNode.getChildByName("idle_"+e).active=!0,setTimeout(this.setIdleMouth.bind(this),3e3*Math.random()+3e3)},stopIdleMouth:function(){clearTimeout(this.idleMouthTimeout),this.idleMouthTimeout=-1},errorClickHandler:function(){window.captureError&&window.captureError()},setEnableTextInput:function(e){this.enableTextInput=e}});cc._RF.pop()},{BodyAnim:"BodyAnim",Furwee:"Furwee",LayerCamerasMove:"LayerCamerasMove",MusicToggle:"MusicToggle",UIManager:"UIManager"}],HUI:[function(e,t,i){"use strict";cc._RF.push(t,"16778DqrPJB4oJ6YF7w5oba","HUI");var o=e("UIBase"),s=e("LayerCamerasMove"),n=cc.Class({extends:o,properties:{mushroom:cc.Node,showTopButton:cc.Node,topUI:cc.Node,_isShowTop:!1},statics:{MAX_WIDTH:2200},onLoad:function(){this.showTopButton.on(cc.Node.EventType.MOUSE_ENTER,this.showTop.bind(this)),this.node.on(cc.Node.EventType.TOUCH_END,this.hideTop.bind(this))},onDestroy:function(){this.showTopButton.off(cc.Node.EventType.MOUSE_ENTER,this.showTop.bind(this)),this.node.on(cc.Node.EventType.TOUCH_END,this.hideTop.bind(this))},adjustMushroom:function(e){var t=(Math.min(n.MAX_WIDTH,e)-1920)/2;this.mushroom.x=Math.max(837,837+t),s.infos[2].x=this.mushroom.x},hideTop:function(){this._isShowTop&&(this._isShowTop=!1,this.topUI.stopAllActions(),this.topUI.runAction(cc.moveTo(.3,cc.v2(0,140))))},showTop:function(){this._isShowTop||(this._isShowTop=!0,this.topUI.stopAllActions(),this.topUI.runAction(cc.moveTo(.3,cc.v2(0,0))))}});cc._RF.pop()},{LayerCamerasMove:"LayerCamerasMove",UIBase:"UIBase"}],Helper:[function(e,t,i){"use strict";cc._RF.push(t,"94704p/KtNCs7j4+H/GbHK6","Helper"),Object.defineProperty(i,"__esModule",{value:!0}),i.Helper=void 0;var o={};i.Helper=o,o.callBacks=[],o.FIT_HEIGHT=1080,o.H_MIN_WIDTH=900,o.MAX_WIDTH=2200,o.width=1920,o.isPcView=!0,o.initialized=!1,o.initialize=function(){o.initialized||(o.initialized=!0,cc.view.setResizeCallback(o.handleResize),o.handleResize())},o.handleResize=function(){var e=cc.view.getFrameSize(),t=o.FIT_HEIGHT/e.height*e.width,i=!0;t<o.H_MIN_WIDTH?(cc.Canvas.instance.designResolution=new cc.Size(t,o.FIT_HEIGHT),cc.view.setDesignResolutionSize(cc.Canvas.instance.designResolution.width,cc.Canvas.instance.designResolution.height,new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME,cc.ContentStrategy.SHOW_ALL)),i=!1):(t=Math.min(o.MAX_WIDTH,t),cc.Canvas.instance.designResolution=new cc.Size(t,o.FIT_HEIGHT),cc.view.setDesignResolutionSize(cc.Canvas.instance.designResolution.width,cc.Canvas.instance.designResolution.height,new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME,cc.ContentStrategy.SHOW_ALL)),i=!0),o.width=t,o.isPcView=i;for(var s=0;s<o.callBacks.length;s++)o.callBacks[s](t,i)},o.addCallback=function(e){o.initialize(),o.callBacks.push(e)},o.removeCallback=function(e){var t=o.callBacks.indexOf(e);-1!=t&&o.splice(t,1)},cc._RF.pop()},{}],LayerCamerasMove:[function(e,t,i){"use strict";cc._RF.push(t,"f6c90/o6l5A75tCu2UdbNIr","LayerCamerasMove");var o=cc.Class({extends:cc.Component,properties:{sceneNodes:[cc.Node],vx:0,vy:0,ax:.5,maxV:1,rotRangeX:10,rotRangeY:10,screenWidth:0,screenHeight:0,designResolutionHeight:0,designResolutionHeight_2:0,game:null},statics:{infos:null},onLoad:function(){this.screenWidth=cc.view.getDesignResolutionSize().height/cc.view.getCanvasSize().height*cc.view.getCanvasSize().width,this.screenHeight=cc.view.getDesignResolutionSize().width/cc.view.getCanvasSize().width*cc.view.getCanvasSize().height,this.designResolutionHeight=cc.view.getDesignResolutionSize().height,this.designResolutionHeight_2=cc.view.getDesignResolutionSize().height/2,o.infos=[];for(var e=0;e<this.sceneNodes.length;e++){var t={x:this.sceneNodes[e].x,y:this.sceneNodes[e].y,z:this.sceneNodes[e].z,height:this.sceneNodes[e].height};o.infos.push(t)}cc.sys.isMobile||(this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouseMove,this))},onDestroy:function(){this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouseMove,this)},initialize:function(){console.log(window.DeviceMotionEvent),window.DeviceMotionEvent&&"function"==typeof window.DeviceMotionEvent.requestPermission&&window.DeviceMotionEvent.requestPermission(),window.addEventListener("deviceorientation",this.onDeviceorientation.bind(this))},onTouchMove:function(e){},onDeviceMotion:function(e){},onDeviceorientation:function(e){for(var t=0;t<this.sceneNodes.length;t++){this.screenHeight;var i=o.infos[t].x+e.gamma/90*this.rotRangeX*o.infos[t].z/10,s=e.beta/90*this.rotRangeY*(o.infos[t].z/10);this.sceneNodes[t].x=i,1==t?this.sceneNodes[t].height=o.infos[t].height+s:this.sceneNodes[t].y=o.infos[t].y+s}},onMouseMove:function(e){if(this.game.furweeIntialized)for(var t=0;t<this.sceneNodes.length;t++){var i=this.screenWidth/2,s=this.screenHeight/2,n=(i-e._x)/i*this.rotRangeX*(o.infos[t].z/10),c=(e._y-370)/s*this.rotRangeY*(o.infos[t].z/10);this.sceneNodes[t].x=o.infos[t].x+n,1==t?this.sceneNodes[t].height=o.infos[t].height+c:this.sceneNodes[t].y=o.infos[t].y+c}}});cc._RF.pop()},{}],Loading:[function(e,t,i){"use strict";cc._RF.push(t,"61f1fNOFbZKPoN7duuM93VT","Loading"),cc.Class({extends:cc.Component,properties:{progressBar:cc.ProgressBar},onLoad:function(){cc.sys.isMobile&&cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT),cc.director.preloadScene("game_v1",this.onProgress.bind(this),this.onComplete.bind(this))},onProgress:function(e,t){this.progressBar.progress=e/t},onComplete:function(e){e||cc.director.loadScene("game_v1")}}),cc._RF.pop()},{}],MusicToggle:[function(e,t,i){"use strict";cc._RF.push(t,"9bcd51KbVdE37cQ27yYx/FP","MusicToggle");cc.Class({extends:cc.Component,properties:{onNode:cc.Node,offNode:cc.Node,hintNode:cc.Node,hintText:cc.Label,audioId:-1,music:{type:cc.AudioClip,default:null},anim:cc.Animation,bgVolumn:.8,bgSlider:cc.Slider,bgProgress:cc.ProgressBar,offTimer:-1,appHidden:!1,micActive:!1,game:null},initialize:function(){this.isMusicOn=cc.sys.localStorage.getItem("music"),null==this.isMusicOn&&(this.isMusicOn=!0),this.isMusicOn?this.toggleOn():this.toggleOff(),this.bgSlider.node.on("slide",this.sliderAdjust.bind(this)),this.bgSlider.node.on(cc.Node.EventType.TOUCH_CANCEL,this.volumnCancelled,this),this.bgSlider._N$handle.node.on(cc.Node.EventType.TOUCH_END,this.volumnCancelled,this),this.hidden="";var e="";void 0!==document.hidden?(this.hidden="hidden",e="visibilitychange"):void 0!==document.msHidden?(this.hidden="msHidden",e="msvisibilitychange"):void 0!==document.webkitHidden&&(this.hidden="webkitHidden",e="webkitvisibilitychange"),void 0!==document.addEventListener&&void 0!==document.hidden&&document.addEventListener(e,this.onVisibilityChange.bind(this),!1)},toggleOver:function(){this.hintNode.active=!0},toggleOut:function(){this.hintNode.active=!1},toggleOff:function(){clearTimeout(this.offTimer),this.offTimer=-1,this.onNode.active=!0,this.offNode.active=!1,this.hintText.string="Turn Volumn On",this.bgSlider.node.active=!1,this.audioId>=0&&cc.audioEngine.pauseMusic()},toggleOn:function(){this.offNode.active=!0,this.onNode.active=!1,this.hintText.string="Turn Volumn Off",this.bgSlider.node.active=!0,this.audioId<0?this.audioId=cc.audioEngine.playMusic(this.music,!0,this.bgVolumn):cc.audioEngine.resumeMusic(),0==this.bgVolumn&&(this.bgProgress.progress=this.bgSlider.progress=this.bgVolumn=.8,cc.audioEngine.setMusicVolume(this.bgVolumn))},sliderAdjust:function(e){clearTimeout(this.offTimer),this.bgProgress.progress=e.progress,this.bgVolumn=e.progress,cc.audioEngine.setMusicVolume(this.bgVolumn)},volumnCancelled:function(){var e=this;clearTimeout(this.offTimer),0==this.bgVolumn&&(this.offTimer=setTimeout(function(){e.checkVolumnToggle()},1e3))},checkVolumnToggle:function(){clearTimeout(this.offTimer),0==this.bgVolumn&&this.toggleOff()},onVisibilityChange:function(){var e=document[this.hidden];cc.sys.isNative||(e?(this.appHidden=!0,this.muteAll(!0)):(this.appHidden=!1,this.muteAll(!1)))},onMicChange:function(e){this.micActive=e,e?this.muteAll(!0):this.muteAll(!1)},muteAll:function(e){e=e||this.micActive||this.appHidden,this.game.audioID>=0&&cc.audioEngine.setVolume(this.game.audioID,e?0:1),this.audioId>=0&&cc.audioEngine.setVolume(this.audioId,e?0:this.bgVolumn)},shouldbeMuted:function(){return this.micActive||this.appHidden}});cc._RF.pop()},{}],SwitchWidget:[function(e,t,i){"use strict";cc._RF.push(t,"810a964NXJI1a/vpIIcE9+o","SwitchWidget");var o=e("Helper").Helper;cc.Class({extends:cc.Component,properties:{},onLoad:function(){o.addCallback(this.onResize.bind(this)),this.onResize(o.width,o.isPcView)},onDestroy:function(){o.removeCallback(this.onResize.bind(this))},onResize:function(e,t){this.node&&(t?this.node.emit("pcView",e):this.node.emit("mobileView",e))}});cc._RF.pop()},{Helper:"Helper"}],UIBase:[function(e,t,i){"use strict";cc._RF.push(t,"066b2YxUHZOrrYhIhIt1Sbl","UIBase");var o=e("UIManager"),s=cc.Class({extends:cc.Component,properties:{sendButton:cc.Node,text:cc.EditBox,microButton:cc.Node,recordButton:cc.Node},startRecord:function(){this.microButton.active=!1,this.recordButton.active=!0,this.text.enabled=!1,s.initRecognition(this),o.instance.game.music.onMicChange(!0),s.useWebRecognition?s.startWebRecognition():s.startAPIRecognition()},stopRecord:function(){this.microButton.active=!0,this.recordButton.active=!1,o.instance.game.music.onMicChange(!1),s.useWebRecognition?s.stopWebRecognition():s.stopAPIRecognition(),this.text.enabled=!0,this.updateUIAfterRecord()},updateUIAfterRecord:function(){this.sendButton.active=0!=this.text.string.length,this.updateSendButton(this.sendButton.active)},updateSendButton:function(e){this.microButton.active=!e},statics:{ui:null,useWebRecognition:!1,recognition:null,textRecognition:"",stream:null,recorder:null,gumStream:null,rec:null,input:null,audioContext:null,initRecognition:function(e){o.uiBase=e,window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,s.useWebRecognition=void 0!=SpeechRecognition,o.instance.debugNode.string+="useWebRecognition:"+s.useWebRecognition+"\n",s.textRecognition=""},startWebRecognition:function(){var e="";s.recognition=new SpeechRecognition,s.recognition.interimResults=!0,s.recognition.continuous=!0,s.recognition.lang="en-US",o.instance.debugNode.string+="startWebRecognition 1\n",s.recognition.onresult=function(t){console.log(t),o.instance.debugNode.string+="startWebRecognition 3"+t+"\n";for(var i="",n=t.resultIndex;n<t.results.length;++n)t.results[n].isFinal?(e+=t.results[n][0].transcript,s.textRecognition=e):(i+=t.results[n][0].transcript,s.textRecognition=e+i);o.uiBase.text.string=s.textRecognition,o.uiBase.text.enabled&&o.uiBase.updateUIAfterRecord(),o.instance.debugNode.string+="startWebRecognition 2\n"},s.recognition.onerror=function(e){o.instance.debugNode.string+="startWebRecognition error"+e.error+"\n"+e.message+"\n"},s.recognition.start(),o.instance.debugNode.string+="startWebRecognition 6\n"},stopWebRecognition:function(){s.recognition.stop()},startAPIRecognition:function(){var e=window.AudioContext||window.webkitAudioContext;navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(function(t){s.audioContext=new e,console.log("getUserMedia() success, stream created, initializing Recorder.js ..."),s.gumStream=t,s.input=s.audioContext.createMediaStreamSource(t),s.rec=new Recorder(s.input,{numChannels:1}),s.rec.record(),console.log("Recording started")}).catch(function(e){})},stopAPIRecognition:function(){s.rec.stop(),s.gumStream.getAudioTracks()[0].stop(),s.rec.exportWAV(function(e){var t=new XMLHttpRequest,i=o.instance.game.URL+"/audio-to-text/"+o.instance.game.URL_SUFFIX;t.onreadystatechange=function(){if(t.readyState==XMLHttpRequest.DONE&&200==t.status){var e=JSON.parse(t.responseText);null!=e.text&&(o.uiBase.text.string=e.text,o.uiBase.updateUIAfterRecord())}},t.open("POST",i,!0);var s=new FormData;s.append("audio",e),t.send(s)})}}});cc._RF.pop()},{UIManager:"UIManager"}],UIManager:[function(e,t,i){"use strict";cc._RF.push(t,"81c2cAkUfVFLZ3AlfpdgkhZ","UIManager");var o=e("LayerCamerasMove"),s=e("Furwee").Furwee,n=e("Helper").Helper,c=cc.Class({extends:cc.Component,properties:{isHActive:!0,hNode:cc.Node,vNOde:cc.Node,uiCamera:cc.Camera,musicWidget:cc.Widget,musicButton:cc.Node,startBlock:cc.Node,game:null,cameraMove:o,debugNode:cc.Label},statics:{instance:null,uiBase:null},onLoad:function(){this.startBlock.active=!0,this.node.on("mobileView",this.mobileView.bind(this)),this.node.on("pcView",this.pcView.bind(this)),n.isPcView?this.pcView(n.width):this.mobileView(n.width),setTimeout(function(){n.handleResize()},1),c.instance=this},mobileView:function(e){this.isHActive=!1,this.hNode.active=!1,this.vNOde.active=!0,this.vNOde.width=e,this.musicWidget.bottom=70,this.musicWidget.left=-5,this.musicButton.scale=.6,this.musicButton.x=20;var t=this.node.getComponentsInChildren(cc.Widget);for(var i in t)t[i].updateAlignment();this.vNOde.getComponent("UIBase").sendButton.active=this.game.sendButton.active,this.vNOde.getComponent("UIBase").text.string=this.game.editBox.string,this.vNOde.getComponent("UIBase").text.enabled=this.game.editBox.enabled,this.game.sendButton=this.vNOde.getComponent("UIBase").sendButton,this.game.editBox=this.vNOde.getComponent("UIBase").text,this.game.microButton&&(this.vNOde.getComponent("UIBase").microButton.active=this.game.microButton.active),this.game.recordButton&&(this.vNOde.getComponent("UIBase").recordButton.active=this.game.recordButton.active),this.game.microButton=this.vNOde.getComponent("UIBase").microButton,this.game.recordButton=this.vNOde.getComponent("UIBase").recordButton,c.uiBase&&(c.uiBase=this.vNOde.getComponent("UIBase"))},pcView:function(e){this.isHActive=!0,this.hNode.active=!0,this.vNOde.active=!1,this.hNode.width=e,this.musicWidget.bottom=46,this.musicWidget.left=62,this.musicWidget.updateAlignment(),this.musicButton.scale=1,this.musicButton.x=0;var t=this.node.getComponentsInChildren(cc.Widget);for(var i in t)t[i].updateAlignment();this.hNode.getComponent("UIBase").sendButton.active=this.game.sendButton.active,this.hNode.getComponent("UIBase").text.string=this.game.editBox.string,this.hNode.getComponent("UIBase").text.enabled=this.game.editBox.enabled,this.game.sendButton=this.hNode.getComponent("UIBase").sendButton,this.game.editBox=this.hNode.getComponent("UIBase").text,this.game.microButton&&(this.hNode.getComponent("UIBase").microButton.active=this.game.microButton.active),this.game.recordButton&&(this.hNode.getComponent("UIBase").recordButton.active=this.game.recordButton.active),this.game.microButton=this.hNode.getComponent("UIBase").microButton,this.game.recordButton=this.hNode.getComponent("UIBase").recordButton,c.uiBase&&(c.uiBase=this.hNode.getComponent("UIBase")),this.hNode.getComponent("HUI").adjustMushroom(e)},closeStartBlock:function(){this.startBlock.active=!1,this.cameraMove.initialize(),this.game.blockClickHandler()},isBlockActive:function(){return this.startBlock.active},updateSendButton:function(e){this.isHActive?this.hNode.getComponent("UIBase").updateSendButton(e):this.vNOde.getComponent("UIBase").updateSendButton(e)},toggleDebug:function(){},logout:function(){var e=new XMLHttpRequest;e.open("POST",s.LOGOUT_URL,!0),e.send()},home:function(){var e=new XMLHttpRequest;e.open("POST",s.HOME_URL,!0),e.send()},education:function(){},onScroll:function(e){for(var t=this.game.balloonNode,i=0;i<t.children.length;i++){var o=t.children[i].convertToWorldSpaceAR(cc.v2(0,0)),s=o.y+t.children[i].height/2,n=o.y-t.children[i].height/2;n>1080||s<540?t.children[i].children[0].active=!1:(t.children[i].children[0].active=!0,n=Math.max(650,n),t.children[i].opacity=255-(n-650)/540*255)}}});cc.ScrollView.prototype._calculateBoundary=function(){if(this.content){var e=this.content.getComponent(cc.Layout);e&&e.enabledInHierarchy&&e.updateLayout();var t=this._view.getContentSize(),i=t.width*this._view.anchorX,o=t.height*this._view.anchorY;this._leftBoundary=-i,this._bottomBoundary=-o,this._rightBoundary=this._leftBoundary+t.width,this._topBoundary=this._bottomBoundary+t.height}},cc._RF.pop()},{Furwee:"Furwee",Helper:"Helper",LayerCamerasMove:"LayerCamerasMove"}],VUI:[function(e,t,i){"use strict";cc._RF.push(t,"85f69BVlF9A2K/EpgWMGvqv","VUI");var o=e("UIBase");e("UIManager"),cc.Class({extends:o,properties:{}});cc._RF.pop()},{UIBase:"UIBase",UIManager:"UIManager"}]},{},["Ballon","BodyAnim","BottomUI","CamAdjust","CamMove","Eye","Game","MusicToggle","Loading","FitWidget","Furwee","Helper","SwitchWidget","HUI","LayerCamerasMove","UIBase","UIManager","VUI"]);
//# sourceMappingURL=project.js.map
