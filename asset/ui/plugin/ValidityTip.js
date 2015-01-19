/*! 2015 Baidu Inc. All Rights Reserved */
define("ui/plugin/ValidityTip",["require","jquery","../Control"],function(require){var t=require("jquery"),e=require("../Control"),n=e.extend({type:"validate-tip",options:{auto:!0,icon:!0},init:function(e){t.extend(this,e)},show:function(e){var n=t(this.main),i=e.getValidState(),r=this._getIconHTML(i)+this._getMessage(e);if(this._validState!==i)this.removeState(this._validState),this.addState(i),this._validState=i;return n.html(r),this},hide:function(){return t(this.main).hide(),this},_getMessage:function(t){if(t.isValid())return"";var e=t.getCustomMessage();if(e)return e;for(var n=t.getStates(),i=n.length-1;i>=0;i--)if(!n[i].getState())return n[i].getMessage()},_getIconHTML:function(t){var e=this.icon;if(!e)return"";else return'<i class="iconfont">'+("valid"===t?"&#xe607;":"&#xe608;")+"</i>"},place:function(e,n){t(e).insertAfter(n.main)},execute:function(e){if(this.target=e,this.render(),this.place(this.main,e),e.tip=this,this.auto)e.on("invalid",t.proxy(this._onValidityChange,this)),e.on("valid",t.proxy(this._onValidityChange,this))},_onValidityChange:function(t){this.show(t.validity)},dispose:function(){t(this.main).remove(),this.target.tip=null,this.target=null}});return function(t){return new n(t||{})}});