/*! 2015 Baidu Inc. All Rights Reserved */
define("ui/plugin/FormSubmit",["require","jquery","./Plugin","../lib","../Control"],function(require){var t=require("jquery"),e=require("./Plugin"),n=require("../lib"),i=(require("../Control"),e.extend({$class:"FormSubmit",initialize:function(e){this.$parent(e),this.triggers=e||[],this.submit=t.proxy(this.submit,this),this.id=this.id||n.guid()},activate:function(e){this.$parent(e);var e=this.control=e;e.on("afterrender",t.proxy(this.bindEvents,this))},inactivate:function(){},bindEvents:function(){for(var t=(this.control,this.triggers),e=t.length-1;e>=0;e--){var i=t[e],r=i.type,a="bind"+n.capitalize(r);this[a]&&this[a](i.id,i.eventType)}},bindControl:function(t,e){var n=this.control.context.get(t);if(e=e||i.defaults.eventType,n)n.on(e,this.submit)},bindElement:function(e,r){var a=n.g(e);if(r=r||i.defaults.eventType,a)t(a).on(r+"."+this.id,this.submit)},submit:function(){this.control.submit()},dispose:function(){this.triggers=null,this.$parent()}}));return i.defaults={eventType:"click"},i});