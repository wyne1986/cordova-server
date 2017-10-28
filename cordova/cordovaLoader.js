(function(){
	var cdvpath = "/static/js/cordova";
	var cdvplatform = navigator.platform;
	var script = "";
	if(cdvplatform.indexOf("Win")==0){
		script = (cdvpath+"/windows/cordova.js");
	}else if(cdvplatform.indexOf("Mac")==0 || cdvplatform.indexOf("iPhone")==0 || cdvplatform.indexOf("iPad")==0){
		script = (cdvpath+"/ios/cordova.js");
	}else if(cdvplatform.indexOf("Linux a")==0 || cdvplatform.indexOf("Linux i")==0){
		script = (cdvpath+"/android/cordova.js");
	}else{
		console.warn("This cordova plugin not support your device");
	}
  var cdvm = document.createElement("script");
  cdvm.type = "text/javascript";
  cdvm.src = script;
  var cdvs = document.getElementsByTagName("head")[0]; 
  cdvs.appendChild(cdvm);
})();