/*! 2015 Baidu Inc. All Rights Reserved */
define("ui/Slider",["require","jquery","./lib","./Control","./SliderAnim"],function(require){var t=require("jquery"),e=require("./lib"),n=require("./Control"),i=require("./SliderAnim"),r={clearSwitchDelayTimer:function(){clearTimeout(this._switchDelayTimer),this._switchDelayTimer=0},onEnter:function(){if(this.auto)this.stop()},onLeave:function(){if(this.auto)this.play()},onPrevClick:function(){var t=this;if(!t._switchDelayTimer)t._switchDelayTimer=setTimeout(function(){r.clearSwitchDelayTimer.call(t),t.goPrev()},t.switchDelay)},onNextClick:function(){var t=this;if(!t._switchDelayTimer)t._switchDelayTimer=setTimeout(function(){r.clearSwitchDelayTimer.call(t),t.goNext()},t.switchDelay)},onPagerClick:function(t){var e=this,n=t.target,i=n.getAttribute("data-index")+"";if(i&&!e._switchDelayTimer)e._switchDelayTimer=setTimeout(function(){r.clearSwitchDelayTimer.call(e),e.go(+i)},e.switchDelay)}},a=n.extend({type:"Slider",options:{index:0,main:"",prev:"&lt;",next:"&gt;",arrow:!0,pager:!0,auto:!0,circle:!0,autoInterval:2e3,switchDelay:50,onChange:null,anim:"slide",animOptions:{easing:"easing",interval:200,direction:"horizontal",rollCycle:""}},init:function(t){this.$parent(t),this.capacity=this.capacity||+this.main.getAttribute("data-capacity")||0;var n=e.isString(this.anim)?i.anims[this.anim]:this.anim;this.curAnim=new n(this,this.animOptions)},initStructure:function(){var e=this.main,n=this.helper,i=this.capacity;if(i>0){if(this.arrow)this.addArrow("prev",this.prev),this.addArrow("next",this.next);if(this.pager)this.addPager(i)}this.stage=t("."+n.getPrimaryClassName("stage"),e).children().addClass(n.getPartClassName("item")).end().get(0),this.refresh()},addArrow:function(e,n){var i=t(this.helper.createPart(e,"i",n));this[e+"Arrow"]=i.appendTo(this.main).css("marginTop",-i.height()/2).get(0)},addPager:function(n){for(var i=[],r=0;n>r;r++)i.push('<i data-index="'+r+'"></i>');var a=this.helper,s=this.pager;if(e.isElement(s))this.pager=s,s=t(s).addClass(a.getPartClassName("pager")),s.attr("id",s.attr("id")||a.getPartId());else s=t(this.helper.createPart("pager","div",i.join("")));this.pager=s.appendTo(this.main).css("marginLeft",-s.width()/2).get(0)},initEvents:function(){var t=this.main;if(this.delegate(t,"mouseenter",r.onEnter).delegate(t,"mouseleave",r.onLeave),this.arrow)this.delegate(this.prevArrow,"click",r.onPrevClick),this.delegate(this.nextArrow,"click",r.onNextClick);if(this.pager)this.delegate(this.pager,"click",r.onPagerClick);if(this.auto)this.play()},_getNextPage:function(t){var e=this.index,n=this.capacity,i=this.circle;if("start"===t)t=0;else if("end"===t)t=this.capacity-1;else t=+t||0;if(t===e)return-1;if(t>=n)t=i?0:n-1;else if(0>t)t=i?n-1:0;return t},isPlaying:function(){return!!this.timer},play:function(){var t=this;if(!t.isPlaying())t.timer=setInterval(function(){t.goNext()},t.autoInterval)},stop:function(){if(this.isPlaying())clearInterval(this.timer),this.timer=null},refresh:function(){var e=t(this.stage),n=e.children();return this.index=0,this.capacity=n.length,this.stageWidth=e.width(),this.stageHeight=e.height(),this._updateControlPart(0,0),this},goPrev:function(){return this.go(this.index-1),this},goNext:function(){return this.go(this.index+1),this},go:function(t){var e=this.index;if(t===e)return this;if(t=this._getNextPage(t),!1!==this.curAnim.switchTo(t,e))this.index=t,this._updateControlPart(e,t),this.fire("change",{index:t,lastIndex:this.lastIndex})},_updateControlPart:function(e,n){var i,r=this.helper;if(this.arrow)i=0===n&&!this.circle?"addClass":"removeClass",t(this.prevArrow)[i](r.getPartClassName("prev-disable")),i=n===this.capacity-1&&!this.circle?"addClass":"removeClass",t(this.nextArrow)[i](r.getPartClassName("next-disable"));if(this.pager){var a=r.getPartClassName("pager-selected");t(this.pager).find(":eq("+e+")").removeClass(a).end().find(":eq("+n+")").addClass(a)}},dispose:function(){if(r.clearSwitchDelayTimer.call(this),this.isPlaying())this.stop();if(this.curAnim.dispose(),this.curAnim=null,this.arrow)this.undelegate(this.prevArrow,"click",r.onPrevClick),this.undelegate(this.nextArrow,"click",r.onNextClick),this.prevArrow=this.nextArrow=null;if(this.pager)this.undelegate(this.pager,"click",r.onPagerClick),this.pager=null;var t=this.main;this.undelegate(t,"mouseenter",r.onEnter).undelegate(t,"mouseleave",r.onLeave),this.main=this.stage=null,this.$parent()}});return a.Anim=i,a});