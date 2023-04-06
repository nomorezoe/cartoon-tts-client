window.__require=function t(e,i,n){function o(a,c){if(!i[a]){if(!e[a]){var h=a.split("/");if(h=h[h.length-1],!e[h]){var r="function"==typeof __require&&__require;if(!c&&r)return r(h,!0);if(s)return s(h,!0);throw new Error("Cannot find module '"+a+"'")}a=h}var d=i[a]={exports:{}};e[a][0].call(d.exports,function(t){return o(e[a][1][t]||t)},d,d.exports,t,e,i,n)}return i[a].exports}for(var s="function"==typeof __require&&__require,a=0;a<n.length;a++)o(n[a]);return o}({Ballon:[function(t,e,i){"use strict";cc._RF.push(e,"27dc3v2SfVPAalyVvDSGo57","Ballon");var n=t("Helper").Helper,o=t("UIManager"),s=cc.Class({extends:cc.Component,properties:{whiteBG:cc.Node,pinkBG:cc.Node,text:cc.Label,stepCount:0},statics:{COLOR_1:new cc.Color(131,88,52),COLOR_2:new cc.Color(255,255,255),index:0},onLoad:function(){this.node.on("mobileView",this.mobileView.bind(this)),this.node.on("pcView",this.pcView.bind(this)),this.index=s.index,s.index++},lateUpdate:function(){this.updateTextHeight>0&&(this.updateTextHeight--,this.node.height=this.bg.height=Math.max(55,this.text.node.height+20),4==this.updateTextHeight&&(this.updateTextHeight=0,this.node.parent.parent.parent.getComponent(cc.ScrollView).scrollToBottom(0),this.node.opacity=255,o.instance.onScroll(null)))},init:function(t,e){e?(this.text.node.color=s.COLOR_1,this.pinkBG.active=!1,this.whiteBG.active=!0,this.bg=this.whiteBG):(this.whiteBG.active=!1,this.pinkBG.active=!0,this.bg=this.pinkBG),this.isFurwee=e,this.text.string=t,this.updateTextHeight=6,n.isPcView||this.mobileView(n.width)},step:function(){this.stepCount++,this.node.opacity},mobileView:function(t){this.text.fontSize=20,this.text.lineHeight=24,this.text.string=this.text.string,this.node.x=0,this.pinkBG.width=357,this.whiteBG.width=357,this.text.node.width=Math.max(190,this.pinkBG.width-40),this.updateTextHeight=Math.max(this.updateTextHeight,2)},pcView:function(){this.text.fontSize=20,this.text.lineHeight=28,this.text.string=this.text.string,this.pinkBG.width=427,this.whiteBG.width=427,this.text.node.width=343,this.updateTextHeight=Math.max(this.updateTextHeight,2)},updateOpacity:function(){var t=this.node.parent,e=this.node.y=t.y;e>0&&e<500&&(this.node.active=!0)}});cc._RF.pop()},{Helper:"Helper",UIManager:"UIManager"}],FitWidget:[function(t,e,i){"use strict";cc._RF.push(e,"dae25grE5tFZotKCIT3gXqz","FitWidget");var n=t("Helper").Helper;cc.Class({extends:cc.Component,properties:{minWidth:-1,minHeight:-1,fitHeight:640},onLoad:function(){n.addCallback(this.onResize.bind(this)),this.canvas=this.node.parent.getComponent(cc.Canvas),this.onResize(n.width,n.isPcView)},onResize:function(t,e){this.node&&t<this.minWidth&&(this.node.scale=t/this.minWidth)}}),cc._RF.pop()},{Helper:"Helper"}],Furwee:[function(t,e,i){"use strict";cc._RF.push(e,"84f37SyDP5Kvo2O5YflkhtI","Furwee"),Object.defineProperty(i,"__esModule",{value:!0}),i.Furwee=void 0;var n={};i.Furwee=n,n.LOGOUT_URL=null,n.HOME_URL=null,cc._RF.pop()},{}],Game:[function(t,e,i){"use strict";cc._RF.push(e,"aa6b4oHh3RETr68323Kl57q","Game");var n=t("MusicToggle"),o=t("UIManager"),s=t("LayerCamerasMove"),a=t("Furwee").Furwee,c=t("Pet");cc.Class({extends:cc.Component,properties:{audioID:-1,historyObjects:[],pet:c,balloonPrefab:cc.Prefab,balloonNode:cc.Node,introSound:{type:cc.AudioClip,default:null},initialMsgJSON:null,furweeIntialized:!1,URL:"http://40.121.137.102",URL_SUFFIX:"",enableTextInput:!1,uiManager:o,cameraMove:s,music:n,editBox:cc.EditBox,sendButton:cc.Node},start:function(){},onLoad:function(){this.uiManager.game=this,this.cameraMove.game=this,this.music.game=this;var t=!1;-1==window.location.href.indexOf("localhost")&&-1==window.location.href.indexOf("127.0.0.1")||(t=!0),this.URL="https://furwee.ai/api",this.URL_SUFFIX="",a.LOGOUT_URL="https://furwee.ai/logout",a.HOME_URL="https://furwee.ai/home",console.log("isLocalHost",t),this.setEnableTextInput(!1),this.onTextLenChange(this.editBox.string),this.startFurwee()},handleConnect:function(){console.log("connected",this.socket.id)},startFurwee:function(){this.pet.play();var t=this,e=new XMLHttpRequest,i=this.URL+"/initial-message/"+this.URL_SUFFIX;e.onreadystatechange=function(){if(e.readyState==XMLHttpRequest.DONE&&200==e.status&&(t.initialMsgJSON=JSON.parse(e.responseText),!t.tryToStartFurweeIntro())){var i=t.initialMsgJSON.audio_file_link;cc.loader.load({url:i,type:"wav"})}},e.open("GET",i,!0),e.setRequestHeader("Content-type","application/json"),e.send("")},tryToStartFurweeIntro:function(){return!this.uiManager.isBlockActive()&&(!!this.initialMsgJSON&&(!this.furweeIntialized&&(this.furweeIntialized=!0,this.setEnableTextInput(!0),this.onTTSCompleted(this.initialMsgJSON,function(){this.addBallon(this.initialMsgJSON.reply,!0)}.bind(this)),this.historyObjects.push({index:this.historyObjects.length,reply:this.initialMsgJSON.reply,message:this.initialMsgJSON.message}),!0)))},onTTSCompleted:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(t){this.audioInfo=t.lip_sync_animation;var i=t.audio_file_link;cc.loader.load({url:i,type:"wav"},function(t,i){this._startPlayTalking(i,e)}.bind(this))}},_startPlayTalking:function(t,e){var i=this;this.pet.isReadyToTalk()?(this.audioID=cc.audioEngine.play(t),this.audioID&&this.music.shouldbeMuted()&&cc.audioEngine.setVolume(this.audioID,0),this.audioOffset=0,this.updateMouth(),e&&e(),cc.audioEngine.setFinishCallback(this.audioID,function(){this.audioID=-1,this.pet.startIdle()}.bind(this))):(this.pet.playIntro(),setTimeout(function(){i._startPlayTalking(t,e)},16))},didReturnHandler:function(){this.sendHandler(),setTimeout(function(){this.editBox.focus()}.bind(this),0)},sendHandler:function(){if(this.enableTextInput){var t=this.editBox.string;if(0!=t.trim().length){this.setEnableTextInput(!1),this.addBallon(t,!1),this.editBox.string="",cc.sys.isMobile?this.editBox.blur():this.editBox.focus(),this.onTextLenChange(this.editBox.string);var e=this,i=new XMLHttpRequest,n=this.URL+"/messages/"+this.URL_SUFFIX;i.onreadystatechange=function(){if(i.readyState==XMLHttpRequest.DONE&&200==i.status){var t=JSON.parse(i.responseText);e.setEnableTextInput(!0),e.onTTSCompleted(t),e.historyObjects.push({index:e.historyObjects.length,reply:t.reply,message:t.message}),e.addBallon(t.reply,!0)}};var o=JSON.stringify({message:t,history:this.historyObjects});i.open("POST",n,!0),i.setRequestHeader("Content-type","application/json"),i.send(o);var s=new XMLHttpRequest,a=this.URL+"/emotion/"+this.URL_SUFFIX;s.onreadystatechange=function(){if(s.readyState==XMLHttpRequest.DONE&&200==s.status){console.log(s.responseText);var t=JSON.parse(s.responseText);e.pet.setEmotion(t.emotion)}};var c=JSON.stringify({message:t});s.open("POST",a,!0),s.setRequestHeader("Content-type","application/json"),s.send(c)}}},updateMouth:function(){var t=this.audioInfo[this.audioOffset].viseme_id;this.pet.updateMouth(t)},update:function(t){if(-1!=this.audioID)for(var e=cc.audioEngine.getCurrentTime(this.audioID);this.audioInfo.length>this.audioOffset&&this.audioInfo[this.audioOffset].audio_offset_ms<1e3*e+15;)this.updateMouth(),this.audioOffset+=1},onTextLenChange:function(t){this.sendButton.active=0!=t.length,this.uiManager.updateSendButton(this.sendButton.active)},addBallon:function(t,e){for(var i=0;i<this.balloonNode.children.length;++i)this.balloonNode.children[i].getComponent("Ballon").step();var n=cc.instantiate(this.balloonPrefab);n.getComponent("Ballon").init(t,e),n.opacity=0,this.balloonNode.addChild(n)},blockClickHandler:function(){this.music.initialize(),this.tryToStartFurweeIntro()},errorClickHandler:function(){window.captureError&&window.captureError()},setEnableTextInput:function(t){this.enableTextInput=t}});cc._RF.pop()},{Furwee:"Furwee",LayerCamerasMove:"LayerCamerasMove",MusicToggle:"MusicToggle",Pet:"Pet",UIManager:"UIManager"}],HUI:[function(t,e,i){"use strict";cc._RF.push(e,"16778DqrPJB4oJ6YF7w5oba","HUI");var n=t("UIBase"),o=t("LayerCamerasMove"),s=cc.Class({extends:n,properties:{mushroom:cc.Node,showTopButton:cc.Node,topUI:cc.Node,_isShowTop:!1},statics:{MAX_WIDTH:2200},onLoad:function(){this.showTopButton.on(cc.Node.EventType.MOUSE_ENTER,this.showTop.bind(this))},onDestroy:function(){this.showTopButton.off(cc.Node.EventType.MOUSE_ENTER,this.showTop.bind(this)),this.node.off(cc.Node.EventType.TOUCH_END,this.hideTop.bind(this))},adjustMushroom:function(t){var e=(Math.min(s.MAX_WIDTH,t)-1920)/2;this.mushroom.x=Math.max(837,837+e),o.infos[2].x=this.mushroom.x},hideTop:function(){this._isShowTop&&(this._isShowTop=!1,this.topUI.stopAllActions(),this.topUI.runAction(cc.moveTo(.3,cc.v2(0,140))),this.node.off(cc.Node.EventType.TOUCH_END,this.hideTop.bind(this)))},showTop:function(){this._isShowTop||(this._isShowTop=!0,this.topUI.stopAllActions(),this.topUI.runAction(cc.moveTo(.3,cc.v2(0,0))),this.node.off(cc.Node.EventType.TOUCH_END,this.hideTop.bind(this)),this.node.on(cc.Node.EventType.TOUCH_END,this.hideTop.bind(this)))}});cc._RF.pop()},{LayerCamerasMove:"LayerCamerasMove",UIBase:"UIBase"}],Helper:[function(t,e,i){"use strict";cc._RF.push(e,"94704p/KtNCs7j4+H/GbHK6","Helper"),Object.defineProperty(i,"__esModule",{value:!0}),i.Helper=void 0;var n={};i.Helper=n,n.callBacks=[],n.FIT_HEIGHT=1080,n.H_MIN_WIDTH=900,n.MAX_WIDTH=2200,n.width=1920,n.isPcView=!0,n.initialized=!1,n.initialize=function(){n.initialized||(n.initialized=!0,cc.view.setResizeCallback(n.handleResize),n.handleResize())},n.handleResize=function(){var t=cc.view.getFrameSize(),e=n.FIT_HEIGHT/t.height*t.width,i=!0;e<n.H_MIN_WIDTH?(cc.Canvas.instance.designResolution=new cc.Size(e,n.FIT_HEIGHT),cc.view.setDesignResolutionSize(cc.Canvas.instance.designResolution.width,cc.Canvas.instance.designResolution.height,new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME,cc.ContentStrategy.SHOW_ALL)),i=!1):(e=Math.min(n.MAX_WIDTH,e),cc.Canvas.instance.designResolution=new cc.Size(e,n.FIT_HEIGHT),cc.view.setDesignResolutionSize(cc.Canvas.instance.designResolution.width,cc.Canvas.instance.designResolution.height,new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME,cc.ContentStrategy.SHOW_ALL)),i=!0),n.width=e,n.isPcView=i;for(var o=0;o<n.callBacks.length;o++)n.callBacks[o](e,i)},n.addCallback=function(t){n.initialize(),n.callBacks.push(t)},n.removeCallback=function(t){var e=n.callBacks.indexOf(t);-1!=e&&n.splice(e,1)},cc._RF.pop()},{}],LayerCamerasMove:[function(t,e,i){"use strict";cc._RF.push(e,"f6c90/o6l5A75tCu2UdbNIr","LayerCamerasMove");var n=cc.Class({extends:cc.Component,properties:{sceneNodes:[cc.Node],vx:0,vy:0,ax:.5,maxV:1,rotRangeX:10,rotRangeY:10,screenWidth:0,screenHeight:0,designResolutionHeight:0,designResolutionHeight_2:0,game:null},statics:{infos:null},onLoad:function(){this.screenWidth=cc.view.getDesignResolutionSize().height/cc.view.getCanvasSize().height*cc.view.getCanvasSize().width,this.screenHeight=cc.view.getDesignResolutionSize().width/cc.view.getCanvasSize().width*cc.view.getCanvasSize().height,this.designResolutionHeight=cc.view.getDesignResolutionSize().height,this.designResolutionHeight_2=cc.view.getDesignResolutionSize().height/2,n.infos=[];for(var t=0;t<this.sceneNodes.length;t++){var e={x:this.sceneNodes[t].x,y:this.sceneNodes[t].y,z:this.sceneNodes[t].z,height:this.sceneNodes[t].height};n.infos.push(e)}cc.sys.isMobile||(this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouseMove,this))},onDestroy:function(){this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouseMove,this)},initialize:function(){console.log(window.DeviceMotionEvent),window.DeviceMotionEvent&&"function"==typeof window.DeviceMotionEvent.requestPermission&&window.DeviceMotionEvent.requestPermission(),window.addEventListener("deviceorientation",this.onDeviceorientation.bind(this))},onTouchMove:function(t){},onDeviceMotion:function(t){},onDeviceorientation:function(t){for(var e=0;e<this.sceneNodes.length;e++){this.screenHeight;var i=n.infos[e].x+t.gamma/90*this.rotRangeX*n.infos[e].z/10,o=t.beta/90*this.rotRangeY*(n.infos[e].z/10);this.sceneNodes[e].x=i,1==e?this.sceneNodes[e].height=n.infos[e].height+o:this.sceneNodes[e].y=n.infos[e].y+o}},onMouseMove:function(t){if(this.game.furweeIntialized)for(var e=0;e<this.sceneNodes.length;e++){var i=this.screenWidth/2,o=this.screenHeight/2,s=(i-t._x)/i*this.rotRangeX*(n.infos[e].z/10),a=(t._y-370)/o*this.rotRangeY*(n.infos[e].z/10);this.sceneNodes[e].x=n.infos[e].x+s,1==e?this.sceneNodes[e].height=n.infos[e].height+a:this.sceneNodes[e].y=n.infos[e].y+a}}});cc._RF.pop()},{}],Loading:[function(t,e,i){"use strict";cc._RF.push(e,"61f1fNOFbZKPoN7duuM93VT","Loading"),cc.Class({extends:cc.Component,properties:{progressBar:cc.ProgressBar},onLoad:function(){cc.sys.isMobile&&cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT),cc.director.preloadScene("game_v1",this.onProgress.bind(this),this.onComplete.bind(this))},onProgress:function(t,e){this.progressBar.progress=t/e},onComplete:function(t){t||cc.director.loadScene("game_v1")}}),cc._RF.pop()},{}],MusicToggle:[function(t,e,i){"use strict";cc._RF.push(e,"9bcd51KbVdE37cQ27yYx/FP","MusicToggle");cc.Class({extends:cc.Component,properties:{onNode:cc.Node,offNode:cc.Node,hintNode:cc.Node,hintText:cc.Label,audioId:-1,music:{type:cc.AudioClip,default:null},anim:cc.Animation,bgVolumn:.8,bgSlider:cc.Slider,bgProgress:cc.ProgressBar,offTimer:-1,appHidden:!1,micActive:!1,game:null},initialize:function(){this.isMusicOn=cc.sys.localStorage.getItem("music"),null==this.isMusicOn&&(this.isMusicOn=!0),this.isMusicOn?this.toggleOn():this.toggleOff(),this.bgSlider.node.on("slide",this.sliderAdjust.bind(this)),this.bgSlider.node.on(cc.Node.EventType.TOUCH_CANCEL,this.volumnCancelled,this),this.bgSlider._N$handle.node.on(cc.Node.EventType.TOUCH_END,this.volumnCancelled,this),this.hidden="";var t="";void 0!==document.hidden?(this.hidden="hidden",t="visibilitychange"):void 0!==document.msHidden?(this.hidden="msHidden",t="msvisibilitychange"):void 0!==document.webkitHidden&&(this.hidden="webkitHidden",t="webkitvisibilitychange"),void 0!==document.addEventListener&&void 0!==document.hidden&&document.addEventListener(t,this.onVisibilityChange.bind(this),!1)},toggleOver:function(){this.hintNode.active=!0},toggleOut:function(){this.hintNode.active=!1},toggleOff:function(){clearTimeout(this.offTimer),this.offTimer=-1,this.onNode.active=!0,this.offNode.active=!1,this.hintText.string="Turn Volumn On",this.bgSlider.node.active=!1,this.audioId>=0&&cc.audioEngine.pauseMusic()},toggleOn:function(){this.offNode.active=!0,this.onNode.active=!1,this.hintText.string="Turn Volumn Off",this.bgSlider.node.active=!0,this.audioId<0?this.audioId=cc.audioEngine.playMusic(this.music,!0,this.bgVolumn):cc.audioEngine.resumeMusic(),0==this.bgVolumn&&(this.bgProgress.progress=this.bgSlider.progress=this.bgVolumn=.8,cc.audioEngine.setMusicVolume(this.bgVolumn))},sliderAdjust:function(t){clearTimeout(this.offTimer),this.bgProgress.progress=t.progress,this.bgVolumn=t.progress,cc.audioEngine.setMusicVolume(this.bgVolumn)},volumnCancelled:function(){var t=this;clearTimeout(this.offTimer),0==this.bgVolumn&&(this.offTimer=setTimeout(function(){t.checkVolumnToggle()},1e3))},checkVolumnToggle:function(){clearTimeout(this.offTimer),0==this.bgVolumn&&this.toggleOff()},onVisibilityChange:function(){var t=document[this.hidden];cc.sys.isNative||(t?(this.appHidden=!0,this.muteAll(!0)):(this.appHidden=!1,this.muteAll(!1)))},onMicChange:function(t){this.micActive=t,t?this.muteAll(!0):this.muteAll(!1)},muteAll:function(t){t=t||this.micActive||this.appHidden,this.game.audioID>=0&&cc.audioEngine.setVolume(this.game.audioID,t?0:1),this.audioId>=0&&cc.audioEngine.setVolume(this.audioId,t?0:this.bgVolumn)},shouldbeMuted:function(){return this.micActive||this.appHidden}});cc._RF.pop()},{}],Pet:[function(t,e,i){"use strict";cc._RF.push(e,"d6968cADRtHaZb/qbYZ/Pea","Pet");cc.Class({extends:cc.Component,properties:{headAnim:cc.Animation,bodyAnim:cc.Animation,mouthNode:cc.Node,idleMouthTimeout:-1,state:null,emotion:"positive",tummy:cc.Node,heartPrefab:cc.Prefab,_heart:cc.Node},onLoad:function(){this.tummy.on(cc.Node.EventType.TOUCH_MOVE,this._onTummyHandler,this),this.tummy.on(cc.Node.EventType.MOUSE_MOVE,this._onTummyHandler,this)},onDestroy:function(){this.tummy.off(cc.Node.EventType.TOUCH_MOVE,this._onTummyHandler,this),this.tummy.off(cc.Node.EventType.MOUSE_MOVE,this._onTummyHandler,this)},play:function(){this._playFurweeAnim("happyidle"),this.state="intro_idle"},playWelcome:function(){},playIntro:function(){"intro_idle"==this.state&&(this._setAnimLastFrameHandler(),this.state="intro_idle_checking")},updateMouth:function(t){if(this._stopIdleMouth(),this.state.startsWith("intro")||this.state.startsWith("wave"));else if("speak"!=this.state)switch(this.state="speak",this.emotion){case"positive":this._playFurweeAnim("tallking_2_hands");break;case"negative":this._playFurweeAnim("sadidle");break;default:var e=["talking_l_a","talking_r_a"],i=Math.floor(Math.random()*e.length);this._playFurweeAnim(e[i])}var n=this.mouthNode.getChildByName("mouth_"+t);n&&(this._clearMouth(),n.active=!0)},startIdle:function(){switch(this.state="idle",this._stopIdleMouth(),this._clearMouth(),this._setIdleMouth(),this.emotion){case"negative":this._playFurweeAnim("sadidle");break;case"positive":this._playFurweeAnim("happyidle");break;default:this._playFurweeAnim("normalidle")}},_setIdleMouth:function(){var t=this,e=Math.floor(2*Math.random());this.mouthNode.getChildByName("idle_"+e).active=!0,this.idleMouthTimeout=setTimeout(function(){t._setIdleMouth()},2e3)},_setAnimLastFrameHandler:function(){this.bodyAnim.off("lastframe",this._animComplete.bind(this)),this.bodyAnim.on("lastframe",this._animComplete.bind(this))},_setAnimFinishHandler:function(){this.bodyAnim.off("finished",this._animComplete.bind(this)),this.bodyAnim.on("finished",this._animComplete.bind(this))},_animComplete:function(){switch(this.bodyAnim.off("finished",this._animComplete.bind(this)),this.bodyAnim.off("lastframe",this._animComplete.bind(this)),this.state){case"intro_idle_checking":this._playFurweeAnim("intro"),this._setAnimFinishHandler(),this.state="intro_jump";break;case"intro_jump":this._playFurweeAnim("happywave"),this._setAnimFinishHandler(),this.state="wave_1";break;case"wave_1":this._playFurweeAnim("tallking_2_hands"),this.state="speak";break;default:this._playFurweeAnim("normalidle"),this.state="idle"}console.log("_animComplete")},_clearMouth:function(){for(var t=0;t<=21;t++){this.mouthNode.getChildByName("mouth_"+t).active=!1}for(var e=0;e<2;e++){this.mouthNode.getChildByName("idle_"+e).active=!1}this.mouthNode.getChildByName("open_mouth").active=!1},_stopIdleMouth:function(){clearTimeout(this.idleMouthTimeout),this.idleMouthTimeout=-1},_playFurweeAnim:function(t){console.log("playAnim",t),this.headAnim.play(t+"_head"),this.bodyAnim.play(t+"_body"),"laugh"==t&&(this._heart?this._heart.getComponent(cc.Animation).play():(this._heart=cc.instantiate(this.heartPrefab),this._heart.y=this.tummy.y,this.node.addChild(this._heart)))},setEmotion:function(t){console.log("setemotion",t),this.emotion=t},isReadyToTalk:function(){return!this.state.startsWith("intro")},_onTummyHandler:function(){"idle"==this.state&&(this.state="laugh",this._playFurweeAnim("laugh"),this._setAnimFinishHandler())}});cc._RF.pop()},{}],SwitchWidget:[function(t,e,i){"use strict";cc._RF.push(e,"810a964NXJI1a/vpIIcE9+o","SwitchWidget");var n=t("Helper").Helper;cc.Class({extends:cc.Component,properties:{},onLoad:function(){n.addCallback(this.onResize.bind(this)),this.onResize(n.width,n.isPcView)},onDestroy:function(){n.removeCallback(this.onResize.bind(this))},onResize:function(t,e){this.node&&(e?this.node.emit("pcView",t):this.node.emit("mobileView",t))}});cc._RF.pop()},{Helper:"Helper"}],UIBase:[function(t,e,i){"use strict";cc._RF.push(e,"066b2YxUHZOrrYhIhIt1Sbl","UIBase");var n=t("UIManager"),o=cc.Class({extends:cc.Component,properties:{sendButton:cc.Node,text:cc.EditBox,microButton:cc.Node,recordButton:cc.Node},startRecord:function(){this.microButton.active=!1,this.recordButton.active=!0,this.text.enabled=!1,o.initRecognition(this),n.instance.game.music.onMicChange(!0),o.useWebRecognition?o.startWebRecognition():o.startAPIRecognition()},stopRecord:function(){this.microButton.active=!0,this.recordButton.active=!1,n.instance.game.music.onMicChange(!1),o.useWebRecognition?o.stopWebRecognition():o.stopAPIRecognition(),this.text.enabled=!0,this.updateUIAfterRecord()},updateUIAfterRecord:function(){this.sendButton.active=0!=this.text.string.length,this.updateSendButton(this.sendButton.active)},updateSendButton:function(t){this.microButton.active=!t},statics:{ui:null,useWebRecognition:!1,recognition:null,textRecognition:"",stream:null,recorder:null,gumStream:null,rec:null,input:null,audioContext:null,initRecognition:function(t){n.uiBase=t,window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,o.useWebRecognition=void 0!=SpeechRecognition,n.instance.debugNode.string+="useWebRecognition:"+o.useWebRecognition+"\n",o.textRecognition=""},startWebRecognition:function(){var t="";o.recognition=new SpeechRecognition,o.recognition.interimResults=!0,o.recognition.continuous=!0,o.recognition.lang="en-US",n.instance.debugNode.string+="startWebRecognition 1\n",o.recognition.onresult=function(e){console.log(e),n.instance.debugNode.string+="startWebRecognition 3"+e+"\n";for(var i="",s=!1,a=e.resultIndex;a<e.results.length;++a)e.results[a].isFinal?(t+=e.results[a][0].transcript,o.textRecognition=t,s=!0):(i+=e.results[a][0].transcript,o.textRecognition=t+i);n.uiBase.text.string=o.textRecognition,n.uiBase.text.enabled&&n.uiBase.updateUIAfterRecord(),n.instance.debugNode.string+="startWebRecognition 2\n",s&&(n.uiBase.stopRecord(),0!=n.uiBase.text.string.length&&n.instance.game.sendHandler())},o.recognition.onerror=function(t){n.instance.debugNode.string+="startWebRecognition error"+t.error+"\n"+t.message+"\n","network"==t.error&&(o.useWebRecognition=!1)},o.recognition.start(),n.instance.debugNode.string+="startWebRecognition 6\n"},stopWebRecognition:function(){o.recognition.stop()},startAPIRecognition:function(){var t=window.AudioContext||window.webkitAudioContext;navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(function(e){o.audioContext=new t,console.log("getUserMedia() success, stream created, initializing Recorder.js ..."),o.gumStream=e,o.input=o.audioContext.createMediaStreamSource(e),o.rec=new Recorder(o.input,{numChannels:1}),o.rec.record(),console.log("Recording started")}).catch(function(t){})},stopAPIRecognition:function(){o.rec.stop(),o.gumStream.getAudioTracks()[0].stop(),o.rec.exportWAV(function(t){var e=new XMLHttpRequest,i=n.instance.game.URL+"/audio-to-text/"+n.instance.game.URL_SUFFIX;e.onreadystatechange=function(){if(e.readyState==XMLHttpRequest.DONE&&200==e.status){var t=JSON.parse(e.responseText);null!=t.text&&(n.uiBase.text.string=t.text,n.uiBase.updateUIAfterRecord())}},e.open("POST",i,!0);var o=new FormData;o.append("audio",t),e.send(o)})}}});cc._RF.pop()},{UIManager:"UIManager"}],UIManager:[function(t,e,i){"use strict";cc._RF.push(e,"81c2cAkUfVFLZ3AlfpdgkhZ","UIManager");var n=t("LayerCamerasMove"),o=t("Furwee").Furwee,s=t("Helper").Helper,a=cc.Class({extends:cc.Component,properties:{isHActive:!0,hNode:cc.Node,vNOde:cc.Node,uiCamera:cc.Camera,musicWidget:cc.Widget,musicButton:cc.Node,startBlock:cc.Node,game:null,cameraMove:n,debugNode:cc.Label},statics:{instance:null,uiBase:null},onLoad:function(){this.startBlock.active=!0,this.node.on("mobileView",this.mobileView.bind(this)),this.node.on("pcView",this.pcView.bind(this)),s.isPcView?this.pcView(s.width):this.mobileView(s.width),setTimeout(function(){s.handleResize()},1),a.instance=this},mobileView:function(t){this.isHActive=!1,this.hNode.active=!1,this.vNOde.active=!0,this.vNOde.width=t,this.musicWidget.bottom=70,this.musicWidget.left=-5,this.musicButton.scale=.6,this.musicButton.x=20;var e=this.node.getComponentsInChildren(cc.Widget);for(var i in e)e[i].updateAlignment();this.vNOde.getComponent("UIBase").sendButton.active=this.game.sendButton.active,this.vNOde.getComponent("UIBase").text.string=this.game.editBox.string,this.vNOde.getComponent("UIBase").text.enabled=this.game.editBox.enabled,this.game.sendButton=this.vNOde.getComponent("UIBase").sendButton,this.game.editBox=this.vNOde.getComponent("UIBase").text,this.game.microButton&&(this.vNOde.getComponent("UIBase").microButton.active=this.game.microButton.active),this.game.recordButton&&(this.vNOde.getComponent("UIBase").recordButton.active=this.game.recordButton.active),this.game.microButton=this.vNOde.getComponent("UIBase").microButton,this.game.recordButton=this.vNOde.getComponent("UIBase").recordButton,a.uiBase&&(a.uiBase=this.vNOde.getComponent("UIBase"))},pcView:function(t){this.isHActive=!0,this.hNode.active=!0,this.vNOde.active=!1,this.hNode.width=t,this.musicWidget.bottom=46,this.musicWidget.left=62,this.musicWidget.updateAlignment(),this.musicButton.scale=1,this.musicButton.x=0;var e=this.node.getComponentsInChildren(cc.Widget);for(var i in e)e[i].updateAlignment();this.hNode.getComponent("UIBase").sendButton.active=this.game.sendButton.active,this.hNode.getComponent("UIBase").text.string=this.game.editBox.string,this.hNode.getComponent("UIBase").text.enabled=this.game.editBox.enabled,this.game.sendButton=this.hNode.getComponent("UIBase").sendButton,this.game.editBox=this.hNode.getComponent("UIBase").text,this.game.microButton&&(this.hNode.getComponent("UIBase").microButton.active=this.game.microButton.active),this.game.recordButton&&(this.hNode.getComponent("UIBase").recordButton.active=this.game.recordButton.active),this.game.microButton=this.hNode.getComponent("UIBase").microButton,this.game.recordButton=this.hNode.getComponent("UIBase").recordButton,a.uiBase&&(a.uiBase=this.hNode.getComponent("UIBase")),this.hNode.getComponent("HUI").adjustMushroom(t)},closeStartBlock:function(){this.startBlock.active=!1,this.cameraMove.initialize(),this.game.blockClickHandler()},isBlockActive:function(){return this.startBlock.active},updateSendButton:function(t){this.isHActive?this.hNode.getComponent("UIBase").updateSendButton(t):this.vNOde.getComponent("UIBase").updateSendButton(t)},toggleDebug:function(){},logout:function(){var t=new XMLHttpRequest;t.open("POST",o.LOGOUT_URL,!0),t.send()},home:function(){var t=new XMLHttpRequest;t.open("POST",o.HOME_URL,!0),t.send()},education:function(){},onScroll:function(t){for(var e=this.game.balloonNode,i=0;i<e.children.length;i++){var n=e.children[i].convertToWorldSpaceAR(cc.v2(0,0)),o=n.y+e.children[i].height/2,s=n.y-e.children[i].height/2;s>1080||o<540?e.children[i].children[0].active=!1:(e.children[i].children[0].active=!0,s=Math.max(650,s),e.children[i].opacity=255-(s-650)/540*255)}}});cc.ScrollView.prototype._calculateBoundary=function(){if(this.content){var t=this.content.getComponent(cc.Layout);t&&t.enabledInHierarchy&&t.updateLayout();var e=this._view.getContentSize(),i=e.width*this._view.anchorX,n=e.height*this._view.anchorY;this._leftBoundary=-i,this._bottomBoundary=-n,this._rightBoundary=this._leftBoundary+e.width,this._topBoundary=this._bottomBoundary+e.height}},cc._RF.pop()},{Furwee:"Furwee",Helper:"Helper",LayerCamerasMove:"LayerCamerasMove"}],VUI:[function(t,e,i){"use strict";cc._RF.push(e,"85f69BVlF9A2K/EpgWMGvqv","VUI");var n=t("UIBase");t("UIManager"),cc.Class({extends:n,properties:{}});cc._RF.pop()},{UIBase:"UIBase",UIManager:"UIManager"}]},{},["Ballon","Game","MusicToggle","Pet","Loading","FitWidget","Furwee","Helper","SwitchWidget","HUI","LayerCamerasMove","UIBase","UIManager","VUI"]);
//# sourceMappingURL=project.js.map
