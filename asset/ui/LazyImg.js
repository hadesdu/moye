/*! 2015 Baidu Inc. All Rights Reserved */
define("ui/LazyImg",["require","jquery","./lib","./Lazy"],function(require){var e=require("jquery"),t=require("./lib"),n=require("./Lazy"),i={load:function(t,i){var r=this.options.src,a=this.options.offset;if(this.imgs=e.grep(this.imgs,function(n){n=e(n);var o=n.parent().parent(),s=n.attr(r);if(!o.height()||!s)return!1;var u=n.offset();u.right=u.left+n.width(),u.bottom=u.top+n.height();var l=u.left-a.x>=t.x+i.x,c=u.top-a.y>=t.y+i.y,f=u.right+a.x<=t.x,h=u.bottom+a.y<=t.y;if(!(l||c||f||h))return n.attr("src",s),n.removeAttr(r),!1;else return!0}),!this.imgs.length)n.remove(this.main)}},r=t.newClass({type:"LazyImg",options:{main:"",src:"_src",imgs:null,offset:{y:32}},initialize:function(r,a){r=this.setOptions(r),a=this.main=t.g(r.main)||e("."+r.main)[0],this.imgs=r.imgs||e("img",a).toArray(),n.add(a,e.proxy(i.load,this),r.offset)}}).implement(t.configurable);return r.load=function(n,i){if(t.isObject(n))i=n,n=null;i=i||{},n=n||"lazy-img",e("."+n).each(function(t,n){new r(e.extend(i,{main:n}))})},r});