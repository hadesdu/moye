/*! 2015 Baidu Inc. All Rights Reserved */
define("ui/helper/dom",["require","../lib","../main"],function(require){function e(){return[].slice.call(arguments,0).join("-")}var t=require("../lib"),n=require("../main"),i={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};return{getPartClasses:function(t){var i=this.control,r=i.type.toLowerCase(),a=i.skin,o=n.getConfig("uiClassPrefix"),s=n.getConfig("skinClassPrefix"),u=[];if(t){if(u.push(e(o,r,t)),a)for(var l=0,c=a.length;c>l;l++)a[l]&&u.push(e(s,a[l],r,t))}else if(u.push(e(o,r)),a)for(l=0,c=a.length;c>l;l++)a[l]&&u.push(e(s,a[l]),e(s,a[l],r));return u},getPartClassName:function(e){return this.getPartClasses(e).join(" ")},getPrimaryClassName:function(t){var i=this.control.type.toLowerCase();return t?e(n.getConfig("uiClassPrefix"),i,t):e(n.getConfig("uiClassPrefix"),i)},addPartClasses:function(e,t){if("string"==typeof t)t=this.getPart(t);if(t=t||this.control.main){var n=this.getPartClassName(e);$(t).addClass(n)}},removePartClasses:function(e,t){if("string"==typeof t)t=this.getPart(t);if(t=t||this.control.main){var n=this.getPartClassName(e);$(t).removeClass(n)}},getStateClasses:function(t){var i=this.control.type.toLowerCase(),r=[e(n.getConfig("uiClassPrefix"),i,t),e(n.getConfig("stateClassPrefix"),t)],a=this.control.skin;if(a)for(var o=n.getConfig("skinClassPrefix"),s=0,u=a.length;u>s;s++)a[s]&&r.push(e(o,a[s],t),e(o,a[s],i,t));return r},getStateClassName:function(e){return this.getStateClasses(e).join(" ")},addStateClasses:function(e){var t=this.control.main;if(t){var n=this.getStateClassName(e);$(t).addClass(n)}},removeStateClasses:function(e){var t=this.control.main;if(t){var n=this.getStateClassName(e);$(t).removeClass(n)}},getPart:function(e){return t.g(this.getPartId(e))},getPartId:function(e){var t=this.control;return"ctrl-"+t.type.toLowerCase()+"-"+t.id+(e?"-"+e:"")},getPartBeginTag:function(e,n,r){r=r?t.map(r,function(e,t){return t+'="'+e+'"'}).join(" "):"";var a="<"+n+' id="'+this.getPartId(e)+'" data-part="'+e+'"class="'+this.getPartClassName(e)+'"'+r+(i.hasOwnProperty(n)?"":">");return a},getPartEndTag:function(e,t){var n=i.hasOwnProperty(t)?" />":"</"+t+">";return n},getPartHTML:function(e,t,n,i){return t=t||"div",this.getPartBeginTag(e,t,i)+(n||"")+this.getPartEndTag(e,t)},createPart:function(e,t,n,i){return $("<"+(t||"div")+">").attr(i||{}).attr("id",this.getPartId(e)).data("part",e).addClass(this.getPartClassName(e)).html(n).get(0)}}});