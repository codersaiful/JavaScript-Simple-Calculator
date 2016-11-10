function doReset(){
	document.getElementById("screen_store").value = 0;
	document.getElementById("temp_screen_store").value = 0;
	document.getElementById("sign_store").value = 0;
}
function getTotal(sign,first_value,second_value){
	var total = 0;
	if(sign == '+'){
		total = parseInt(first_value) + parseInt(second_value);
	}else if(sign == '-'){
		total = parseInt(second_value) - parseInt(first_value)
	}else if(sign == '*'){
		total = parseInt(first_value) * parseInt(second_value)
	}else if(sign == '/'){
		total = parseInt(second_value) / parseInt(first_value)
	}
	
	return total;
}
function pressNumber(data){
	var new_screen_value;
	var current_screen_value = document.getElementById("screen").value;
	var temp_screen_store_value = document.getElementById("temp_screen_store").value;
	
	if(current_screen_value == 0 || temp_screen_store_value>0 ){
		new_screen_value = data;
		document.getElementById("temp_screen_store").value = 0;
	}else{
		new_screen_value = current_screen_value + data;
	}

	document.getElementById("screen").value=new_screen_value;
}

function pressSign(data){
	var screen_value = document.getElementById("screen").value;
	
	var sign_store_value = document.getElementById("sign_store").value;
	if(sign_store_value != 0){
		var screen_store_value = document.getElementById("screen_store").value;
		var total = getTotal(data,screen_value,screen_store_value);
		//var total = parseInt(screen_value) + parseInt(screen_store_value);
		document.getElementById("screen").value = total;
		screen_value = document.getElementById("screen").value;
	}
	
	document.getElementById("sign_store").value = data;
	document.getElementById("screen_store").value = screen_value;
	document.getElementById("temp_screen_store").value = screen_value;
	
	
	
	
}

function getResult(){

	
	var screen_value,screen_store_value,total,sign;
	sign = document.getElementById("sign_store").value;
	screen_value = document.getElementById("screen").value;
	screen_store_value = document.getElementById("screen_store").value;
	//total = parseInt(screen_value)+parseInt(screen_store_value);
	total = getTotal(sign,screen_value,screen_store_value);
	//Result will go to screen 
	document.getElementById("screen").value = total;
	doReset();
	document.getElementById("temp_screen_store").value=1;
	
}


function clearButton(){
	document.getElementById("screen").value = 0;
	doReset();
}








