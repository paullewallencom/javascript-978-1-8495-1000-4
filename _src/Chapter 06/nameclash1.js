function change(element) {
    var id = element.id;
    var obj = document.getElementById(id);    
    obj.innerHTML = "";
    obj.innerHTML = "<h1>This is changed!</h1>";
    return true;
}
