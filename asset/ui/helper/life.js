/*! 2015 Baidu Inc. All Rights Reserved */
define("ui/helper/life",["require","../main","../Context"],function(require){var e=require("../main"),t=require("../Context"),n={NEW:0,INITED:1,RENDERED:2,DISPOSED:4};return{isInStage:function(e){if(null==n[e])throw new Error("Invalid life cycle stage: "+e);return this.stage===n[e]},changeStage:function(e){if(null===n[e])throw new Error("Invalid life cycle stage: "+e);return this.stage=n[e],this},initContext:function(){var n=this.control,i=n.context;if(!t.isContext(i))i=t.get(i)||e.getContext();return n.context=null,n.setContext(i),this},dispose:function(){}}});