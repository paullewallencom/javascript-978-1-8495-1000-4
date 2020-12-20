function combine(element) {
    var id = element.id;
    var obj = document.getElementById(id);
    if(id == "one"){
       obj.innerHTML = "";
       obj.innerHTML = "<h1>One is changed!</h1>";
       return true;
    }
    else if(id == "two"){
       obj.innerHTML = "";
       obj.innerHTML = "<h1>Two is changed!</h1>";
       return true;
    }
    else if(id == "three"){
       obj.innerHTML = "";
       obj.innerHTML = "<h1>Three is changed!</h1>";
       return true;   	
    }     
    else{
    	 ; // do nothing
    }
}