//avoid multiple selections on radio buttons
var purificar = function () {   
if(document.getElementById("man").checked){
 document.getElementById("woman").checked = false;
 document.getElementById("binary").checked = false;
}
else if(document.getElementById("woman").checked){
    document.getElementById("man").checked = false;
 document.getElementById("binary").checked = false;
}
else if(document.getElementById("binary").checked){
    document.getElementById("man").checked = false;
 document.getElementById("woman").checked = false;
}
}