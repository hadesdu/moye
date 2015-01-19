/*! 2015 Baidu Inc. All Rights Reserved */
define("ui/Dialog",["require","jquery","./lib","./Control","./Mask","./painter"],function(require){var e=require("jquery"),t=require("./lib"),n=require("./Control"),i=require("./Mask"),r=n.extend({type:"Dialog",options:{title:"",content:"",close:"x",footer:"",width:400,mask:!0,maskClickClose:!0,hideDispose:!1,level:10,buttons:null},init:function(e){this.$parent(e),this.visible=!1},initStructure:function(){var t=this.helper,n=[this.close?t.getPartHTML("close","div",this.close):"",t.getPartHTML("header","div"),t.getPartHTML("body","div"),t.getPartHTML("footer","div")],r=this.level;if(e(this.main).html(n.join("")).css("zIndex",r).appendTo(document.body),this.mask)this.mask=i.create({skin:"dialog",level:r-1}).render()},initEvents:function(){if(this.delegate(this.main,"click",this._onMainClicked),this.mask&&this.maskClickClose)this.mask.on("click",e.proxy(this._onCloseClicked,this))},_onMainClicked:function(t){var n=e(t.target),i=this.helper,r=this.main;this.fire(t);var o=n.closest("."+i.getPrimaryClassName("close"),r)[0];if(o)return void this._onCloseClicked();var a=n.closest("."+i.getPrimaryClassName("button"),r)[0];if(a)return t.preventDefault(),void this.fire("buttonclick",{target:t.target,part:n.data("part")});else return void 0},_onWindowResize:function(){this._position()},_onCloseClicked:function(){var t=new e.Event("hide");if(this.fire(t),!t.isDefaultPrevented())this.hide()},repaint:require("./painter").createRepaint(n.prototype.repaint,{name:["width","height"],paint:function(n,i,r){var o=e(this.main);i=this.width=parseInt(i,10)||o.width(),r=this.height=parseInt(r,10)||o.height(),e(this.main).css({width:i+"px",marginLeft:-i/2+"px",marginTop:-r/2+"px"}),t.fixed(this.main,{top:"50%",left:"50%"})}},{name:["title"],paint:function(e,t){this.helper.getPart("header").innerHTML=t}},{name:["content"],paint:function(e,t){this.helper.getPart("body").innerHTML=t}},{name:["buttons","footer"],paint:function(e,n,i){var r=this.helper.getPart("footer");if(i)r.innerHTML=i,this.buttons=null;if(n)r.innerHTML=t.map(n,this.getFooterButtonHTML,this).join("")}},{name:["visible"],paint:function(e,t){if(t)this.addState("visible"),this.set({width:0,height:0}),this.mask&&this.mask.show();else this.removeState("visible").undelegate(window,"resize",this._onWindowResize),this.mask&&this.mask.hide()}}),getFooterButtonHTML:function(e){var t=e.part,n=this.helper,i=""+n.getPartClassName(t)+" "+n.getPartClassName("button");return'<a id="'+n.getPartId(t)+'" data-part="'+t+'"class="'+i+'" href="#">'+e.text+"</a>"},setWidth:function(e){return this.set("width",e),this},setHeight:function(e){return this.set("height",e),this},setTitle:function(e){return this.set("title",e),this},getTitle:function(){return this.helper.getPart("title")},setContent:function(e){return this.set("content",e),this},getContent:function(){return this.helper.getPart("body")},setFooter:function(e){return this.set("footer",e),this},getFooter:function(){return this.helper.getPart("footer")},show:function(){return this.set("visible",!0),this},hide:function(){if(this.set("visible",!1),this.hideDispose)this.dispose();return this},addFooterButton:function(e,t){var n=this.buttons||[];return this.set("buttons",n.concat({part:e,text:t})),this},getFooterButton:function(e){return this.helper.getPart(e)},dispose:function(){if(this.$parent("dispose"),this.undelegate(this.main,"click",this._onMainClicked),e(this.main).remove(),this.mask)this.mask.dispose()}});return r.Mask=i,r.DEFAULT_ALERT_OPTIONS={title:"警告",close:!1,skin:"alert",buttons:[{part:"confirm",text:"确认"}],hideDispose:!0,maskClickClose:!1},r.alert=function(n){var i=new r(t.extend({},r.DEFAULT_ALERT_OPTIONS,n)),o=new e.Deferred;return i.render().on("buttonclick",function(e){if("confirm"===e.part)o.resolve(),this.hide()}).show(),o.promise()},r.DEFAULT_CONFIRM_OPTIONS={title:"请确认",close:!1,skin:"confirm",buttons:[{text:"确认",part:"confirm"},{text:"取消",part:"cancel"}],hideDispose:!0,maskClickClose:!1},r.confirm=function(n){var i=new r(t.extend({},r.DEFAULT_CONFIRM_OPTIONS,n)),o=new e.Deferred;return i.render().on("buttonclick",function(e){var t=e.part,n="confirm"===t?"resolve":"reject";o[n](t),this.hide()}).show(),o.promise()},r});