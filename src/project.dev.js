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
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aa6b4oHh3RETr68323Kl57q", "Game");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        editBox: cc.EditBox
      },
      onLoad: function onLoad() {
        var isLocalHost = false;
        -1 == window.location.href.indexOf("localhost") && -1 == window.location.href.indexOf("127.0.0.1") || (isLocalHost = true);
        console.log("isLocalHost", isLocalHost);
        this.socket = new window.io(isLocalHost ? "http://127.0.0.1:3000" : "http://172.31.28.246:3000", {
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
        var remoteUrl = "http://127.0.0.1:3000/output/?fileName=" + info.file;
        cc.loader.load({
          url: remoteUrl,
          type: "wav"
        }, function(err, res) {
          cc.audioEngine.play(res);
        });
      },
      sendHandler: function sendHandler() {
        var sendText = this.editBox.string;
        this.socket.emit("tts", sendText);
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "Game" ]);
//# sourceMappingURL=project.dev.js.map
