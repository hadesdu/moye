/*! 2015 Baidu Inc. All Rights Reserved */
define("ui/Control",["require","jquery","./lib","./main","./Helper"],function(require){var e=require("jquery"),t=require("./lib"),n=require("./main"),i=require("./Helper"),r=t.newClass({type:"Control",delegate:function(t,n,i){var r=this._delegation;if(!r)r=this._delegation={};var a,o=i.guid;if(o&&r[o])a=r[o].proxy;else a=e.proxy(i,this),o=i.guid;var s=r[o];if(!r[o])s=r[o]={total:0};s.total++,s.proxy=a;var u=n+"."+this.guid+"."+o;return e(t).on(u,a),this},undelegate:function(t,n,i){var r=this._delegation,a=i.guid;if(!r||!a||!r[a])return this;var o=n+"."+this.guid+"."+a,s=r[a],u=s.proxy;if(s.total--,e(t).off(o,u),!s.total)delete r[a];if(e.isEmptyObject(r))delete this._delegation;return this},initialize:function(e){var n=this.helper=new i(this);if(n.changeStage("NEW"),this.currentStates={},e=e||{},this.main=e.main?t.g(e.main):this.createMain(),this.id=e.id||t.guid(),e.hasOwnProperty("states")){var r=this.states=e.states;if(t.isString(r))this.states=[r]}if(e.hasOwnProperty("skin")){var a=this.skin=e.skin;if(t.isString(a))this.skin=[a]}delete e.id,delete e.skin,delete e.states,this.bindEvents(e),this.init(e),n.initContext(),this.children=[],this.childrenIndex={},n.initPlugins(),n.changeStage("INITED")},init:function(e){if(this.helper.isInStage("NEW"))this.setOptions(e)},render:function(){if(this.helper.isInStage("INITED"))if(this.fire("beforerender"),this.initStructure(),this.initEvents(),e(this.main).attr(n.getConfig("instanceAttr"),this.id),this.helper.addPartClasses(),this.states&&this.states.length)for(var t=this.states.length-1;t>=0;t--)this.addState(this.states[t]);if(this.repaint(),this.helper.isInStage("INITED"))this.helper.changeStage("RENDERED"),this.fire("afterrender");return this},initStructure:function(){return this},initEvents:function(){return this},repaint:function(e){if(!e){if(this.disabled)this.disable(),delete this.disabled;if(this.hidden)this.hide(),delete this.hidden;if(t.isFunction(this.getValue))this.setReadOnly(this.readOnly),delete this.readOnly}return this},set:function(n,i){var r;if(t.isObject(n))r=n;else r={},r[n]=i;if(!this.helper.isInStage("RENDERED"))return e.extend(this,r),this;var a=[],o={};for(var s in r)if(r.hasOwnProperty(s)){var u=r[s],l=this[s],c=this.isPropertyChanged(s,u,l);if(c){this[s]=u;var f={name:s,oldValue:l,newValue:u};a.push(f),o[s]=f}}if(a.length)this.repaint(a,o);return o},get:function(e){return this[e]},isPropertyChanged:function(e,t,n){return t!==n},appendTo:function(e){if(this.helper.isInStage("INITED"))this.render();return e.appendChild(this.main),this},query:function(t){return e("."+t,this.main).toArray()},createMain:function(){return document.createElement("div")},addState:function(e){if(this.hasState(e))return this;else return this.currentStates[e]=!0,this.helper.addStateClasses(e),this.fire("statechange",{state:e,action:"add"}),this},removeState:function(e){var t=this;if(!t.hasState(e))return t;else return t.currentStates[e]=!1,this.helper.removeStateClasses(e),t.fire("statechange",{state:e,action:"remove"}),t},toggleState:function(e){return this.hasState(e)?this.removeState(e):this.addState(e),this},hasState:function(e){return!!this.currentStates[e]},show:function(){return this.removeState("hidden")},hide:function(){return this.addState("hidden")},toggle:function(){return this.toggleState("hidden")},disable:function(){this.addState("disabled"),this.helper.disableChildren(),this.fire("disable")},enable:function(){this.removeState("disabled"),this.helper.enableChildren(),this.fire("enable")},isDisabled:function(){return this.hasState("disabled")},isReadOnly:function(){return this.hasState("readonly")},setReadOnly:function(e){if(e)this.addState("readOnly");else this.removeState("readOnly")},addChild:function(e,t){var n=this.children,i=this.childrenIndex,r=e.getParent();if(r)r.removeChild(e);if(e.setParent(this),t=t||e.childName)i[t]=e;e.setContext(this.context),n.push(e)},removeChild:function(e){for(var t=this.children,n=this.childrenIndex,i=t.length-1;i>=0;i--)if(t[i]===e)t.splice(i,1);var r=e.childName;delete n[r],e.setParent(null)},getChild:function(e){return this.children[e]},setParent:function(e){return this.parent=e,this},getParent:function(){return this.parent},initChildren:function(){this.helper.initChildren()},setContext:function(t){var i=this.context;if(t!==i){if(i)this.context.remove(this);t.add(this),e(this.main).attr(n.getConfig("contextAttr"),t.id),this.context=t}},dispose:function(){this.fire("beforedispose"),this.helper.disposeChildren(),this.destroyEvents(),this.helper.changeStage("DISPOSED"),this.fire("afterdispose")},use:function(e){var t=this.plugins;if(!this.plugins)t=this.plugins=[];if(t.push(e),!this.helper.isInStage("NEW"))e.activate(this);return this}}).implement(t.observable).implement(t.configurable);return r});