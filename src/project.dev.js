window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  CamMove: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2cd67RFoK5K1bWUfo3GU/9x", "CamMove");
    "use strict";
    var CamAdjust = cc.Class({
      extends: cc.Component,
      properties: {
        cameras: [ cc.Camera ],
        sceneNodes: [ cc.Node ],
        infos: null,
        vx: 0,
        vy: 0,
        ax: .1,
        maxV: .3,
        rotRangeX: 1,
        rotRangeY: 10,
        screenWidth: 0,
        designResolutionHeight: 0,
        designResolutionHeight_2: 0
      },
      onLoad: function onLoad() {
        this.screenWidth = cc.view.getDesignResolutionSize().height / cc.view.getCanvasSize().height * cc.view.getCanvasSize().width;
        this.designResolutionHeight = cc.view.getDesignResolutionSize().height;
        this.designResolutionHeight_2 = cc.view.getDesignResolutionSize().height / 2;
        this.infos = [];
        for (var i = 0; i < this.sceneNodes.length; i++) {
          var info = {
            x: this.sceneNodes[i].eulerAngles.x,
            y: this.sceneNodes[i].eulerAngles.y
          };
          this.infos.push(info);
        }
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
      },
      onDestroy: function onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
      },
      onTouchMove: function onTouchMove(evt) {},
      onMouseMove: function onMouseMove(evt) {
        var targetY = (this.screenWidth / 2 - evt._x) / (this.screenWidth / 2) * this.rotRangeY;
        var targetX = -Math.pow(1 - evt._y / this.designResolutionHeight, 3) * this.rotRangeX * 2;
        var currentX = this.sceneNodes[0].eulerAngles.x;
        var currentY = this.sceneNodes[0].eulerAngles.y;
        var timeY = Math.abs(targetY - currentY) / this.rotRangeY;
        var timeX = Math.abs(targetX - currentX) / this.rotRangeX;
        console.log("time", timeX, timeY);
        for (var i = 0; i < this.sceneNodes.length; i++) {
          var rotate3DTo = cc.rotate3DTo(Math.max(timeX, timeY), cc.v3(targetX + this.infos[i].x, targetY + this.infos[i].y, 0));
          this.sceneNodes[i].stopAllActions();
          this.sceneNodes[i].runAction(rotate3DTo.easing(cc.easeOut(1)));
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Eye: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40ee8VmmVRIVoMRa4vSDXGF", "Eye");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        stage: cc.Node,
        eye: cc.Node
      },
      onLoad: function onLoad() {
        this.randX = 8;
        this.randY = 1.5;
        this.stage.on(cc.Node.EventType.MOUSE_MOVE, this.mouseMoveHandler, this);
      },
      touchMoveHandler: function touchMoveHandler(evt) {
        console.log(evt);
      },
      mouseMoveHandler: function mouseMoveHandler(evt) {
        var worldPos = this.stage.convertToWorldSpaceAR(cc.v2(evt.getLocationX(), evt.getLocationY()));
        worldPos = cc.v2(evt.getLocationX(), evt.getLocationY());
        var pos = this.node.convertToNodeSpaceAR(worldPos);
        var len = 0;
        var tan = 0;
        var ctan = 0;
        if (0 != pos.x && 0 != pos.y) {
          pos.x < 0 ? pos.x = Math.max(pos.x, -8) : pos.x = Math.min(pos.x, 8);
          pos.y < 0 ? pos.y = Math.max(pos.y, -1.5) : pos.y = Math.min(pos.y, 1.5);
          var len2 = Math.pow(pos.x, 2) * Math.pow(pos.y, 2) / (Math.pow(pos.x, 2) + Math.pow(pos.y, 2));
          len = Math.pow(len2, .5);
          tan = pos.y / len;
          ctan = pos.x / len;
        }
        var posX = len * ctan;
        var posY = len * tan;
        this.eye.setPosition(posX, posY);
        console.log("set pos", posX, posY);
      }
    });
    cc._RF.pop();
  }, {} ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aa6b4oHh3RETr68323Kl57q", "Game");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        editBox: cc.EditBox,
        audioID: -1,
        mouthNode: cc.Node,
        mouthIsReset: true
      },
      onLoad: function onLoad() {
        var isLocalHost = false;
        -1 == window.location.href.indexOf("localhost") && -1 == window.location.href.indexOf("127.0.0.1") || (isLocalHost = true);
        console.log("isLocalHost", isLocalHost);
        this.urlAddress = isLocalHost ? "http://127.0.0.1:3000" : "http://13.115.222.147:3000";
        this.socket = new window.io(this.urlAddress, {
          transports: [ "websocket", "polling", "flashsocket" ]
        });
        this.socket.on("connect", this.handleConnect.bind(this));
        this.socket.on("onTTSCompleted", this.onTTSCompleted.bind(this));
      },
      handleConnect: function handleConnect() {
        console.log("connected", this.socket.id);
      },
      onTTSCompleted: function onTTSCompleted(info) {
        if (!info) return;
        console.log("onTTSCompleted", info.file, info.info);
        this.audioInfo = info.info;
        var remoteUrl = this.urlAddress + "/output/?fileName=" + info.file;
        cc.loader.load({
          url: remoteUrl,
          type: "wav"
        }, function(err, res) {
          this.audioID = cc.audioEngine.play(res);
          this.audioOffset = 0;
          this.updateMouth();
          cc.audioEngine.setFinishCallback(this.audioID, function() {
            this.audioID = -1;
            this.mouthIsReset = false;
          }.bind(this));
        }.bind(this));
      },
      sendHandler: function sendHandler() {
        var sendText = this.editBox.string;
        if ("" == sendText) return;
        this.socket.emit("tts", sendText);
      },
      updateMouth: function updateMouth() {
        var id = this.audioInfo[this.audioOffset].id;
        var node = this.mouthNode.getChildByName("mouth_" + id);
        if (node) {
          for (var i = 0; i <= 21; i++) {
            var node2 = this.mouthNode.getChildByName("mouth_" + i);
            node2.active = false;
          }
          node.active = true;
        }
      },
      update: function update(dt) {
        if (-1 != this.audioID) {
          var time = cc.audioEngine.getCurrentTime(this.audioID);
          while (this.audioInfo.length > this.audioOffset && this.audioInfo[this.audioOffset].audioOffset < 1e3 * time + 15) {
            this.updateMouth();
            this.audioOffset += 1;
          }
        } else if (!this.mouthIsReset) {
          this.mouthIsReset = true;
          this.mouthNode.getChildByName("mouth_0").active = true;
          for (var i = 1; i <= 21; i++) {
            var node2 = this.mouthNode.getChildByName("mouth_" + i);
            node2.active = false;
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61f1fNOFbZKPoN7duuM93VT", "Loading");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        progressBar: cc.ProgressBar
      },
      onLoad: function onLoad() {
        cc.director.preloadScene("game", this.onProgress.bind(this), this.onComplete.bind(this));
      },
      onProgress: function onProgress(completedCount, totalCount) {
        this.progressBar.progress = completedCount / totalCount;
      },
      onComplete: function onComplete(error) {
        error || cc.director.loadScene("game");
      }
    });
    cc._RF.pop();
  }, {} ],
  MusicToggle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9bcd51KbVdE37cQ27yYx/FP", "MusicToggle");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        onNode: cc.Node,
        offNode: cc.Node,
        hintNode: cc.Node,
        hintText: cc.Label,
        audioId: null,
        music: cc.AudioClip
      },
      onLoad: function onLoad() {
        this.isMusicOn = cc.sys.localStorage.getItem("music");
        null == this.isMusicOn && (this.isMusicOn = true);
        this.isMusicOn ? this.toggleOn(true) : this.toggleOff();
      },
      toggleOver: function toggleOver() {
        this.hintNode.active = true;
      },
      toggleOut: function toggleOut() {
        this.hintNode.active = false;
      },
      toggleOff: function toggleOff() {
        this.onNode.active = true;
        this.offNode.active = false;
        this.hintText.string = "Turn Volumn On";
        null != this.audioId && cc.audioEngine.pauseMusic();
      },
      toggleOn: function toggleOn() {
        this.offNode.active = true;
        this.onNode.active = false;
        this.hintText.string = "Turn Volumn Off";
        this.audioId ? cc.audioEngine.resumeMusic() : this.audioId = cc.audioEngine.playMusic(this.music, true);
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "CamMove", "Eye", "Game", "MusicToggle", "Loading" ]);
//# sourceMappingURL=project.dev.js.map
