/*! 2015 Baidu Inc. All Rights Reserved */
define("ui/lib/type",["require","jquery","./function","./array"],function(require){function e(e,t){return Object.prototype.toString.call(t).slice(8,-1)===e}var t=require("jquery"),n=require("./function"),i=require("./array"),exports={},r=["Null","Undefined","String","Array","Function","Number","Date","Object","Boolean"];return i.each(r,function(t){exports["is"+t]=n.curry(e,t)}),exports.isNaN=function(e){return Number.isNaN(e)},exports.isElement=function(e){return!(!e||1!==e.nodeType)},exports.typeOf=function(e){return exports.isElement(e)?"element":t.type(e)},exports});