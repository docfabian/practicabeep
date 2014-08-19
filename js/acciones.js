//JavaScript
	
$(document).ready(function(e){	
	document.addEventListener("deviceready",function(){
    
	$('#beep').tap(function(){
		navigator.notification.beep(1);
	});//tap del beep
	
	$('#vibrar').tap(function(){
		navigator.notification.vibrate(1000);
	});//tap del vibrar
	
	},false); //deviceready
});//ready