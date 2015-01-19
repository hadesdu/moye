/*! 2015 Baidu Inc. All Rights Reserved */
define("ui/Filter",["require","jquery","./lib","./Control"],function(require){var e=require("jquery"),t=require("./lib"),n=require("./Control"),i={onClick:function(t){var n=this;n.fire("click",{event:t});var i=e(t.target),r=i,a=i.prop("tagName"),o=i.prop("type");if("LABEL"===a||"INPUT"===a){if("INPUT"===a){if("radio"===o)i.prop("checked",!1);i=i.parent()}else t.preventDefault(),r=i.find("input");var s=n.options,u=s.checkedClass,l=s.disabledClass,c="radio"===r.attr("type");if(!("LABEL"!==i.prop("tagName")||i.hasClass(l)||c&&r.prop("checked"))){var f=c?!0:!i.hasClass(u),p=e(n.groups[r.attr("name")]),h=p.find("."+u);if(c)h.removeClass(u);else{var d=n.options.allTag;if(i.attr(d)){if(i.hasClass("checked"))return void r.prop("checked",!0);h.removeClass(u).find("input").prop("checked",!1)}else p.find("label[data-all]").removeClass(u).find("input").prop("checked",!1)}r.prop("checked",f),i.toggleClass(u);var m=r.attr("name"),g=c?{key:m,value:[r.attr("value")]}:n.getData(m),v=g.value.join(","),y="data-value";if(p.attr(y)!==v)p.attr(y,v),n.fire("change",g)}}}},r=n.extend({type:"Filter",options:{disabled:!1,main:"",prefix:"ecl-ui-filter",allTag:"data-all",groups:"p",item:"label",checkedClass:"checked",disabledClass:"disabled"},init:function(e){this.$parent(e)},initStructure:function(t){var n=this;n.disabled=t.disabled,n.main="string"==typeof t.main?e("#"+t.main):e(t.main),n.main=n.main[0]},render:function(t){{var n=this,r="string"==typeof t?e("#"+t):e(t||n.main);n.options}if(!r.length)throw new Error("main not found!");if(!n.rendered){n.rendered=!0;var a=n.groups={};e(n.group).each(function(t,n){a[e("input",n).attr("name")]=n}),r.on("click",e.proxy(i.onClick,this))}return n},getData:function(t){var n=this,i=n.groups[t],r={key:t},a=r.value=[];if(!i)return r;var o=n.options.checkedClass,s=[],u=!1;if(e("label",i).each(function(t,n){var i=e(n),r=i.find("input"),l=r.val();if(l&&s.push(l),i.hasClass(o))if(i.attr("data-all"))u=!0;else a.push(l)}),u)r.value=s;return r},disableItems:function(n,i){var r=this.options,a=r.checkedClass,o=r.disabledClass,s=this.groups[n],u=",";if(s)i=i.join(u),e("input",s).each(function(n,r){var s=e(r),l=s.parent();if(t.contains(i,s.attr("value"),u))s.prop("checked",!1),l.removeClass(a).addClass(o);else l.removeClass(o)})},enableItems:function(t){var n=this.options.disabledClass,i=this.groups[t];if(i)e("."+n,i).removeClass(n)}});return r});