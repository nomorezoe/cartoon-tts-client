window.__require=function e(t,i,n){function o(a,c){if(!i[a]){if(!t[a]){var h=a.split("/");if(h=h[h.length-1],!t[h]){var r="function"==typeof __require&&__require;if(!c&&r)return r(h,!0);if(s)return s(h,!0);throw new Error("Cannot find module '"+a+"'")}a=h}var d=i[a]={exports:{}};t[a][0].call(d.exports,function(e){return o(t[a][1][e]||e)},d,d.exports,e,t,i,n)}return i[a].exports}for(var s="function"==typeof __require&&__require,a=0;a<n.length;a++)o(n[a]);return o}({Ballon:[function(e,t,i){"use strict";cc._RF.push(t,"27dc3v2SfVPAalyVvDSGo57","Ballon");var n=e("Helper").Helper,o=e("UIManager"),s=cc.Class({extends:cc.Component,properties:{whiteBG:cc.Node,pinkBG:cc.Node,text:cc.Label,stepCount:0},statics:{COLOR_1:new cc.Color(131,88,52),COLOR_2:new cc.Color(255,255,255),index:0},onLoad:function(){this.node.on("mobileView",this.mobileView.bind(this)),this.node.on("pcView",this.pcView.bind(this)),this.index=s.index,s.index++},lateUpdate:function(){this.updateTextHeight>0&&(this.updateTextHeight--,this.node.height=this.bg.height=Math.max(55,this.text.node.height+20),4==this.updateTextHeight&&(this.updateTextHeight=0,this.node.parent.parent.parent.getComponent(cc.ScrollView).scrollToBottom(0),this.node.opacity=255,o.instance.onScroll(null)))},init:function(e,t){t?(this.text.node.color=s.COLOR_1,this.pinkBG.active=!1,this.whiteBG.active=!0,this.bg=this.whiteBG):(this.whiteBG.active=!1,this.pinkBG.active=!0,this.bg=this.pinkBG),this.isFurwee=t,this.text.string=e,this.updateTextHeight=6,n.isPcView||this.mobileView(n.width)},step:function(){this.stepCount++,this.node.opacity},mobileView:function(e){this.text.fontSize=20,this.text.lineHeight=24,this.text.string=this.text.string,this.node.x=0,this.pinkBG.width=357,this.whiteBG.width=357,this.text.node.width=Math.max(190,this.pinkBG.width-40),this.updateTextHeight=Math.max(this.updateTextHeight,2)},pcView:function(){this.text.fontSize=20,this.text.lineHeight=28,this.text.string=this.text.string,this.pinkBG.width=427,this.whiteBG.width=427,this.text.node.width=343,this.updateTextHeight=Math.max(this.updateTextHeight,2)},updateOpacity:function(){var e=this.node.parent,t=this.node.y=e.y;t>0&&t<500&&(this.node.active=!0)}});cc._RF.pop()},{Helper:"Helper",UIManager:"UIManager"}],FitWidget:[function(e,t,i){"use strict";cc._RF.push(t,"dae25grE5tFZotKCIT3gXqz","FitWidget");var n=e("Helper").Helper;cc.Class({extends:cc.Component,properties:{minWidth:-1,minHeight:-1,fitHeight:640},onLoad:function(){n.addCallback(this.onResize.bind(this)),this.canvas=this.node.parent.getComponent(cc.Canvas),this.onResize(n.width,n.isPcView)},onResize:function(e,t){this.node&&e<this.minWidth&&(this.node.scale=e/this.minWidth)}}),cc._RF.pop()},{Helper:"Helper"}],Furwee:[function(e,t,i){"use strict";cc._RF.push(t,"84f37SyDP5Kvo2O5YflkhtI","Furwee"),Object.defineProperty(i,"__esModule",{value:!0}),i.Furwee=void 0;var n={};i.Furwee=n,n.LOGOUT_URL=null,n.HOME_URL=null,n.DEBUG=!0,n.LANG="en",cc._RF.pop()},{}],Game:[function(e,t,i){"use strict";cc._RF.push(t,"aa6b4oHh3RETr68323Kl57q","Game");var n=e("MusicToggle"),o=e("UIManager"),s=e("LayerCamerasMove"),a=(e("Furwee").Furwee,e("Pet")),c=e("../tool/Server").Server;cc.Class({extends:cc.Component,properties:{audioID:-1,historyObjects:[],pet:a,balloonPrefab:cc.Prefab,balloonNode:cc.Node,introSound:{type:cc.AudioClip,default:null},initialMsgJSON:null,furweeIntialized:!1,enableTextInput:!1,uiManager:o,cameraMove:s,music:n,editBox:cc.EditBox,sendButton:cc.Node,nextTalks:[]},start:function(){},onLoad:function(){this.uiManager.game=this,this.cameraMove.game=this,this.music.game=this,this.setEnableTextInput(!1),this.onTextLenChange(this.editBox.string),this.startFurwee()},handleConnect:function(){console.log("connected",this.socket.id)},startFurwee:function(){this.pet.play(),c.getInitialMessage(function(e){if(this.initialMsgJSON=JSON.parse(e),!this.tryToStartFurweeIntro()){var t=this.initialMsgJSON.audio_file_link;cc.loader.load({url:t,type:"wav"})}}.bind(this))},tryToStartFurweeIntro:function(){return!this.uiManager.isBlockActive()&&(!!this.initialMsgJSON&&(!this.furweeIntialized&&(this.furweeIntialized=!0,this.setEnableTextInput(!0),this.onTTSCompleted(this.initialMsgJSON,this.initialMsgJSON.reply),this.historyObjects.push({index:this.historyObjects.length,reply:this.initialMsgJSON.reply,message:this.initialMsgJSON.message}),!0)))},onTTSCompleted:function(e,t){if(e){var i=e.audio_file_link,n=this.addBallon(t,!0).getComponent("Ballon");-1!=this.audioID&&(n.whiteBG.opacity=128,n.text.node.opacity=128),cc.loader.load({url:i,type:"wav"},function(t,i){this._startPlayTalking(i,n,e.lip_sync_animation)}.bind(this))}},_startTalk:function(e,t){this.audioID=cc.audioEngine.play(e),this.audioID&&this.music.shouldbeMuted()&&cc.audioEngine.setVolume(this.audioID,0),this.audioOffset=0,this.audioInfo=t,this.updateMouth(),cc.audioEngine.setFinishCallback(this.audioID,this._completeTalk.bind(this))},_completeTalk:function(){if(this.audioID=-1,this.pet.startIdle(),this.nextTalks.length){var e=this.nextTalks.splice(0,1)[0];e.balloonComp.whiteBG.opacity=255,e.balloonComp.text.node.opacity=255,this._startTalk(e.audioRes,e.info)}},_startPlayTalking:function(e,t,i){var n=this;this.pet.isReadyToTalk()?-1!=this.audioID?this.nextTalks.push({balloonComp:t,audioRes:e,info:i}):this._startTalk(e,i):setTimeout(function(){n._startPlayTalking(e,t,i)},16)},didReturnHandler:function(){this.sendHandler(),setTimeout(function(){this.editBox.focus()}.bind(this),0)},sendHandler:function(){if(this.enableTextInput){var e=this.editBox.string;0!=e.trim().length&&(this.pet.resetIdle(),this.setEnableTextInput(!1),this.addBallon(e,!1),this.editBox.string="",cc.sys.isMobile?this.editBox.blur():this.editBox.focus(),this.onTextLenChange(this.editBox.string),c.getMessage(e,this.historyObjects,function(e){var t=JSON.parse(e);this.setEnableTextInput(!0),this.onTTSCompleted(t,t.reply),this.historyObjects.push({index:this.historyObjects.length,reply:t.reply,message:t.message})}.bind(this)),c.getEmotion(e,function(e){var t=JSON.parse(e);this.pet.setEmotion(t.emotion)}.bind(this)))}},updateMouth:function(){var e=this.audioInfo[this.audioOffset].viseme_id;this.pet.updateMouth(e)},update:function(e){if(-1!=this.audioID)for(var t=cc.audioEngine.getCurrentTime(this.audioID);this.audioInfo.length>this.audioOffset&&this.audioInfo[this.audioOffset].audio_offset_ms<1e3*t+15;)this.updateMouth(),this.audioOffset+=1},onTextLenChange:function(e){this.sendButton.active=0!=e.length,this.uiManager.updateSendButton(this.sendButton.active)},addBallon:function(e,t){for(var i=0;i<this.balloonNode.children.length;++i)this.balloonNode.children[i].getComponent("Ballon").step();var n=cc.instantiate(this.balloonPrefab);return n.getComponent("Ballon").init(e,t),n.opacity=0,this.balloonNode.addChild(n),n},blockClickHandler:function(){this.music.initialize(),this.tryToStartFurweeIntro(),this.pet.playWelcome()},errorClickHandler:function(){window.captureError&&window.captureError()},setEnableTextInput:function(e){this.enableTextInput=e}});cc._RF.pop()},{"../tool/Server":"Server",Furwee:"Furwee",LayerCamerasMove:"LayerCamerasMove",MusicToggle:"MusicToggle",Pet:"Pet",UIManager:"UIManager"}],HUI:[function(e,t,i){"use strict";cc._RF.push(t,"16778DqrPJB4oJ6YF7w5oba","HUI");var n=e("UIBase"),o=e("LayerCamerasMove"),s=cc.Class({extends:n,properties:{mushroom:cc.Node,showTopButton:cc.Node,topUI:cc.Node,_isShowTop:!1},statics:{MAX_WIDTH:2200},onLoad:function(){this.text._impl._elem.autocomplete="off",this.showTopButton.on(cc.Node.EventType.MOUSE_ENTER,this.showTop.bind(this))},onDestroy:function(){this.showTopButton.off(cc.Node.EventType.MOUSE_ENTER,this.showTop.bind(this)),this.node.off(cc.Node.EventType.TOUCH_END,this.hideTop.bind(this))},adjustMushroom:function(e){var t=(Math.min(s.MAX_WIDTH,e)-1920)/2;this.mushroom.x=Math.max(837,837+t),o.infos[2].x=this.mushroom.x},hideTop:function(){this._isShowTop&&(this._isShowTop=!1,this.topUI.stopAllActions(),this.topUI.runAction(cc.moveTo(.3,cc.v2(0,140))),this.node.off(cc.Node.EventType.TOUCH_END,this.hideTop.bind(this)))},showTop:function(){this._isShowTop||(this._isShowTop=!0,this.topUI.stopAllActions(),this.topUI.runAction(cc.moveTo(.3,cc.v2(0,0))),this.node.off(cc.Node.EventType.TOUCH_END,this.hideTop.bind(this)),this.node.on(cc.Node.EventType.TOUCH_END,this.hideTop.bind(this)))}});cc._RF.pop()},{LayerCamerasMove:"LayerCamerasMove",UIBase:"UIBase"}],Helper:[function(e,t,i){"use strict";cc._RF.push(t,"94704p/KtNCs7j4+H/GbHK6","Helper"),Object.defineProperty(i,"__esModule",{value:!0}),i.Helper=void 0;var n={};i.Helper=n,n.callBacks=[],n.FIT_HEIGHT=1080,n.H_MIN_WIDTH=900,n.MAX_WIDTH=2200,n.width=1920,n.isPcView=!0,n.initialized=!1,n.initialize=function(){n.initialized||(n.initialized=!0,cc.view.setResizeCallback(n.handleResize),n.handleResize())},n.handleResize=function(){var e=cc.view.getFrameSize(),t=n.FIT_HEIGHT/e.height*e.width,i=!0;t<n.H_MIN_WIDTH?(cc.Canvas.instance.designResolution=new cc.Size(t,n.FIT_HEIGHT),cc.view.setDesignResolutionSize(cc.Canvas.instance.designResolution.width,cc.Canvas.instance.designResolution.height,new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME,cc.ContentStrategy.SHOW_ALL)),i=!1):(t=Math.min(n.MAX_WIDTH,t),cc.Canvas.instance.designResolution=new cc.Size(t,n.FIT_HEIGHT),cc.view.setDesignResolutionSize(cc.Canvas.instance.designResolution.width,cc.Canvas.instance.designResolution.height,new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME,cc.ContentStrategy.SHOW_ALL)),i=!0),n.width=t,n.isPcView=i;for(var o=0;o<n.callBacks.length;o++)n.callBacks[o](t,i)},n.addCallback=function(e){n.initialize(),n.callBacks.push(e)},n.removeCallback=function(e){var t=n.callBacks.indexOf(e);-1!=t&&n.splice(t,1)},cc._RF.pop()},{}],LanguagePanel:[function(e,t,i){"use strict";cc._RF.push(t,"af5ccRzJdBI87o5K4xjyiui","LanguagePanel");var n=e("Furwee").Furwee;cc.Class({extends:cc.Component,properties:{toggles:[cc.Toggle],toggleIndex:0},onToggleLanuge:function(e,t){console.log(t),this.toggleIndex=parseInt(t);n.LANG=["en","zh","de","pt","it","ko","es","fr","ja"][this.toggleIndex],console.log(" Furwee.LANG ",n.LANG)},setToggleIndex:function(e){this.toggleIndex=e,this.toggles[this.toggleIndex].check()}});cc._RF.pop()},{Furwee:"Furwee"}],LayerCamerasMove:[function(e,t,i){"use strict";cc._RF.push(t,"f6c90/o6l5A75tCu2UdbNIr","LayerCamerasMove");var n=cc.Class({extends:cc.Component,properties:{sceneNodes:[cc.Node],vx:0,vy:0,ax:.5,maxV:1,rotRangeX:10,rotRangeY:10,screenWidth:0,screenHeight:0,designResolutionHeight:0,designResolutionHeight_2:0,game:null},statics:{infos:null},onLoad:function(){this.screenWidth=cc.view.getDesignResolutionSize().height/cc.view.getCanvasSize().height*cc.view.getCanvasSize().width,this.screenHeight=cc.view.getDesignResolutionSize().width/cc.view.getCanvasSize().width*cc.view.getCanvasSize().height,this.designResolutionHeight=cc.view.getDesignResolutionSize().height,this.designResolutionHeight_2=cc.view.getDesignResolutionSize().height/2,n.infos=[];for(var e=0;e<this.sceneNodes.length;e++){var t={x:this.sceneNodes[e].x,y:this.sceneNodes[e].y,z:this.sceneNodes[e].z,height:this.sceneNodes[e].height};n.infos.push(t)}cc.sys.isMobile||(this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouseMove,this))},onDestroy:function(){this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.MOUSE_MOVE,this.onMouseMove,this)},initialize:function(){console.log(window.DeviceMotionEvent),window.DeviceMotionEvent&&"function"==typeof window.DeviceMotionEvent.requestPermission&&window.DeviceMotionEvent.requestPermission(),window.addEventListener("deviceorientation",this.onDeviceorientation.bind(this))},onTouchMove:function(e){console.log("touch",e)},onDeviceMotion:function(e){},onDeviceorientation:function(e){for(var t=0;t<this.sceneNodes.length;t++){this.screenHeight;var i=n.infos[t].x+e.gamma/90*this.rotRangeX*n.infos[t].z/10,o=e.beta/90*this.rotRangeY*(n.infos[t].z/10);this.sceneNodes[t].x=i,1==t?this.sceneNodes[t].height=n.infos[t].height+o:this.sceneNodes[t].y=n.infos[t].y+o}},onMouseMove:function(e){if(this.game.furweeIntialized)for(var t=0;t<this.sceneNodes.length;t++){var i=this.screenWidth/2,o=this.screenHeight/2,s=(i-e._x)/i*this.rotRangeX*(n.infos[t].z/10),a=(e._y-370)/o*this.rotRangeY*(n.infos[t].z/10);this.sceneNodes[t].x=n.infos[t].x+s,1==t?this.sceneNodes[t].height=n.infos[t].height+a:this.sceneNodes[t].y=n.infos[t].y+a}}});cc._RF.pop()},{}],Loading:[function(e,t,i){"use strict";cc._RF.push(t,"61f1fNOFbZKPoN7duuM93VT","Loading"),cc.Class({extends:cc.Component,properties:{progressBar:cc.ProgressBar,loadingText:cc.Label},onLoad:function(){cc.sys.isMobile&&cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT),cc.director.preloadScene("game_v1",this.onProgress.bind(this),this.onComplete.bind(this));var e=["Furwee can text fluently in four languages-English, Spanish, German and Italian!","Furwee can understand Tagalog, the native language spoken in the Philippines."],t=Math.floor(Math.random()*e.length);this.loadingText.string=e[t]},onProgress:function(e,t){this.progressBar.progress=Math.max(.05,e/t)},onComplete:function(e){e||cc.director.loadScene("game_v1")}}),cc._RF.pop()},{}],MusicToggle:[function(e,t,i){"use strict";cc._RF.push(t,"9bcd51KbVdE37cQ27yYx/FP","MusicToggle");cc.Class({extends:cc.Component,properties:{onNode:cc.Node,offNode:cc.Node,hintNode:cc.Node,hintText:cc.Label,audioId:-1,music:{type:cc.AudioClip,default:null},anim:cc.Animation,bgVolumn:.8,bgSlider:cc.Slider,bgProgress:cc.ProgressBar,offTimer:-1,appHidden:!1,micActive:!1,game:null},initialize:function(){this.isMusicOn=cc.sys.localStorage.getItem("music"),null==this.isMusicOn&&(this.isMusicOn=!0),this.isMusicOn?this.toggleOn():this.toggleOff(),this.bgSlider.node.on("slide",this.sliderAdjust.bind(this)),this.bgSlider.node.on(cc.Node.EventType.TOUCH_CANCEL,this.volumnCancelled,this),this.bgSlider._N$handle.node.on(cc.Node.EventType.TOUCH_END,this.volumnCancelled,this),this.hidden="";var e="";void 0!==document.hidden?(this.hidden="hidden",e="visibilitychange"):void 0!==document.msHidden?(this.hidden="msHidden",e="msvisibilitychange"):void 0!==document.webkitHidden&&(this.hidden="webkitHidden",e="webkitvisibilitychange"),void 0!==document.addEventListener&&void 0!==document.hidden&&document.addEventListener(e,this.onVisibilityChange.bind(this),!1)},toggleOver:function(){this.hintNode.active=!0},toggleOut:function(){this.hintNode.active=!1},toggleOff:function(){clearTimeout(this.offTimer),this.offTimer=-1,this.onNode.active=!0,this.offNode.active=!1,this.hintText.string="Turn Volumn On",this.bgSlider.node.active=!1,this.audioId>=0&&cc.audioEngine.pauseMusic()},toggleOn:function(){this.offNode.active=!0,this.onNode.active=!1,this.hintText.string="Turn Volumn Off",this.bgSlider.node.active=!0,this.audioId<0?this.audioId=cc.audioEngine.playMusic(this.music,!0,this.bgVolumn):cc.audioEngine.resumeMusic(),0==this.bgVolumn&&(this.bgProgress.progress=this.bgSlider.progress=this.bgVolumn=.8,cc.audioEngine.setMusicVolume(this.bgVolumn))},sliderAdjust:function(e){clearTimeout(this.offTimer),this.bgProgress.progress=e.progress,this.bgVolumn=e.progress,cc.audioEngine.setMusicVolume(this.bgVolumn)},volumnCancelled:function(){var e=this;clearTimeout(this.offTimer),0==this.bgVolumn&&(this.offTimer=setTimeout(function(){e.checkVolumnToggle()},1e3))},checkVolumnToggle:function(){clearTimeout(this.offTimer),0==this.bgVolumn&&this.toggleOff()},onVisibilityChange:function(){var e=document[this.hidden];cc.sys.isNative||(e?(this.appHidden=!0,this.muteAll(!0)):(this.appHidden=!1,this.muteAll(!1)))},onMicChange:function(e){this.micActive=e,e?this.muteAll(!0):this.muteAll(!1)},muteAll:function(e){e=e||this.micActive||this.appHidden,this.game.audioID>=0&&cc.audioEngine.setVolume(this.game.audioID,e?0:1),this.audioId>=0&&cc.audioEngine.setVolume(this.audioId,e?0:this.bgVolumn)},shouldbeMuted:function(){return this.micActive||this.appHidden}});cc._RF.pop()},{}],Pet:[function(e,t,i){"use strict";cc._RF.push(t,"d6968cADRtHaZb/qbYZ/Pea","Pet");var n=e("UIManager");cc.Class({extends:cc.Component,properties:{headAnim:cc.Animation,bodyAnim:cc.Animation,mouthNode:cc.Node,idleMouthTimeout:-1,state:null,emotion:"neutral",tummy:cc.Node,heartPrefab:cc.Prefab,_heart:cc.Node,laughSound:{type:cc.AudioClip,default:null},isAnimLaughLoaded:!1,isAnimIdleWaitLoaded:!1},onLoad:function(){this.tummy.on(cc.Node.EventType.TOUCH_MOVE,this._onTummyHandler,this),this.tummy.on(cc.Node.EventType.MOUSE_MOVE,this._onTummyHandler,this),this._randTalkAnims=["talking_l_a"],this._initPetResourceLoading()},onDestroy:function(){this.tummy.off(cc.Node.EventType.TOUCH_MOVE,this._onTummyHandler,this),this.tummy.off(cc.Node.EventType.MOUSE_MOVE,this._onTummyHandler,this)},play:function(){this._playFurweeAnim("happyidle"),this.state="intro_idle"},playWelcome:function(){this._playFurweeAnim("intro"),this._setAnimFinishHandler(),this.state="intro_jump"},playIntro:function(){},updateMouth:function(e){if(this._stopIdleMouth(),this.state.startsWith("intro")||this.state.startsWith("wave"))"wave_waiting"==this.state&&(this._playFurweeAnim("happywave"),this._setAnimFinishHandler(),this.state="wave_1");else if("speak"!=this.state)switch(this.state="speak",this.emotion){case"positive":this._playFurweeAnim("tallking_2_hands");break;case"negative":this._playFurweeAnim("sadidle");break;default:var t=Math.floor(Math.random()*this._randTalkAnims.length);this._playFurweeAnim(this._randTalkAnims[t])}var i=this.mouthNode.getChildByName("mouth_"+e);i&&(this._clearMouth(),i.active=!0)},startIdle:function(){switch(this.state="idle",this._stopIdleMouth(),this._clearMouth(),this._setIdleMouth(),this.emotion){case"negative":this._playFurweeAnim("sadidle");break;case"positive":this._playFurweeAnim("happyidle");break;default:this._playFurweeAnim("normalidle")}},resetIdle:function(){var e=this;this.isAnimIdleWaitLoaded&&(this.idleTimer&&clearTimeout(this.idleTimer),this.idleTimer=setTimeout(function(){e._playFurweeAnim("listenwaitidle")},3e4))},_setIdleMouth:function(){var e=this,t=Math.floor(2*Math.random());this.mouthNode.getChildByName("idle_"+t).active=!0,this.idleMouthTimeout=setTimeout(function(){e._setIdleMouth()},2e3)},_cancelAnimHandler:function(){this.bodyAnim.off("lastframe",this._animComplete.bind(this)),this.bodyAnim.off("finished",this._animComplete.bind(this))},_setAnimLastFrameHandler:function(){this.bodyAnim.off("lastframe",this._animComplete.bind(this)),this.bodyAnim.on("lastframe",this._animComplete.bind(this))},_setAnimFinishHandler:function(){this.bodyAnim.off("finished",this._animComplete.bind(this)),this.bodyAnim.on("finished",this._animComplete.bind(this))},_animComplete:function(){switch(console.log("_animComplete"),this.bodyAnim.off("finished",this._animComplete.bind(this)),this.bodyAnim.off("lastframe",this._animComplete.bind(this)),this.state){case"intro_jump":this._playFurweeAnim("normalidle"),this.state="wave_waiting";break;case"wave_1":this._playFurweeAnim("talking_l_a"),this.state="speak",this.resetIdle();break;default:this._playFurweeAnim("normalidle"),this.state="idle"}},_clearMouth:function(){for(var e=0;e<=21;e++){this.mouthNode.getChildByName("mouth_"+e).active=!1}for(var t=0;t<2;t++){this.mouthNode.getChildByName("idle_"+t).active=!1}this.mouthNode.getChildByName("open_mouth").active=!1},_stopIdleMouth:function(){clearTimeout(this.idleMouthTimeout),this.idleMouthTimeout=-1},_playFurweeAnim:function(e){console.log("playAnim",e),this._cancelAnimHandler(),this.headAnim.play(e+"_head"),this.bodyAnim.play(e+"_body"),"laugh"==e&&(this._heart?this._heart.getComponent(cc.Animation).play():(this._heart=cc.instantiate(this.heartPrefab),this._heart.y=this.tummy.y,this.node.addChild(this._heart)),n.instance.game.music.shouldbeMuted()||cc.audioEngine.play(this.laughSound))},setEmotion:function(e){console.log("setemotion",e),this.emotion=e},isReadyToTalk:function(){return!this.state.startsWith("intro")},_onTummyHandler:function(){this.isAnimLaughLoaded&&"idle"==this.state&&(this.state="laugh",this._playFurweeAnim("laugh"),this._setAnimFinishHandler())},_initPetResourceLoading:function(){this._initLaugh()},_initLaugh:function(){cc.loader.loadRes("pet_resources_laugh",function(e,t){e?cc.error(e.message||e):(this._addAnimClips(t.data),this.isAnimLaughLoaded=!0,this._initIdleWait())}.bind(this))},_initIdleWait:function(){cc.loader.loadRes("pet_resources_idlewait",function(e,t){e?cc.error(e.message||e):(this._addAnimClips(t.data),this.isAnimIdleWaitLoaded=!0,this.resetIdle(),this._initTalk())}.bind(this))},_initTalk:function(){cc.loader.loadRes("pet_resources_talk",function(e,t){e?cc.error(e.message||e):(this._addAnimClips(t.data),this._randTalkAnims=this._randTalkAnims.concat(["talking_r_a","talking_l_b","talking_l_c","talking_r_b","talking_r_c"]),console.log(this._randTalkAnims))}.bind(this))},_addAnimClips:function(e){for(var t=e.getChildByName("body").getComponent(cc.Animation),i=e.getChildByName("head").getComponent(cc.Animation),n=0;n<t._clips.length;n++)this.bodyAnim.addClip(t._clips[n],t._clips[n].name);for(var o=0;o<i._clips.length;o++)this.headAnim.addClip(i._clips[o],i._clips[o].name)}});cc._RF.pop()},{UIManager:"UIManager"}],Server:[function(e,t,i){"use strict";cc._RF.push(t,"7e158KbICxKg4gH2KQWs7uw","Server"),Object.defineProperty(i,"__esModule",{value:!0}),i.Server=void 0;var n=e("Furwee").Furwee,o={};i.Server=o,o.URL="http://40.121.137.102",o.URL_SUFFIX="",o.init=function(){n.DEBUG?(o.URL="https://furwee.ai/api",o.URL_SUFFIX="",n.LOGOUT_URL="https://furwee.ai/logout",n.HOME_URL="https://furwee.ai/home"):(o.URL="/api",o.URL_SUFFIX="",n.LOGOUT_URL="/logout",n.HOME_URL="/")},o.init(),o.getInitialMessage=function(e){var t=new XMLHttpRequest,i=o.URL+"/initial-message/"+o.URL_SUFFIX;t.onreadystatechange=function(){t.readyState==XMLHttpRequest.DONE&&200==t.status&&e(t.responseText)},t.open("GET",i,!0),t.setRequestHeader("Content-type","application/json"),t.send("")},o.getMessage=function(e,t,i){var n=new XMLHttpRequest,s=o.URL+"/messages/"+o.URL_SUFFIX;n.onreadystatechange=function(){n.readyState==XMLHttpRequest.DONE&&200==n.status&&i(n.responseText)};var a=JSON.stringify({message:e,history:t});n.open("POST",s,!0),n.setRequestHeader("Content-type","application/json"),n.send(a)},o.getEmotion=function(e,t){var i=new XMLHttpRequest,n=o.URL+"/emotion/"+o.URL_SUFFIX;i.onreadystatechange=function(){i.readyState==XMLHttpRequest.DONE&&200==i.status&&t(i.responseText)};var s=JSON.stringify({message:e});i.open("POST",n,!0),i.setRequestHeader("Content-type","application/json"),i.send(s)},cc._RF.pop()},{Furwee:"Furwee"}],SpeechTool:[function(e,t,i){"use strict";cc._RF.push(t,"e4959p4hntHxp6X05r0wP4B","SpeechTool"),Object.defineProperty(i,"__esModule",{value:!0}),i.SpeechTool=void 0;var n=e("UIManager"),o=e("Furwee").Furwee,s={};i.SpeechTool=s,s.ui=null,s.useWebRecognition=!1,s.recognition=null,s.textRecognition="",s.stream=null,s.recorder=null,s.gumStream=null,s.rec=null,s.input=null,s.audioContext=null,s.checkWebRecognition=!1,s.isWorkingChecked=!1,s.initRecognition=function(e){n.uiBase=e,s.textRecognition="",s.checkWebRecognition||(s.checkWebRecognition=!0,window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,s.useWebRecognition=void 0!=SpeechRecognition,n.instance.debugNode.string+="useWebRecognition:"+s.useWebRecognition+"\n")},s.isWorking=function(){return!s.recognition||(!!(s.isWorkingChecked||(s.isWorkingChecked=!0,n.instance.debugNode.string+="isWorking "+s.recognition.audiostart+"\n"+s.recognition.audioend+s.recognition.end+"\n",s.recognition.audiostart||s.recognition.audioend||s.recognition.end))||(s.useWebRecognition=!1,n.instance.debugNode.string+="useWebRecognition false \n",s.recognition.onerror=null,s.recognition.onresult=null,s.recognition.onaudiostart=null,s.recognition.onaaudioend=null,s.recognition.onend=null,!1))},s.startWebRecognition=function(){var e="";s.recognition&&(s.recognition.onerror=null,s.recognition.onresult=null,s.recognition.onaudiostart=null,s.recognition.onaaudioend=null,s.recognition.onend=null),s.recognition=new SpeechRecognition,s.recognition.interimResults=!0,s.recognition.continuous=!0,s.recognition.lang=o.LANG,n.instance.debugNode.string+="startWebRecognition 1\n",s.recognition.onresult=function(t){console.log(t),n.instance.debugNode.string+="startWebRecognition 3"+t+"\n";for(var i="",o=!1,a=t.resultIndex;a<t.results.length;++a)t.results[a].isFinal?(e+=t.results[a][0].transcript,s.textRecognition=e,o=!0):(i+=t.results[a][0].transcript,s.textRecognition=e+i);n.uiBase.text.string=s.textRecognition,n.uiBase.text.enabled&&n.uiBase.updateUIAfterRecord(),n.instance.debugNode.string+="startWebRecognition 2\n",o&&(n.uiBase.stopRecord(),0!=n.uiBase.text.string.length&&n.instance.game.sendHandler())},s.recognition.onerror=function(e){n.instance.debugNode.string+="startWebRecognition error"+e.error+"\n"+e.message+"\n","network"==e.error&&(s.useWebRecognition=!1)},s.recognition.onaudiostart=function(e){n.instance.debugNode.string+="onaudiostart "+e+"\n",e.target.audiostart=!0},s.recognition.onaudioend=function(e){n.instance.debugNode.string+="onaudioend "+e+"\n",e.target.audioend=!0},s.recognition.onend=function(e){n.instance.debugNode.string+="onend "+e+"\n",e.target.end=!0},s.recognition.start(),n.instance.debugNode.string+="startWebRecognition 6\n"},s.stopWebRecognition=function(){s.recognition.stop()},s.startAPIRecognition=function(){var e=window.AudioContext||window.webkitAudioContext;navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(function(t){s.audioContext=new e,console.log("getUserMedia() success, stream created, initializing Recorder.js ..."),s.gumStream=t,s.input=s.audioContext.createMediaStreamSource(t),s.rec=new Recorder(s.input,{numChannels:1}),s.rec.record(),console.log("Recording started")}).catch(function(e){})},s.stopAPIRecognition=function(){s.rec.stop(),s.gumStream.getAudioTracks()[0].stop(),s.rec.exportWAV(function(e){var t=new XMLHttpRequest,i=n.instance.game.URL+"/audio-to-text/"+n.instance.game.URL_SUFFIX;t.onreadystatechange=function(){if(t.readyState==XMLHttpRequest.DONE&&200==t.status){var e=JSON.parse(t.responseText);null!=e.text&&(n.uiBase.text.string=e.text,n.uiBase.updateUIAfterRecord())}},t.open("POST",i,!0);var o=new FormData;o.append("audio",e),t.send(o)})},cc._RF.pop()},{Furwee:"Furwee",UIManager:"UIManager"}],SwitchWidget:[function(e,t,i){"use strict";cc._RF.push(t,"810a964NXJI1a/vpIIcE9+o","SwitchWidget");var n=e("Helper").Helper;cc.Class({extends:cc.Component,properties:{},onLoad:function(){n.addCallback(this.onResize.bind(this)),this.onResize(n.width,n.isPcView)},onDestroy:function(){n.removeCallback(this.onResize.bind(this))},onResize:function(e,t){this.node&&(t?this.node.emit("pcView",e):this.node.emit("mobileView",e))}});cc._RF.pop()},{Helper:"Helper"}],UIBase:[function(e,t,i){"use strict";cc._RF.push(t,"066b2YxUHZOrrYhIhIt1Sbl","UIBase");var n=e("UIManager"),o=e("SpeechTool").SpeechTool;cc.Class({extends:cc.Component,properties:{sendButton:cc.Node,text:cc.EditBox,microButton:cc.Node,recordButton:cc.Node,languagePanel:cc.Node},onLoad:function(){this.text._impl._elem.autocomplete="off"},startRecord:function(){this.microButton.active=!1,this.recordButton.active=!0,this.text.enabled=!1,o.initRecognition(this),n.instance.game.music.onMicChange(!0),o.useWebRecognition&&o.isWorking()?o.startWebRecognition():o.startAPIRecognition()},stopRecord:function(){this.microButton.active=!0,this.recordButton.active=!1,n.instance.game.music.onMicChange(!1),o.useWebRecognition?o.stopWebRecognition():o.stopAPIRecognition(),this.text.enabled=!0,this.updateUIAfterRecord()},updateUIAfterRecord:function(){this.sendButton.active=0!=this.text.string.length,this.updateSendButton(this.sendButton.active)},updateSendButton:function(e){this.microButton.active=!e},toggleLanguagePanel:function(){this.languagePanel.active=!this.languagePanel.active,this.languagePanel.active&&(n.instance.languagePanel=this.languagePanel,console.log("toggle",n.instance.languagePanel))},hideLanguagePanel:function(){this.languagePanel.active=!1,n.instance.languagePanel=null}});cc._RF.pop()},{SpeechTool:"SpeechTool",UIManager:"UIManager"}],UIManager:[function(e,t,i){"use strict";cc._RF.push(t,"81c2cAkUfVFLZ3AlfpdgkhZ","UIManager");var n=e("LayerCamerasMove"),o=e("Furwee").Furwee,s=e("Helper").Helper,a=cc.Class({extends:cc.Component,properties:{isHActive:!0,hNode:cc.Node,vNOde:cc.Node,uiCamera:cc.Camera,musicWidget:cc.Widget,musicButton:cc.Node,startBlock:cc.Node,game:null,cameraMove:n,debugNode:cc.Label,languagePanel:null},statics:{instance:null,uiBase:null},onLoad:function(){this.startBlock.active=!0,this.node.on("mobileView",this.mobileView.bind(this)),this.node.on("pcView",this.pcView.bind(this)),s.isPcView?this.pcView(s.width):this.mobileView(s.width),setTimeout(function(){s.handleResize()},1),a.instance=this},mobileView:function(e){this.isHActive=!1,this.hNode.active=!1,this.vNOde.active=!0,this.vNOde.width=e,this.musicWidget.bottom=89,this.musicWidget.left=-5,this.musicButton.scale=.5556,this.musicButton.x=20;var t=this.node.getComponentsInChildren(cc.Widget);for(var i in t)t[i].updateAlignment();this.vNOde.getComponent("UIBase").sendButton.active=this.game.sendButton.active,this.vNOde.getComponent("UIBase").text.string=this.game.editBox.string,this.vNOde.getComponent("UIBase").text.enabled=this.game.editBox.enabled,this.game.sendButton=this.vNOde.getComponent("UIBase").sendButton,this.game.editBox=this.vNOde.getComponent("UIBase").text,this.languagePanel&&this.languagePanel!=this.vNOde.getComponent("UIBase").languagePanel&&(this.vNOde.getComponent("UIBase").languagePanel.active=!0,this.vNOde.getComponent("UIBase").languagePanel.getComponent("LanguagePanel").setToggleIndex(this.languagePanel.getComponent("LanguagePanel").toggleIndex),this.languagePanel=this.vNOde.getComponent("UIBase").languagePanel),this.game.microButton&&(this.vNOde.getComponent("UIBase").microButton.active=this.game.microButton.active),this.game.recordButton&&(this.vNOde.getComponent("UIBase").recordButton.active=this.game.recordButton.active),this.game.microButton=this.vNOde.getComponent("UIBase").microButton,this.game.recordButton=this.vNOde.getComponent("UIBase").recordButton,a.uiBase&&(a.uiBase=this.vNOde.getComponent("UIBase"))},pcView:function(e){this.isHActive=!0,this.hNode.active=!0,this.vNOde.active=!1,this.hNode.width=e,this.musicWidget.bottom=24,this.musicWidget.left=62,this.musicWidget.updateAlignment(),this.musicButton.scale=1,this.musicButton.x=0;var t=this.node.getComponentsInChildren(cc.Widget);for(var i in t)t[i].updateAlignment();this.hNode.getComponent("UIBase").sendButton.active=this.game.sendButton.active,this.hNode.getComponent("UIBase").text.string=this.game.editBox.string,this.hNode.getComponent("UIBase").text.enabled=this.game.editBox.enabled,this.game.sendButton=this.hNode.getComponent("UIBase").sendButton,this.game.editBox=this.hNode.getComponent("UIBase").text,this.languagePanel&&this.languagePanel!=this.hNode.getComponent("UIBase").languagePanel&&(this.hNode.getComponent("UIBase").languagePanel.active=!0,this.hNode.getComponent("UIBase").languagePanel.getComponent("LanguagePanel").setToggleIndex(this.languagePanel.getComponent("LanguagePanel").toggleIndex),this.languagePanel=this.hNode.getComponent("UIBase").languagePanel),this.game.microButton&&(this.hNode.getComponent("UIBase").microButton.active=this.game.microButton.active),this.game.recordButton&&(this.hNode.getComponent("UIBase").recordButton.active=this.game.recordButton.active),this.game.microButton=this.hNode.getComponent("UIBase").microButton,this.game.recordButton=this.hNode.getComponent("UIBase").recordButton,a.uiBase&&(a.uiBase=this.hNode.getComponent("UIBase")),this.hNode.getComponent("HUI").adjustMushroom(e)},closeStartBlock:function(){this.startBlock.active=!1,this.cameraMove.initialize(),this.game.blockClickHandler()},isBlockActive:function(){return this.startBlock.active},updateSendButton:function(e){this.isHActive?this.hNode.getComponent("UIBase").updateSendButton(e):this.vNOde.getComponent("UIBase").updateSendButton(e)},toggleDebug:function(){o.DEBUG&&(this.debugNode.node.active=!this.debugNode.node.acctive)},logout:function(){window.location.href=o.LOGOUT_URL},home:function(){window.location.href=o.HOME_URL},education:function(){},onScroll:function(e){for(var t=this.game.balloonNode,i=0;i<t.children.length;i++){var n=t.children[i].convertToWorldSpaceAR(cc.v2(0,0)),o=n.y+t.children[i].height/2,s=n.y-t.children[i].height/2;s>1080||o<540?t.children[i].children[0].active=!1:(t.children[i].children[0].active=!0,s=Math.max(650,s),t.children[i].opacity=255-(s-650)/540*255)}}});cc.ScrollView.prototype._calculateBoundary=function(){if(this.content){var e=this.content.getComponent(cc.Layout);e&&e.enabledInHierarchy&&e.updateLayout();var t=this._view.getContentSize(),i=t.width*this._view.anchorX,n=t.height*this._view.anchorY;this._leftBoundary=-i,this._bottomBoundary=-n,this._rightBoundary=this._leftBoundary+t.width,this._topBoundary=this._bottomBoundary+t.height}},cc.EditBox.prototype._showLabels=function(){this._isLabelVisible=!0,this._updateLabels()},cc._RF.pop()},{Furwee:"Furwee",Helper:"Helper",LayerCamerasMove:"LayerCamerasMove"}],VUI:[function(e,t,i){"use strict";cc._RF.push(t,"85f69BVlF9A2K/EpgWMGvqv","VUI");var n=e("UIBase");e("UIManager"),cc.Class({extends:n,properties:{}});cc._RF.pop()},{UIBase:"UIBase",UIManager:"UIManager"}]},{},["Ballon","Game","MusicToggle","Pet","Loading","FitWidget","Furwee","Helper","Server","SpeechTool","SwitchWidget","HUI","LanguagePanel","LayerCamerasMove","UIBase","UIManager","VUI"]);
//# sourceMappingURL=project.js.map
