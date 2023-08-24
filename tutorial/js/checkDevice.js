/**
* 获取客户端信息
*/
function isMobileDevice(){  
   var userAgentInfo = navigator.userAgent;  
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
   var agentinfo = null;  
   for (var i = 0; i < Agents.length; i++) {  
       if (userAgentInfo.indexOf(Agents[i]) > 0) { return true; }
   }
	return false;
}