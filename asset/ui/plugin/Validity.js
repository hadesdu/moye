/*! 2015 Baidu Inc. All Rights Reserved */
define("ui/plugin/Validity",["require"],function(){function t(){this.states=[],this.stateIndex={},this.customMessage="",this.customValidState=null}return t.prototype.addState=function(t,e){if(this.stateIndex[t]){if(this.stateIndex[t]===e)return;for(var n=0;n<this.states.length;n++)if(this.states[n]===this.stateIndex[t]){this.states.splice(n,1);break}}this.states.push(e),this.stateIndex[t]=e},t.prototype.getState=function(t){return this.stateIndex[t]||null},t.prototype.getStates=function(){return this.states.slice()},t.prototype.getCustomMessage=function(){return this.customMessage},t.prototype.setCustomMessage=function(t){this.customMessage=t},t.prototype.setCustomValidState=function(t){this.customValidState=t},t.prototype.isValid=function(){for(var t=this.getStates(),e=t.length-1;e>=0;e--)if(!t[e].getState())return!1;return!0},t.prototype.getValidState=function(){return this.customValidState||(this.isValid()?"valid":"invalid")},t});