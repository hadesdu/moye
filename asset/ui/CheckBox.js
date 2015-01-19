/*! 2015 Baidu Inc. All Rights Reserved */
define("ui/CheckBox",["require","./lib","./Control","./painter"],function(require){var e=require("./lib"),t=require("./Control"),n=t.extend({type:"CheckBox",options:{item:"label",activeClass:"checked",datasource:null,value:null},init:function(e){this.$parent(e),this.datasource=this.datasource||$(this.main).data("datasource"),this.value=this.value||$(this.main).data("value")},repaint:require("./painter").createRepaint(t.prototype.repaint,{name:"datasource",paint:function(e,t){var n=$(this.main);if(!this.helper.isInStage("INITED")||!n.data("dom-inited")){t=this.datasource=t||[];for(var r=[],i=0,o=t.length;o>i;i++){var a=t[i];r[i]='<label data-value="'+a.value+'"><input type="checkbox" name="'+this.name+'" value="'+a.value+'">'+a.name+"</label>"}return n.html(r.join("")),this}}},{name:"value",paint:function(t,n){var r=$(this.main);if(!this.helper.isInStage("INITED")||!r.data("dom-inited")){n=this.value=n||[];{var i="-",o=n?n.join(i):"";this.datasource}$(this.item,r).each(function(){var t=$(this),n=t.data("value"),r=e.contains(o,n,i)?"addClass":"removeClass";t[r]().find("input").attr("checked",!0)})}}}),setDataSource:function(e){this.set("datasoruce",e)},initEvents:function(){this.delegate(this.main,"click",e.debounce($.proxy(this._onClick,this),5))},_onClick:function(e){var t=this.item,n=$(e.target).closest(t,this.main),r=this.activeClass,i=n.hasClass(r);n.toggleClass(r).find("input:checkbox").attr("checked",i),this.fire("change",{target:this})},isActiveItem:function(e){return e=$(e),e.is(this.item)&&e.hasClass(this.activeClass)},getValue:function(){var e=[];return $(this.main).find("."+this.activeClass).each(function(){e.push($(this).data("value"))}),e},_getValueFromDom:function(e){return e=$(e),e.attr("value")||e.attr("data-value")},setValue:function(e){return this.value=null,this.set("value",e)},dispose:function(){this.undelegate(this.main,"click",this._onClick),t.prototype.dispose.apply(this,arguments)}});return n});